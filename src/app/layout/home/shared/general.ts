import { GeneralList } from './general-list';
export class General {
    items:GeneralList[]=[
        { indice:0, ref:'', nome:'General...'},
        { indice:1, ref:'http://dpv-br-services1.schbra.latam:8081', nome:'Eventos em Lote'},
        { indice:2, ref:'http://dpv-br-services1.schbra.latam:8080/WebIt', nome:'WebIt'},
        { indice:3, ref:'', nome:'Repasse CTR'},
        { indice:4, ref:'', nome:'Redestinação / Pre-Alert-SSZ'},
        { indice:5, ref:'', nome:'Encerra Robô LI/DI'},
        { indice:6, ref:'', nome:'Integração Custeio'},
        { indice:7, ref:'', nome:'Recalculo Judicial'},
        { indice:8, ref:'', nome:'Integração PO XLS'},
        { indice:9, ref:'', nome:'Download Lote Arquivos'},
        { indice:10, ref:'nfdatasul', nome:'NFE DataSul'},
        { indice:11, ref:'', nome:'DE>PARA NVE'},
        { indice:12, ref:'', nome:'Atua.Unid.Medida'}
    ]
    getList(){
        return this.items 
    }
}
