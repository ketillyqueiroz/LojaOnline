import { Component } from '@angular/core';

@Component({
  selector: 'informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss'],
})
export class InformationsComponent {
  pais = [
    'Brasil: +55',
    'Estados Unidos: +1',
    'Canadá: +1',
    'Reino Unido: +44',
    'Austrália: +61',
    'França: +33',
    'Alemanha: +49',
    'Japão: +81',
    'Índia: +91',
    'China: +86',
    'Rússia: +7',
    'África do Sul: +27',
    'México: +52',
    'Argentina: +54',
    'Chile: +56',
    'Albânia: +355',
    'Argélia: +213',
    'Bangladesh: +880',
    'Bélgica: +32',
    'Bulgária: +359',
  ];

  state = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];
}