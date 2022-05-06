import { FormBuilder } from '@angular/forms';
import { NfdatasulService } from './shared/nfdatasul.service';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-nfdatasul',
  templateUrl: './nfdatasul.component.html',
  styleUrls: ['./nfdatasul.component.css']
})
export class NfdatasulComponent implements OnInit {
  form:any;

  processo:string = '' 
 
  constructor(private formBuilder:FormBuilder, private service:NfdatasulService) { 
    this.criarForm(formBuilder);
  }
  criarForm(formBuilder:FormBuilder){

    this.form = formBuilder.group({

      txProcesso: ['']

    });
  }
  ngOnInit(): void {
  }
  gerarArquivo() {
    this.service.gravar(this.form.get("txProcesso").value).subscribe(
      (data: any) => {
        if (data) {
          let arquivosRead: any = data;
          console.log('arquivosRead.Arquivos = ', arquivosRead.arquivos);
          this.salvarArquivo(data.arquivBase64, data.arquiv);
        }
      });
    }
    salvarArquivo(receivedFile: any, filename: string) {
      console.log(receivedFile);
      const byteArray = this.converterBase64ToBytes(receivedFile);
      var re = /(?:\.([^.]+))?$/;
      let ext = '';
      if (re.exec(filename)) ext = re.exec(filename)![1];
      const blob = new Blob([byteArray], { type: ext });
      FileSaver.saveAs(blob, filename);
    }

  converterBase64ToBytes(receivedFile: any) {
    const byteCharacters = atob(receivedFile);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return byteArray;
  }
}
