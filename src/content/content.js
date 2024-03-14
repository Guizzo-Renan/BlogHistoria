const semelhantes1 = [
  { id: 16, name: 'Formação da troca nas sociedades arcaicas',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpoEptr2qb0GwDXNftDVgqd56iK7-v-sSjw&usqp=CAU' },
 // { id: 17, name: 'a',  image: '' },
 { id: 18, name: 'Definição da sugestão coletiva da idéia de morte',  image: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/5ea20cf5578804c66b88b847688a36e5.jpg' },
  ,{ id: 19, name: 'Paleolítico', image: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2018/11/a-pre-historia-foi-o-periodo-da-trajetoria-humana-antes-da-escrita.jpg' },
  { id: 20, name: 'Mesolítico',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAYq1h1shp7fZ6SL4-KOWbSnnAAuezLxg5Q&usqp=CAU' },
  ,{ id: 21, name: 'Idade dos Metais', image: 'https://pt-static.z-dn.net/files/da9/99da404d702889649005934907de8f77.jpg' },
  { id: 22, name: 'Arte Pre historica', image: 'https://static.todamateria.com.br/upload/ar/te/arte-na-pre-historia-og.jpg?class=ogImageWide' },
 // ,{ id: 23, name: 'a',  image: '' },
  //,{ id: 24, name: 'a',  image: '' },
]
const semelhantes2 = [
  { id: 25, name: 'Grecia Antiga',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdQjzq2zTFBJx_a6RAOv6s0HQDHgJsIVRxQ&usqp=CAU' },
  { id: 26, name: 'Período Pré-Homérico (séculos XX - XII a.C.)',  image: 'https://cdn.hipercultura.com/imagens/hipercultura-grecia-antiga-08-cke.jpg' },
 { id: 27, name: 'Período Homérico (séculos XII - VIII a.C.)',  image: 'https://cdn.hipercultura.com/imagens/hipercultura-grecia-antiga-04.jpg' },
  ,{ id: 28, name: 'Período Arcaico (séculos VIII - VI a.C.)', image: 'https://i.postimg.cc/KvWngmC6/download-2.jpg' },
  { id: 29, name: ' Período Clássico (séculos V - IV a.C.)',  image: 'https://i.postimg.cc/J06jx80B/download-1.jpg' },
  ,{ id: 30, name: 'Período HELENÍSTICO', image: 'https://i.postimg.cc/pLgY3PZf/download.jpg' },
  { id: 31, name: 'Moeda de Moeda Introduzida (600 aC)', image: 'https://www.worldhistory.org/img/r/p/500x600/5307.jpg?v=1682051226' },
  ,{ id: 32, name: 'Jogos Olímpicos (776 aC)',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Olympiade_de_la_R%C3%A9publique_1796%2C_Mus%C3%A9e_de_la_R%C3%A9volution_fran%C3%A7aise_-_Vizille.jpg/290px-Olympiade_de_la_R%C3%A9publique_1796%2C_Mus%C3%A9e_de_la_R%C3%A9volution_fran%C3%A7aise_-_Vizille.jpg' },
  ,{ id: 33, name: 'Peste bubônica em Atenas (430 aC)',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Plague_in_an_Ancient_City_LACMA_AC1997.10.1_%281_of_2%29.jpg/220px-Plague_in_an_Ancient_City_LACMA_AC1997.10.1_%281_of_2%29.jpg' },
  ,{ id: 130, name: 'Invasão dos romanos (146 aC)',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxi1S5N_Ou-JX3Xd5mpp6gTkLgNjqMBaEWrQ&usqp=CAU' },
]
const semelhantes3 = [
  { id: 34, name: 'Filosofia Grecia',  image: 'https://static.todamateria.com.br/upload/es/co/escoladeatenasvaticano-0-cke.jpg?auto_optimize=low' },
  { id: 35, name: 'Tales de Mileto, Anaximandro de Mileto, Anaxímenes de Mileto',  image: 'https://static.todamateria.com.br/upload/ta/le/talesdemiletocke.jpg?auto_optimize=low' },
 { id: 36, name: 'Heráclito de Éfeso',  image: 'https://static.todamateria.com.br/upload/he/ra/heraclitodeefeso-cke.jpg?auto_optimize=low' },
  ,{ id: 37, name: 'Pitágoras de Samos', image: 'https://static.todamateria.com.br/upload/pi/ta/pitagoras-0-cke.jpg?auto_optimize=low' },
  { id: 38, name: 'Xenófanes de Cólofon',  image: 'https://static.todamateria.com.br/upload/xe/no/xenofanes1-cke.jpg?auto_optimize=low' },
  ,{ id: 39, name: 'Parmênides de Eleia', image: 'https://static.todamateria.com.br/upload/pa/rm/parmenides-0-cke.jpg?auto_optimize=low' },
  { id: 40, name: 'Zenão de Eleia', image: 'https://static.todamateria.com.br/upload/80/0p/800pxzenoofeleatibaldiorcarducciescorial-cke.jpg?auto_optimize=low' },
  ,{ id: 41, name: 'Demócrito de Abdera',  image: 'https://static.todamateria.com.br/upload/dr/em/dremocrito3-cke.jpg?auto_optimize=low' },
  { id: 42, name: 'Sócrates',  image: 'https://static.todamateria.com.br/upload/so/cr/socrates-0-cke.jpg?auto_optimize=low' },
  { id: 43, name: 'Platão',  image: 'https://static.todamateria.com.br/upload/pl/at/platao2-cke.jpg?auto_optimize=low' },
 { id: 44, name: 'Aristóteles',  image: 'https://static.todamateria.com.br/upload/ar/is/aristoteles2-cke.jpg?auto_optimize=low' },
  ,{ id: 45, name: 'Ceticismo', image: 'https://static.todamateria.com.br/upload/pi/rr/pirro-cke.jpg?auto_optimize=low' },
  { id: 46, name: 'Epicurismo',  image: 'https://static.todamateria.com.br/upload/ep/ic/epicuro2-cke.jpg?auto_optimize=low' },
  ,{ id: 47, name: 'Estoicismo', image: 'https://static.todamateria.com.br/upload/im/pe/imperadormarcoaurelio-cke.jpg?auto_optimize=low' },
  { id: 48, name: 'Cinismo', image: 'https://static.todamateria.com.br/upload/di/og/diogeneseoscaes-cke.jpg?auto_optimize=low' },
]
const semelhantes4 = [
  { id: 75, name: 'Cultura e Sociedade Romana',  image: 'https://www.walksinsiderome.com/wp-content/uploads/2023/01/Chariot-racing-960x636.png' },
  { id: 76, name: 'Fundação de Roma',  image: 'https://static.todamateria.com.br/upload/ro/mu/romuloeremolobabb.jpg' },
 { id: 77, name: 'Monarquia',  image: 'https://www.walksinsiderome.com/wp-content/uploads/2023/01/Ancient-Roman-festivals.png' },
  ,{ id: 78, name: 'Julio Cesar', image: 'https://i.postimg.cc/5tvMpz4h/Roma2.jpg' },
  { id: 79, name: 'República',  image: 'https://i.postimg.cc/4xs8jh1C/Roma4.jpg' },
  ,{ id: 80, name: 'Império', image: 'https://i.postimg.cc/k41wb1rq/Roma5.jpg' },
  { id: 81, name: 'Invasões germânicas ', image: 'https://i.postimg.cc/dtTnhj5c/Roma3.jpg' },
  ,{ id: 82, name: 'Guerras Púnicas',  image: 'https://4.bp.blogspot.com/-CAnc75L3SW4/VbkRLpYijWI/AAAAAAAAWMs/S1ZoF3fRJVE/s1600/Hist%25C3%25B3ria%2Be%2BSociedade%2B%25287%2529.jpg' },
  { id: 83, name: 'Economia do Império Romano',  image: 'https://i.postimg.cc/W3k6d276/Roma.jpg' },
 { id: 84, name: 'Fim do imperio romano do Ocidente',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rome-_Ruins_of_the_Forum%2C_Looking_towards_the_Capitol.jpg/220px-Rome-_Ruins_of_the_Forum%2C_Looking_towards_the_Capitol.jpg' },
 { id: 85, name: 'Formacao Império Romano do Oriente (Bizantino)',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yT8Jd0KBn3AvHpwY45qcYBDgMXG2qUqrUA&usqp=CAU' },
 { id: 86, name: 'Coliseu ', image: 'https://2.bp.blogspot.com/-mOzjVvKZWVk/VbkSFORbzvI/AAAAAAAAWM0/nkZ2JSTvNU0/s1600/Hist%25C3%25B3ria%2Be%2BSociedade%2B%25288%2529.jpg' },
]
const semelhantes5 = [
  { id: 60, name: 'Alta Idade Média',  image: 'https://www.artesliberais.com.br/wp-content/uploads/2018/11/Post5.jpg' },
  { id: 61, name: 'Baixa Idade Média',  image: 'https://2.bp.blogspot.com/-0hAowmO5qaU/Wbh4xQPmrLI/AAAAAAAAID8/O0n92LUMm5YBG_BOrCWPw3s1AL5zGy7WACK4BGAYYCw/s1600/festa-na-idade-media.jpg' },
 { id: 62, name: '1453: Queda de Constantinopla',  image: 'https://editoraunesp.com.br/blog/icone/queda-de-constantinopla-completa-567-anos' },
  ,{ id: 63, name: 'Cruzadas', image: 'https://s2-galileu.glbimg.com/foumqlhi6O5Hvqket-YHZd9PN7s=/0x0:1279x734/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/y/Y/EqXedHQ4Oc15UEJEAAfw/2017-12-06-1280px-counquest-of-jeusalem-1099.jpeg' },
  { id: 64, name: 'Feudalismo',  image: 'https://www.artesliberais.com.br/wp-content/uploads/2018/11/Post-7.jpg' },
  ,{ id: 65, name: 'Império Bizantino', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjvvQ51CMYAwCizn-oxbxdbCYOCgcAcrA33wZshPw2II1LR3xH_yMp7_umn4YLeOnCkG_XVS5SCR3eI-mKPgxrnzDSmNXmhOHp3qIC2MTQKIknp5SdvO1Mul8JiGMtzPgq9ifCUMv3Vybv/s1600/Constantinople.jpg' },
  { id: 66, name: 'Império Carolíngio', image: 'https://i.postimg.cc/SxKRpPdD/download-4.jpg' },
  ,{ id: 67, name: 'Cultura',  image: 'https://s3.static.brasilescola.uol.com.br/be/2020/02/inquisicao.jpg' },
]
const semelhantes6 = [
  { id: 68, name: 'Antropocentrismo',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZE6NwKE5Jx1ZViXi1WGxDtEdU-0AfJSRhyzR7Ocr8467PTRLXoATi3-IMq0k2osP1QSg&usqp=CAU' },
  { id: 69, name: 'Humanismo e Individualismo',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8F43lfsaPEhiAzRCZbkXPkS-j41fWM1Ch5jYL5ZfH72D64RHGcE36dmbXZtqmr0P948&usqp=CAU' },
 { id: 70, name: 'Racionalismo e Cientificismo',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9N_JrcZo0VMCbDMtBjoCIWniMn9bWNOfLw&usqp=CAU' },
//  ,{ id: 71, name: '', image: '' },
  { id: 72, name: 'Arquitetura',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SLWfVAGwb2XOEH59gPz632YjKpkz9eYiig&usqp=CAU' },
  ,{ id: 73, name: 'Pintura', image: 'https://www.artesliberais.com.br/wp-content/uploads/2018/11/Post-12.jpg' },
  { id: 74, name: 'Literatura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvStHAm9C5IWSnvr7EVVB7wNooNFiTjP4vw&usqp=CAU' },
  ,{ id: 7, name: 'Mercantilismo',  image: 'https://i.pinimg.com/736x/4d/e1/66/4de1667b3440a2cb21aba7190df51871.jpg' },
  { id: 9, name: 'Reforma Protestante',  image: 'https://i.pinimg.com/564x/df/62/39/df623979981582364484b009bea5cc15.jpg' },
 
]
const semelhantes7 = [
  { id: 2, name: '',  image: '' },
  { id: 3, name: '',  image: '' },
 { id: 4, name: '',  image: '' },
  ,{ id: 5, name: '', image: '' },
  { id: 6, name: '',  image: '' },
  ,{ id: 7, name: '', image: '' },
  { id: 8, name: '', image: '' },
  ,{ id: 9, name: '',  image: '' },
]
const semelhantes8 = [
  { id: 2, name: '',  image: '' },
  { id: 3, name: '',  image: '' },
 { id: 4, name: '',  image: '' },
  ,{ id: 5, name: '', image: '' },
  { id: 6, name: '',  image: '' },
  ,{ id: 7, name: '', image: '' },
  { id: 8, name: '', image: '' },
  ,{ id: 9, name: '',  image: '' },
]
const semelhantes9 = [
  { id: 87, name: 'A invenção da Imprensa',  image: 'https://ensinarhistoria.com.br/s21/wp-content/uploads/2021/04/Pericles-discursando-aos-cidadaos-pintura-Philipp-Foltz-1877.png' },
  { id: 88, name: 'Imprensa de gutemberg',  image: 'https://miro.medium.com/v2/resize:fit:1400/1*AfWwvPA9LMhlH4jaAoR_Tw.jpeg' },
 { id: 89, name: 'Reforma luterana',  image: 'https://i.pinimg.com/564x/e2/ee/0a/e2ee0a11720e7c4f32538f5c783aeaba.jpg' },
  ,{ id: 90, name: 'Calvinismo', image: 'https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg' },
  { id: 91, name: 'Anglicanismo',  image: 'https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg' },
  ,{ id: 92, name: 'Nova Formçao economica', image: 'https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg' },
 ]
const semelhantes10 = [
  { id: 93, name: 'Immanuel Kant (1724-1804)',  image: 'https://i.postimg.cc/cCRcvgCQ/Kant.jpg' },
  { id: 94, name: 'Voltair',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82fDw0BgUeyOp24DZmd3NuH9jOeQ3TZ32JMtrdBiUy9X7EKH9UNSjTwSPcoHpOujiBj0&usqp=CAU' },
 { id: 95, name: 'Montesquie',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkn63B3bVbmoTnHWh_DAcT58ZYjAAtdXJ9o9kpXq85hovObR29b6sDzDldy1hbftjG8U&usqp=CAU' },
  ,{ id: 96, name: 'August Comte', image: 'https://i.postimg.cc/cJ5m8GmL/A-Comte.jpg' },
  { id: 97, name: 'Denis Diderot (1713-1784)',  image: 'https://i.postimg.cc/KjqdsH7q/Denis-Direot.jpg' },
  ,{ id: 98, name: 'Jean-Jacques Rousseau (1712-1778)', image: 'https://amigopai.files.wordpress.com/2017/05/rousseau-quadro11.jpg' },
  { id: 99, name: 'Adam Smith (1723-1790)', image: 'https://i.postimg.cc/J48D1dLD/images.jpg' },
  ,{ id: 100, name: 'Jhon Loke,',  image: 'https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/john-locke-iluminismo.jpg' },
  ,{ id: 101, name: 'Thomas Hobbes,',  image: 'https://i.postimg.cc/BvZZyd2s/Hobbes.jpg' },
  ,{ id: 102, name: 'Descartes,',  image: 'https://i.postimg.cc/JnyJky6s/download-5.jpg' },
  

]
const semelhantes11 = [
  { id: 2, name: '',  image: '' },
  { id: 3, name: '',  image: '' },
 { id: 4, name: '',  image: '' },
  ,{ id: 5, name: '', image: '' },
  { id: 6, name: '',  image: '' },
  ,{ id: 7, name: '', image: '' },
  { id: 8, name: '', image: '' },
  ,{ id: 9, name: '',  image: '' },
]
const semelhantes12 = [
  { id: 123, name: 'Leis Intoleráveis',  image: 'https://i.postimg.cc/nrng3tyf/Rev-Americana4.jpg' },
  { id: 124, name: 'Guerra de independência',  image: 'https://i.postimg.cc/yYZYMm5Q/Rev-Americana2.jpg' },
 { id: 125, name: 'Espansao para Oeste',  image: 'https://i.postimg.cc/LXKrZPvX/Rev-Americana3.jpg' },
  ,{ id: 126, name: 'Modelo americano', image: 'https://i.postimg.cc/dQWysj5J/Rev-Americana1.jpg' },

]
const semelhantes13 = [
  //guerra dos trinta anos
  { id: 50, name: 'Assembleia dos estados gerais',  image: 'https://media.gettyimages.com/id/1045433726/pt/vetorial/french-revolution-the-estates-general-of-1789-was-the-first-meeting-since-1614-of-the.jpg?s=612x612&w=gi&k=20&c=akaZRkh-bpVQakYYtlr0L-_wbrpMke3idmQ5UC8sD28=' },
  { id: 51, name: 'Revolta nos campos',  image: 'https://media.gettyimages.com/id/1349705474/pt/vetorial/return-of-louis-xvi-from-versailles-to-paris.jpg?s=612x612&w=gi&k=20&c=E5HdVCRB-et7AYv2AwfDvPOwu2D_n7Bs3PZ_GjwZMZY=' },
  { id: 52, name: 'Queda da bastilha',  image: 'https://i0.wp.com/paraondeir.blog/wp-content/uploads/2022/07/Queda-da-Bastilha.jpg?fit=800%2C631&ssl=1' },
  ,{ id: 53, name: 'A Declaração dos Direitos do Homem e do Cidadão,', image: '' },
  { id: 54, name: 'Morte de Luis XVI',  image: 'https://media.gettyimages.com/id/1385734147/pt/vetorial/execution-of-louis-xvi.jpg?s=612x612&w=gi&k=20&c=UuKecwbOuCnS7bP1_5m6OHBXLUp6IP0ttGA2BO1mZdI=' },
  ,{ id: 55, name: 'Constituiçao de 1793', image: 'https://media.gettyimages.com/id/1363994367/pt/vetorial/louis-xvi-of-france-before-the-national-assembly-on-december-26th-1792.jpg?s=612x612&w=gi&k=20&c=E9CGpDPqOrW4wVCltQmUWfZ5TgCicBbrm_oPfTU0vWM=' },
  { id: 56, name: 'Convenção (1792-1795)', image: '' },
  ,{ id: 57, name: 'Diretório (1795-1799)',  image: '' },
  ,{ id: 58, name: 'Jacobinos e Girondinos',  image: '' },
  ,{ id: 9, name: 'Iluminismo',  image: '' },
  ,{ id: 0, name: 'A Declaração dos Direitos do Homem e do Cidadão,',  image: '' },
  ,{ id: 59, name: 'O 18 de brumario',  image: 'https://media.gettyimages.com/id/538489182/pt/vetorial/a-13-vendemiaire-1795-bonaparte-sufocar-o-levantamento.jpg?s=2048x2048&w=gi&k=20&c=XLodg302nqYGon_tkvBb4931C77_5c_aFE1PZGxBY08=' },
  ,{ id: 15, name: 'Era Napoleonica',  image: '' },
//napoleao
]
const semelhantes14 = [
  { id: 103, name: 'Ascensão de Napoleão Bonaparte',  image: 'https://i.postimg.cc/FzJrt6NK/EraN3.jpg' },
  { id: 104, name: 'Consolidação do Poder',  image: 'https://ep00.epimg.net/elpais/imagenes/2021/05/04/album/1620127756_041477_1620129303_album_normal.jpg' },
  { id: 105, name: 'Guerra da Primeira Coalizão (1792-1797):',  image: 'https://i.postimg.cc/mr827MmT/EraN1.jpg' },
  { id: 106, name: 'Guerra da Segunda Coalizão (1798-1802)',  image: 'https://i.postimg.cc/nV67sbs0/EraN5.jpg' },
 { id: 107, name: 'Guerra da Terceira Coalizão (1803-1806)',  image: 'https://i.postimg.cc/qvpNnkpX/EraN8.jpg' },
 { id: 108, name: 'Guerra da Quarta Coalizão (1806-1807)',  image: 'https://i.postimg.cc/HskG7Kf8/EraN4.jpg' },
 { id: 109, name: 'Guerra Peninsular (1807-1814)',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-U1QEO5IOeUrqDcx8VZ__ZuC5rIsLm-_fA&usqp=CAU' },
 { id: 110, name: 'Invasão da Rússia (1812)',  image: 'https://i.postimg.cc/Zn1qCSV3/Eran7.jpg' },
 { id: 111, name: 'Guerras da Sexta Coalizão (1813-1814)',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4DC35b2P5bFlipPcclzP6-Cwiy9x_DRzDA&usqp=CAU' },
 { id: 112, name: 'Guerra dos Cem Dias (1815)',  image: 'https://i.postimg.cc/4dHyZy1Z/EraN6.jpg' },
 ,{ id: 113, name: 'Congresso de Viena e Restauração', image: 'https://i.postimg.cc/QCPqCH2b/Cong-Viena.jpg' },
  { id: 114, name: 'Exílio e Retorno',  image: 'https://assets-global.website-files.com/60ff690cd7b0537edb99a29a/61af62c34535768111713ee2_ex%C3%ADlio-de-napole%C3%A3o.jpg' },
  
  { id: 115, name: 'Primavera Dos Povos', image: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2018/12/voce-sabia-que-os-ideais-da-revolucao-de-1848-espalharam-pelo-mundo.jpg' },
  ,{ id: 116, name: 'Revoluções e Movimentos Nacionalistas', image: 'https://cliohistoriaeliteratura.files.wordpress.com/2019/12/02-12.jpg?w=657' },
 //https://miniworldminiaturas.com.br/wp-content/uploads/2023/06/Waterloo.jpg 
]

const semelhantes15 = [
  { id: 117, name: 'Primeira Revolução Industrial (Final do século XVIII - início do século XIX)',  image: 'https://miro.medium.com/v2/resize:fit:1200/1*j3zE7LKl6zYY3Ipo06NS7g.jpeg' },
  { id: 118, name: 'Mudanças Sociais e Econômicas',  image: 'https://i.postimg.cc/28Zp086S/Rev-Industrial2.jpg' },
 { id: 119, name: 'Segunda Revolução Industrial (meados do século XIX - início do século XX)',  image: 'https://i.postimg.cc/bwy7p0gs/Rev-Industrial6.jpg' },
  ,{ id: 120, name: 'Impacto na Sociedade e na Economia Global', image: 'https://i.postimg.cc/25pS0KmP/Rev-Industrial3.jpg' },
  { id: 121, name: 'Consequências Sociais e Ambientais',  image: 'https://i.postimg.cc/RZJc3yX8/Rev-Industrial4.jpg' },
  ,{ id: 122, name: 'Cultura e Arte na Era Industrial', image: 'https://i.postimg.cc/rmBjscLf/Rev-Industrial.jpg' },
  
]

const semelhantesExtra = [
  
]






const productData = [
  //Principal
   {
    id: 1,
    name: "pre historia",
    image:
      "https://super.abril.com.br/wp-content/uploads/2018/07/573f79010e21634575052021pre-historia-e-o-porque-usamos-roupas-1170x550.jpeg",
 //   productType: "openBackHeadphones",
    periodo: "Pré-História",
    price: 220,
    rating: 5,
    totalSales: "600 mil a.C ate 4 mil a.C",
    descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",
    semelhantes: semelhantes1 
    },
    {
        id: 2,
        name: "grecia antiga",
        image:
          "https://ensinarhistoria.com.br/s21/wp-content/uploads/2021/04/Pericles-discursando-aos-cidadaos-pintura-Philipp-Foltz-1877.png",
//        productType: "openBackHeadphones",
        periodo: "Idade Antiga",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: " 800 a.C. a 146 a.C.",
        descricao:"A Grécia Antiga foi uma civilização que floresceu na região do Mediterrâneo entre os séculos VIII a.C. e VI a.C. até o surgimento do Império Romano. Foi um período de grande importância histórica e cultural, deixando um legado duradouro que influenciou profundamente a civilização ocidental."+ 

       "Política e Sociedade:"+
        
           " A Grécia Antiga era composta por cidades-estado independentes chamadas de pólis, como Atenas, Esparta, Tebas e Corinto. "+
            "A democracia surgiu em Atenas no século V a.C., onde os cidadãos participavam diretamente na tomada de decisões políticas."+
            "Esparta, por outro lado, era conhecida por seu sistema político oligárquico e sua sociedade militarista."+
        
       " Cultura e Filosofia:"+
        
            "A Grécia Antiga foi o berço da filosofia ocidental, com pensadores como Sócrates, Platão e Aristóteles, que influenciaram profundamente o pensamento ocidental."+
            " A arte e a arquitetura gregas são celebradas por sua beleza e perfeição estética, com exemplos notáveis como o Partenon em Atenas."+
           " A literatura grega produziu obras clássicas como as epopeias de Homero, a Ilíada e a Odisseia, e as peças teatrais de dramaturgos como Sófocles, Eurípides e Ésquilo." +

       " Guerras e Conflitos:"+
        
            "As Guerras Greco-Persas foram uma série de conflitos entre a Grécia e o Império Persa no século V a.C., incluindo as famosas batalhas de Maratona, Termópilas e Salamina."+
            "As guerras internas entre as cidades-estado gregas, como as Guerras do Peloponeso entre Atenas e Esparta, enfraqueceram a Grécia e pavimentaram o caminho para sua conquista pelo Império Macedônico de Alexandre, o Grande, no século IV a.C."+
        
        "Legado:"+
        
            "O legado da Grécia Antiga é vasto e duradouro, influenciando a política, a arte, a filosofia e a ciência até os tempos modernos."+
            "Os ideais democráticos, os princípios filosóficos e os padrões estéticos gregos ainda são estudados e admirados hoje em dia, demonstrando a profunda influência dessa civilização antiga na cultura global.",
 
        semelhantes: semelhantes2
      },
      {
        id: 3,
        name: "Filosofia grecia ",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*AfWwvPA9LMhlH4jaAoR_Tw.jpeg",
      //  productType: "openBackHeadphones",
        periodo: "Idade Antiga",
        price: 169,
        rating: 5,
        timeLeft: 24,
        totalSales: " 800 a.C. a 146 a.C.",
        "descricao": "A filosofia na Grécia Antiga foi um período de exploração intelectual e busca pelo entendimento do mundo e do ser humano. Surgiu no século VI a.C. e se desenvolveu em diferentes escolas de pensamento, cada uma com suas próprias abordagens e questões filosóficas.",
        semelhantes: semelhantes3
      },
    {
        id: 4,
        name: "roma",
        image:
          "https://i.pinimg.com/564x/e2/ee/0a/e2ee0a11720e7c4f32538f5c783aeaba.jpg",
      //  productType: "openBackHeadphones",
        periodo: "Idade Antiga",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: "753 a.C. até 476 d.C.",
        "descricao": "Roma foi uma civilização antiga que se originou na península Itálica e se expandiu para se tornar um dos maiores impérios da história. Fundada, segundo a lenda, em 753 a.C., Roma passou por várias fases, incluindo a República e o Império, cada uma com suas próprias características políticas, sociais e culturais.",
        semelhantes: semelhantes4
      },
      {
        id: 5,
        image:
          "https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg",
      //  productType: "openBackHeadphones",
        periodo: "Idade Média",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: "476 d.C. ate 1453",
        descricao: "A Idade Média, também conhecida como período medieval, foi um período histórico que se estendeu aproximadamente do século V ao século XV d.C. na Europa. Caracterizada pela descentralização do poder político, influência da Igreja Católica, sistema feudal e avanços limitados em áreas como ciência e tecnologia, a Idade Média foi uma época de estagnação em comparação com os períodos anterior e posterior. No entanto, também foi um período de grande desenvolvimento cultural, com avanços na arquitetura, literatura, música e filosofia, muitos dos quais influenciaram a história posterior.",
 
        semelhantes: semelhantes5
      },
      {
        id: 6,
        name: "renacentismo",
        image:
          "https://i.pinimg.com/564x/9a/79/d7/9a79d76ca05059c178e2b26ee09e3c7d.jpg",
      //  productType: "openBackHeadphones",
        periodo: "Idade Moderna",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: "XIV ao XVI",
        descricao: "O Renascimento foi um período de revitalização cultural e intelectual que ocorreu na Europa entre os séculos XIV e XVI. Este movimento foi caracterizado por um ressurgimento do interesse pela arte, ciência, literatura, filosofia e humanidades em geral, inspirado pela redescoberta dos ideais da antiguidade clássica greco-romana. Os renascentistas buscavam recuperar e reinterpretar os conhecimentos e valores da Grécia e Roma antigas, resultando em uma explosão de criatividade e inovação em todas as áreas do conhecimento. O Renascimento teve um impacto duradouro na cultura europeia, influenciando a arte, a política, a religião e a forma como as pessoas compreendiam o mundo ao seu redor. Grandes artistas, cientistas, filósofos e pensadores emergiram durante esse período, deixando um legado que moldou a história e o pensamento ocidental.",
        semelhantes: semelhantes6
      },
    {
        id: 7,
        name: "mercantilismo",
        image:
          "https://i.pinimg.com/736x/4d/e1/66/4de1667b3440a2cb21aba7190df51871.jpg",
       // productType: "openBackHeadphones",
        periodo: "Idade Moderna",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: "século XVIII", 
       
        descricao: "O mercantilismo foi uma doutrina econômica que predominou na Europa durante os séculos XVI ao XVIII. Baseava-se na ideia de que a riqueza de uma nação era medida pela quantidade de ouro e prata que ela possuía. Para aumentar sua riqueza, os países praticavam políticas de protecionismo, buscando exportar mais do que importar, acumular metais preciosos e promover o desenvolvimento de indústrias domésticas. O mercantilismo também envolvia a expansão colonial como uma forma de obter recursos naturais e mercados para os produtos manufaturados. Embora tenha sido criticado por suas políticas intervencionistas e restrições ao comércio, o mercantilismo desempenhou um papel importante na formação do sistema econômico moderno, influenciando práticas comerciais e políticas econômicas até os dias de hoje.",
        semelhantes: semelhantes6//semelhantes7
      },
      {
        id: 8,
        name: "absolutismo",
        image:
          "https://i.pinimg.com/564x/05/7c/da/057cda08404508388e7f617ee85c7e90.jpg",
      //  productType: "openBackHeadphones",
        periodo: "Idade Moderna",
        price: 169,
        rating: 5,
        timeLeft: 24,
        totalSales: "século XVI ao XVIII", 
    //    periodo: "Idade Antiga",
    descricao: "O absolutismo foi um sistema político que predominou na Europa entre os séculos XVI e XVIII, caracterizado pelo poder absoluto e centralizado nas mãos do monarca. Durante esse período, os reis detinham autoridade ilimitada sobre seus territórios, exercendo controle sobre todas as instituições governamentais, legislativas, militares e religiosas. O absolutismo frequentemente envolvia a concentração de poder em uma figura monárquica, frequentemente justificada pela teoria do direito divino dos reis, que afirmava que os monarcas governavam com o consentimento de Deus. Este sistema permitia aos monarcas tomar decisões unilaterais sem o consentimento do parlamento ou de qualquer outra instituição representativa. Embora tenha sido criticado por seu autoritarismo e falta de prestação de contas, o absolutismo também foi responsável por promover a estabilidade política e econômica em alguns países europeus, facilitando o desenvolvimento do Estado moderno.",
        semelhantes: semelhantes6//semelhantes8
      },
    {
      id: 9,
      name: "Reforma protesteante",
      image:
        "https://i.pinimg.com/564x/df/62/39/df623979981582364484b009bea5cc15.jpg",
   //   productType: "openBackHeadphones",
      periodo: "Idade Moderna",
      price: 220,
      rating: 5,
      timeLeft: 27,
      totalSales: "século XVI", 
    //    periodo: "Idade Antiga",
    descricao: "A Reforma Protestante foi um movimento religioso e político que teve lugar na Europa Ocidental durante o século XVI, desafiando as doutrinas e práticas da Igreja Católica Romana. Iniciada por líderes como Martinho Lutero na Alemanha, João Calvino na Suíça e Ulrico Zuínglio na Suíça, a Reforma Protestante questionou a autoridade papal, a venda de indulgências e outras práticas consideradas corruptas pela igreja dominante. Os reformadores propuseram uma volta à fonte das Escrituras Sagradas como a autoridade máxima na vida cristã e defenderam princípios como a justificação pela fé e o sacerdócio universal de todos os crentes. A Reforma teve um impacto profundo na Europa, dividindo a cristandade ocidental entre católicos e protestantes e desencadeando conflitos religiosos e políticos que moldaram o curso da história europeia. Além disso, a Reforma contribuiu para o desenvolvimento do pluralismo religioso, da liberdade de consciência e dos princípios democráticos na Europa e além.",
      semelhantes: semelhantes9
    },
    {
        id: 10,
        name: "iluminismo",
        image:
          "https://2.bp.blogspot.com/-pUK8itntPnk/WuujV306kGI/AAAAAAAABrg/pvDKqB-fG-04EmBRwh0sIr9RY0zLnj97gCLcBGAs/s1600/WhatsApp%2BImage%2B2018-05-02%2Bat%2B1.25.28%2BPM.jpeg",
      //  productType: "openBackHeadphones",
        periodo: "Idade Moderna",
        price: 169,
        rating: 5,
        timeLeft: 24,
        totalSales: "Final do século XVII até o final do século XVIII", 
        periodo: "Idade Antiga",
        descricao: "O Iluminismo foi um movimento intelectual e cultural que teve lugar na Europa durante os séculos XVII e XVIII, enfatizando a razão, a ciência, a liberdade individual e o progresso humano. Surgindo como uma reação às tradições religiosas e autoritárias do período anterior, os iluministas advogaram pela aplicação da razão e da observação empírica na compreensão do mundo natural e na organização da sociedade. Eles buscavam reformar a sociedade através do conhecimento, defendendo ideias como a liberdade de expressão, os direitos individuais, a separação entre Estado e Igreja e o governo representativo. Grandes pensadores do Iluminismo incluem Voltaire, John Locke, Montesquieu, Jean-Jacques Rousseau e Denis Diderot, cujas obras influenciaram profundamente os desenvolvimentos políticos, sociais e científicos da época. O Iluminismo teve um impacto duradouro na cultura e no pensamento ocidental, contribuindo para o advento da Revolução Francesa, o surgimento das democracias modernas e a disseminação dos ideais de liberdade e igualdade em todo o mundo.",
        semelhantes: semelhantes10
      },
    {
      id: 11,
      name: "Revoluçao inglesa",
      image:
        "https://beduka.com/blog/wp-content/uploads/2020/12/revolu%C3%A7ao-burguesa-inglesa-gloriosa.jpg",
   //   productType: "openBackHeadphones",
      periodo: "Idade Moderna",
      price: 169,
      rating: 5,
      timeLeft: 24,
      totalSales: "De 1642 DC ate 1688", 
      periodo: "Idade Antiga",
      descricao: "As Revoluções Inglesas foram uma série de conflitos políticos, sociais e religiosos que ocorreram na Inglaterra durante o século XVII. Elas incluíram a Revolução Puritana (ou Guerra Civil Inglesa), a Revolução Gloriosa e a Revolução de 1688. A Revolução Puritana foi um conflito entre o Parlamento e o rei Carlos I, que resultou na execução do monarca em 1649 e na instauração de uma república liderada por Oliver Cromwell, conhecida como o período da Comunidade. A Revolução Gloriosa, em 1688, foi um golpe sem derramamento de sangue que resultou na deposição do rei Jaime II e na ascensão de Guilherme III e Maria II ao trono inglês. Estas revoluções estabeleceram o princípio do governo constitucional limitado, restringindo o poder do monarca e fortalecendo o papel do Parlamento. Elas também tiveram um impacto significativo no desenvolvimento do sistema parlamentar e na consolidação do Estado de Direito na Inglaterra, estabelecendo bases importantes para o desenvolvimento do governo representativo moderno.",
      semelhantes: semelhantesExtra//semelhantes11
    },
    {
      id: 12,
      name: "Revoluçao americana",
      image:
        "https://media.gazetadopovo.com.br/rodrigo-constantino/2015/07/assassins-creed-3-trailer-breakdown-1b5dada0.jpg",
    //  productType: "openBackHeadphones",
      periodo: "Idade Moderna",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: "De 1765 ate 1783 " , 
      periodo: "Idade Antiga",
      descricao: "A Revolução Americana foi um período de conflito e transformação política que ocorreu nas colônias americanas britânicas entre 1765 e 1783. Ela foi impulsionada por uma série de tensões entre os colonos e o governo britânico, incluindo questões de representação política, impostos excessivos e restrições comerciais. O movimento revolucionário ganhou força com eventos como o Boston Tea Party, em 1773, e a publicação dos Panfletos de Tom Paine, como o 'Senso Comum'. A guerra começou em 1775 com a Batalha de Lexington e Concord e culminou na Declaração de Independência dos Estados Unidos em 1776, redigida por Thomas Jefferson e adotada pelo Segundo Congresso Continental. A Revolução Americana terminou oficialmente em 1783 com o Tratado de Paris, que reconheceu a independência dos Estados Unidos. Este evento foi significativo não apenas para os Estados Unidos, mas também para o mundo, pois inspirou movimentos de independência e democratização em todo o globo e estabeleceu os Estados Unidos como uma potência mundial.",
      semelhantes: semelhantes12
    }, 
    {
        id: 13,
        name: "Revoluçao fancesa",
        image:
          "https://i.pinimg.com/736x/ed/89/bd/ed89bd6da969f417790d33b139ca4aaa.jpg",
       // productType: "openBackHeadphones",
        periodo: "Idade Contemporânea",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: "De 1789 ate 1799", 
        periodo: "Idade Antiga",
        descricao: "A Revolução Francesa foi um evento histórico que ocorreu na França entre 1789 e 1799, marcando o fim da monarquia absoluta e o surgimento da República Francesa. Foi impulsionada por uma combinação de fatores, incluindo tensões sociais, econômicas e políticas, bem como ideias iluministas sobre igualdade, liberdade e fraternidade. A Revolução começou com a convocação dos Estados Gerais em 1789 e foi caracterizada por eventos como a Queda da Bastilha, em 1789, a execução do rei Luís XVI em 1793, e o Reinado do Terror sob o governo do Comitê de Salvação Pública. A Revolução Francesa resultou em mudanças profundas na sociedade francesa, incluindo a abolição do sistema feudal, a proclamação dos direitos do homem e do cidadão, e a secularização do Estado. No entanto, também foi marcada por violência e instabilidade política, culminando no golpe de Napoleão Bonaparte em 1799, que levou ao estabelecimento do Consulado e, posteriormente, ao Império. Apesar de seus desafios e contradições, a Revolução Francesa teve um impacto duradouro na política, na cultura e na sociedade, inspirando movimentos revolucionários em todo o mundo e promovendo ideais de democracia e igualdade.",
        semelhantes: semelhantes13
      },
      {
        id: 14,
        name: "Era napoleonica",
        image:
          "https://s2.glbimg.com/10j9f8fHV1aXxJudkRcS6i29thg=/e.glbimg.com/og/ed/f/original/2019/01/04/napoleon-big.jpg",
       // productType: "openBackHeadphones",
       periodo: "Idade Contemporânea",
        price: 169,
        rating: 5,
        timeLeft: 24,
        totalSales: "De 1799 até 1815",
        periodo: "Idade Antiga",
        descricao: "A Era Napoleônica refere-se ao período histórico que abrange o governo de Napoleão Bonaparte na França e na Europa entre 1799 e 1815. Iniciou-se com o golpe de Estado de Napoleão em 1799, que encerrou a Revolução Francesa e estabeleceu o Consulado, com Napoleão como primeiro-cônsul. Em 1804, Napoleão se autoproclamou imperador dos franceses, dando início ao Primeiro Império Francês. Durante seu governo, Napoleão promoveu uma série de reformas políticas, legais e econômicas, incluindo a criação de um código legal uniforme (Código Napoleônico), a promoção da meritocracia e a expansão da infraestrutura. No entanto, a Era Napoleônica também foi marcada por conflitos militares constantes, incluindo as Guerras Napoleônicas, em que as forças de Napoleão lutaram contra várias coalizões europeias. Estas guerras terminaram com a derrota de Napoleão na Batalha de Waterloo, em 1815, e sua subsequente abdicação e exílio na Ilha de Santa Helena, onde ele morreu em 1821. A Era Napoleônica teve um impacto duradouro na Europa, influenciando a geopolítica, o direito, a administração pública e a cultura em todo o continente.",
        semelhantes: semelhantes14
        
      },
      {
        id: 15,
        name: "Revoluçao industrial",
        image:
          "https://www.trabalhosescolares.net/wp-content/uploads/2008/07/revolucao_industrial_fundicao_ferro.jpg",
       // productType: "openBackHeadphones",
       periodo: "Idade Contemporânea",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: "De 1760 ate 1840.", 
        periodo: "Idade Antiga",
        descricao: "A Revolução Industrial foi um período de transformação econômica, social e tecnológica que teve início na Grã-Bretanha durante o século XVIII e se estendeu por grande parte do mundo nos séculos seguintes. Caracterizou-se pelo surgimento de novas tecnologias, como a máquina a vapor, o telégrafo, a locomotiva a vapor e a produção em massa. Estas inovações promoveram mudanças significativas nos métodos de produção, transporte e comunicação, levando a um aumento sem precedentes na produtividade e na produção de bens. A Revolução Industrial também resultou em mudanças demográficas e urbanas, com o êxodo rural e a concentração de pessoas em áreas urbanas para trabalhar nas fábricas. Embora tenha trazido benefícios econômicos, como o aumento da riqueza e a expansão do comércio, a Revolução Industrial também provocou problemas sociais, como a exploração da mão-de-obra, a poluição e o surgimento de condições de trabalho desumanas. No entanto, seu impacto foi profundo e duradouro, moldando a sociedade moderna e lançando as bases para a era da industrialização e globalização.",
         
        semelhantes: semelhantes15
      },



    



      //Segundarios
      {
        id: 16,
        name: "Formação da troca nas sociedades arcaicas",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpoEptr2qb0GwDXNftDVgqd56iK7-v-sSjw&usqp=CAU",
        productType: "openBackHeadphones",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 , 
        periodo: "Idade Antiga",
        descricao: "A formação da troca nas sociedades arcaicas representa um marco crucial na evolução social e econômica da humanidade. Nos primórdios da história humana, as sociedades arcaicas desenvolveram sistemas de troca e reciprocidade que serviram como base para suas economias e relações sociais. Inspiradas pela abordagem antropológica de Levi-Strauss, podemos compreender a troca não apenas como uma simples transação comercial, mas como um processo simbólico que envolve uma complexa teia de relações sociais, culturais e simbólicas. Nas sociedades arcaicas, a troca não se limitava apenas à transferência de bens materiais, mas também incluía a troca de conhecimento, prestígio, alianças matrimoniais e rituais. Este sistema de troca era fundamental para a coesão social e a manutenção do equilíbrio dentro das comunidades arcaicas. Além disso, a troca desempenhou um papel crucial na circulação de recursos e na criação de redes de interdependência entre diferentes grupos sociais. Portanto, ao examinar a formação da troca nas sociedades arcaicas, é essencial adotar uma abordagem antropológica holística que leve em consideração não apenas os aspectos econômicos, mas também os aspectos culturais, simbólicos e sociais envolvidos neste complexo fenômeno.",       referencia: "Levi strauss",
         
        semelhantes: semelhantes1
      },
      {
        id: 17,
        name: "",
        image:
          "",
        productType: "openBackHeadphones",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 , 
        periodo: "Idade Antiga",
        descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",
 
         
        semelhantes: semelhantes1
      },
      {
        id: 18,
        name: "Definição da sugestão coletiva da idéia de morte",
        image:
          "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/5ea20cf5578804c66b88b847688a36e5.jpg",
        productType: "openBackHeadphones",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 , 
        periodo: "Idade Antiga",
        descricao: "A definição da sugestão coletiva da ideia de morte representa um aspecto fundamental da antropologia cultural, especialmente quando consideramos as sociedades tradicionais e as crenças relacionadas à morte. Inspirados pela abordagem antropológica de pensadores como Émile Durkheim, podemos entender a sugestão coletiva como um fenômeno social que influencia as percepções e práticas relacionadas à morte em uma determinada comunidade ou cultura. Nas sociedades tradicionais, a ideia de morte muitas vezes está enraizada em mitos, rituais e tradições compartilhadas, que são transmitidos de geração em geração e moldam as atitudes e comportamentos em relação à morte. Por exemplo, em algumas culturas, a morte é vista como uma passagem para outro mundo ou como parte de um ciclo natural de renovação, enquanto em outras culturas, pode ser temida como uma ameaça existencial ou como punição por transgressões sociais. Através da sugestão coletiva, as crenças e práticas relacionadas à morte são internalizadas pelos membros de uma comunidade, contribuindo para a coesão social e a identidade cultural. Portanto, ao examinar a definição da sugestão coletiva da ideia de morte, é essencial considerar não apenas os aspectos individuais, mas também os aspectos sociais e culturais que moldam nossa compreensão e experiência da morte.",  referencia: "Levi strauss",
         
        semelhantes: semelhantes1
      },
      {
        id: 19,
        name: "Paleolítico,",
        image:
          "https://conhecimentocientifico.r7.com/wp-content/uploads/2018/11/a-pre-historia-foi-o-periodo-da-trajetoria-humana-antes-da-escrita.jpg",
        productType: "openBackHeadphones",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 , 
        periodo: "Idade Antiga",
        descricao: "O Paleolítico é o período da pré-história que se estende desde o surgimento dos primeiros hominídeos até aproximadamente 10.000 a.C., marcado pelo uso de ferramentas de pedra e pela prática da caça, coleta e pesca como principais meios de subsistência. Inspirados pelas teorias da antropologia evolutiva, como as de Charles Darwin e Louis Leakey, podemos compreender o Paleolítico como uma época de grande adaptação humana ao ambiente natural. Durante este período, os grupos humanos vagavam em pequenas bandas nômades em busca de alimentos e abrigo, desenvolvendo técnicas avançadas de caça e coleta para sobreviver em diversos ambientes, desde florestas até planícies. Além disso, o Paleolítico testemunhou o surgimento da linguagem simbólica, arte rupestre e rituais funerários, sugerindo um desenvolvimento inicial da cultura humana. Portanto, ao examinar o Paleolítico, é essencial adotar uma abordagem multidisciplinar que leve em consideração não apenas os aspectos materiais, como ferramentas e artefatos, mas também os aspectos culturais, sociais e cognitivos que moldaram a vida humana durante este período de nossa história.",
         
        semelhantes: semelhantes1
      },
      {
        id: 20,
        name: "Mesolítico",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAYq1h1shp7fZ6SL4-KOWbSnnAAuezLxg5Q&usqp=CAU",
        productType: "openBackHeadphones",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 , 
        periodo: "Idade Antiga",
        descricao: "O Mesolítico é um período da pré-história que sucede o Paleolítico e precede o Neolítico, datado aproximadamente entre 10.000 a.C. e 6.000 a.C. Durante o Mesolítico, ocorreram mudanças significativas no estilo de vida humano, marcadas por uma transição gradual de sociedades de caçadores-coletores para formas mais sedentárias de subsistência. Inspirados pelas descobertas arqueológicas e pelas teorias da antropologia, podemos entender o Mesolítico como um período de adaptação às mudanças climáticas e ambientais após o fim da última Era Glacial. Durante este tempo, as comunidades humanas começaram a desenvolver técnicas mais avançadas de caça, pesca e coleta, aproveitando os recursos disponíveis em seus ambientes locais. Além disso, o Mesolítico testemunhou o surgimento de novas tecnologias, como ferramentas de pedra mais refinadas e a fabricação de cerâmica rudimentar, bem como mudanças na organização social e na estrutura familiar. Portanto, ao examinar o Mesolítico, é essencial considerar não apenas as mudanças materiais e tecnológicas, mas também os aspectos sociais, culturais e econômicos que moldaram a vida humana durante este período de transição.",
         
        semelhantes: semelhantes1
      },
      
        {
          id: 21,
          name: "Idade dos Metais",
          image:
            "https://pt-static.z-dn.net/files/da9/99da404d702889649005934907de8f77.jpg",
          productType: "openBackHeadphones",
          price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao: "A Idade dos Metais é um período da pré-história que sucede o Neolítico e é caracterizado pelo uso generalizado de metais na confecção de ferramentas, armas e utensílios. Este período é dividido em três subperíodos: Idade do Cobre, Idade do Bronze e Idade do Ferro. Inspirados pelas descobertas arqueológicas e pelos avanços na metalurgia, podemos entender a Idade dos Metais como um marco significativo na história da humanidade, representando um grande avanço tecnológico e social. Durante este período, os seres humanos aprenderam a extrair e trabalhar metais, como cobre, bronze e ferro, criando ferramentas e artefatos mais duráveis e eficientes. Isso levou a mudanças substanciais na organização social, no comércio e na guerra, uma vez que o acesso e o controle dos recursos metálicos se tornaram fundamentais para o poder e a influência das sociedades da época. Portanto, ao examinar a Idade dos Metais, é essencial considerar não apenas os avanços tecnológicos e econômicos, mas também os impactos sociais, culturais e políticos que essas inovações tiveram na vida das pessoas e no desenvolvimento das civilizações antigas.",
           
          semelhantes: semelhantes1
        },
        {
          id: 22,
          name: "Arte Pre Historica",
          image:
            "https://static.todamateria.com.br/upload/ar/te/arte-na-pre-historia-og.jpg?class=ogImageWide",
          productType: "openBackHeadphones",
          price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao: "A arte pré-histórica refere-se às expressões artísticas criadas por comunidades humanas antes do desenvolvimento da escrita, abrangendo um vasto período de tempo e uma variedade de estilos e técnicas. Inspirados pelas descobertas arqueológicas em sítios como Lascaux, Altamira e Chauvet, podemos compreender a arte pré-histórica como uma forma de expressão cultural e espiritual que refletia as preocupações e experiências das pessoas da época. Durante este período, os seres humanos criaram pinturas rupestres, gravuras, esculturas em pedra e artefatos decorativos usando materiais disponíveis em seu ambiente, como pigmentos minerais, ossos, madeira e argila. Estas obras muitas vezes retratavam animais, figuras humanas, cenas de caça e rituais religiosos, proporcionando insights valiosos sobre a vida e as crenças das sociedades pré-históricas. Além disso, a arte pré-histórica também desempenhava um papel importante na transmissão de conhecimentos e tradições culturais de geração em geração. Portanto, ao examinar a arte pré-histórica, é essencial adotar uma abordagem interdisciplinar que leve em consideração não apenas os aspectos estéticos, mas também os contextos sociais, culturais e ambientais em que estas obras foram criadas.",
           
          semelhantes: semelhantes1
        },
        {
          id: 23,
          name: "",
          image:
            "",
          productType: "openBackHeadphones",
          price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",
   
           
          semelhantes: semelhantes1
        },
        {
          id: 24,
          name: "",
          image:
            "",
          productType: "openBackHeadphones",
          price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",
   
           
          semelhantes: semelhantes1
        },



        {
          id: 25,
          name: "Grecia Antiga",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdQjzq2zTFBJx_a6RAOv6s0HQDHgJsIVRxQ&usqp=CAU",
          productType: "openBackHeadphones",
          price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao: "A arte na Grécia Antiga floresceu durante um período que abrange aproximadamente do século VIII a.C. ao século III a.C., marcando um dos mais significativos e influentes momentos na história da arte ocidental. Inspirados pelas descobertas arqueológicas e pelas obras de artistas renomados como Fídias, Praxíteles e Policleto, podemos compreender a arte na Grécia Antiga como uma expressão de ideais estéticos, religiosos e culturais da época. Esta arte abrange uma variedade de formas, incluindo escultura, arquitetura, cerâmica, pintura e artes decorativas. A escultura grega, em particular, é reconhecida por sua representação idealizada do corpo humano e seu domínio técnico, exemplificado pela proporção harmônica e pelo realismo anatômico. A arquitetura grega também teve um impacto duradouro, com templos majestosos, teatros grandiosos e estátuas monumentais que refletiam a crença na perfeição e na ordem. Além disso, a cerâmica grega, como os vasos de figuras vermelhas e pretas, era amplamente produzida e decorada com cenas mitológicas, do cotidiano e eventos históricos. A arte na Grécia Antiga não só influenciou as gerações posteriores, mas também continua a inspirar e cativar admiradores até os dias de hoje, representando um legado cultural de extraordinária importância.",
           
          semelhantes: semelhantes2
        },
        {
          id: 26,
          name: "Período Pré-Homérico",
          image:
            "https://cdn.hipercultura.com/imagens/hipercultura-grecia-antiga-08-cke.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "O período pré-homérico, também conhecido como Idade das Trevas Grega, é um período da história grega que precede os tempos registrados por Homero nas epopeias 'Ilíada' e 'Odisseia', abrangendo aproximadamente os séculos XII ao VIII a.C. Inspirados pelas descobertas arqueológicas e pelas referências literárias, podemos compreender o período pré-homérico como uma fase de transição entre a Idade do Bronze e a Era Arcaica, caracterizada pela ausência de registros escritos e pela escassez de evidências materiais. Durante este período, as sociedades gregas passaram por mudanças significativas devido a eventos como a queda das civilizações micênicas e a invasão dos dórios, que resultaram no declínio da civilização palaciana e na fragmentação política e cultural. No entanto, apesar da falta de documentação escrita, as descobertas arqueológicas, como cerâmicas, armas e túmulos, fornecem insights valiosos sobre a vida e as práticas culturais das comunidades pré-homéricas. Portanto, ao examinar o período pré-homérico, é essencial recorrer a uma variedade de fontes e métodos, incluindo a arqueologia, a linguística e a mitologia, para reconstruir o cenário complexo e dinâmico das sociedades gregas antigas neste momento de transição.",
           
          semelhantes: semelhantes2
        },
        {
          id: 27,
          name: "Período Homérico",
          image:
            "https://cdn.hipercultura.com/imagens/hipercultura-grecia-antiga-04.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "O período homérico é uma época da história grega que corresponde ao contexto retratado nas obras atribuídas a Homero, como a 'Ilíada' e a 'Odisseia', e abrange aproximadamente os séculos VIII e VII a.C. Inspirados pela tradição oral e pelas representações literárias de Homero, podemos entender o período homérico como uma era de heróis, mitos e lendas que formaram a base da identidade e cultura grega. A 'Ilíada', por exemplo, narra os eventos da Guerra de Troia, enquanto a 'Odisseia' conta a jornada de Ulisses de volta para casa após a guerra. Estas epopeias não só oferecem uma visão da sociedade e valores gregos da época, mas também refletem temas universais como honra, coragem, destino e a relação entre deuses e mortais. Além disso, o período homérico é frequentemente associado à formação das primeiras comunidades políticas e culturais na Grécia, como as cidades-estado e a liga dos aqueus. Portanto, ao examinar o período homérico, é essencial considerar não apenas os aspectos históricos e literários, mas também os elementos mitológicos e culturais que desempenharam um papel fundamental na formação da identidade grega.",
           
          semelhantes: semelhantes2
        },
        {
          id: 28,
          name: "Período Arcaico",
          image:
            "https://i.postimg.cc/KvWngmC6/download-2.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "O período arcaico é uma fase da história grega que se estende aproximadamente do século VIII ao VI a.C., marcando uma época de significativa transformação social, política e cultural na Grécia Antiga. Inspirados pelas descobertas arqueológicas e pelos registros históricos, podemos entender o período arcaico como um período de transição entre a era pré-homérica e o período clássico, caracterizado pelo surgimento das primeiras cidades-estado gregas (polis), o desenvolvimento da escrita alfabética, a expansão colonial e o florescimento das artes e da filosofia. Durante este período, as cidades-estado gregas emergiram como centros de poder político e cultural, como Atenas, Esparta, Corinto e Mileto, cada uma com sua própria forma de governo e instituições. Além disso, o período arcaico testemunhou avanços significativos na arte, arquitetura e literatura gregas, incluindo a invenção do alfabeto grego, o desenvolvimento da poesia lírica e a construção dos primeiros templos de pedra. Portanto, ao examinar o período arcaico, é essencial considerar não apenas os aspectos políticos e econômicos, mas também os avanços culturais e intelectuais que ajudaram a moldar o curso da civilização grega.",
           
          semelhantes: semelhantes2
        },
        {
          id: 29,
          name: "Período Clássico",
          image:
            "https://i.postimg.cc/J06jx80B/download-1.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "O período clássico é uma era da história grega que se estende aproximadamente do século V ao IV a.C., marcando o auge da cultura e influência gregas na Antiguidade. Inspirados pelas obras de grandes pensadores, artistas e historiadores da época, como Sócrates, Platão, Aristóteles, Fídias e Heródoto, podemos entender o período clássico como um momento de grande realizações nas artes, na filosofia, na política e na ciência. Durante este período, cidades-estado como Atenas e Esparta emergiram como centros de poder e cultura, cada uma com sua própria forma de governo e instituições. Atenas, em particular, floresceu como um centro de aprendizado, democracia e produção cultural, dando origem a obras-primas da arquitetura, escultura e teatro, como o Partenon, as esculturas de Fídias e as tragédias de Ésquilo, Sófocles e Eurípides. Além disso, o período clássico testemunhou o desenvolvimento da democracia ateniense, o estabelecimento das leis de Draco e Sólon, e os conflitos das Guerras Médicas e do Peloponeso, que moldaram a política e a história grega. Portanto, ao examinar o período clássico, é essencial considerar não apenas os aspectos culturais e intelectuais, mas também os eventos políticos e militares que marcaram esta era de ouro da civilização grega.",
           
          semelhantes: semelhantes2
        },
        {
          id: 30,
          name: "Período Helenistico",
          image:
            "https://i.postimg.cc/pLgY3PZf/download.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "O período helenístico foi uma era da história grega que se estendeu aproximadamente do século IV ao século I a.C., caracterizada pela disseminação da cultura grega em todo o mundo conhecido após a morte de Alexandre, o Grande, em 323 a.C. Inspirados pelas conquistas de Alexandre e pelas influências culturais de povos orientais, podemos entender o período helenístico como uma época de sincretismo cultural, intercâmbio e florescimento das artes, ciências e filosofia. Durante este período, cidades como Alexandria, Pergamon e Antioquia emergiram como centros de aprendizado, com bibliotecas, museus e escolas que atraíam estudiosos, artistas e pensadores de todo o mundo mediterrâneo. A arte e a arquitetura helenísticas refletiam uma mistura de influências gregas, persas, egípcias e orientais, produzindo obras grandiosas como o Altar de Pérgamo e a estátua de Laocoonte e seus filhos. Além disso, o período helenístico foi marcado por avanços significativos na filosofia, com escolas como o Estoicismo, o Epicurismo e o Ceticismo ganhando destaque. No entanto, o período também foi marcado por instabilidade política e conflitos entre os sucessores de Alexandre, culminando na expansão do Império Romano e na fusão das culturas grega e romana. Portanto, ao examinar o período helenístico, é essencial considerar não apenas os aspectos culturais e intelectuais, mas também os eventos políticos e militares que moldaram o mundo antigo nesta época de transição e transformação.",
           
          semelhantes: semelhantes2
        },
        {
          id: 31,
          name: "Moeda de Moeda Introduzida",
          image:
            "https://www.worldhistory.org/img/r/p/500x600/5307.jpg?v=1682051226",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "A introdução da moeda na Grécia representa um marco significativo na história econômica e social da civilização grega, marcando uma transição da economia baseada no escambo para um sistema monetário mais complexo e eficiente. Inspirados pela evidência arqueológica e pelas obras de historiadores antigos como Heródoto e Tucídides, podemos entender a introdução da moeda como um desenvolvimento crucial que facilitou o comércio, estimulou a atividade econômica e promoveu a integração das comunidades gregas. As primeiras moedas gregas, conhecidas como 'dracmas', eram feitas de prata e estampadas com símbolos e inscrições que identificavam a cidade-estado emissora. Com o tempo, a utilização da moeda se expandiu além das fronteiras das cidades-estado e se tornou um meio de troca comum em todo o mundo grego e além. Além de seu papel como meio de troca, a introdução da moeda também teve implicações políticas, sociais e culturais, afetando as relações de poder, a estrutura socioeconômica e as práticas comerciais das comunidades gregas. Portanto, ao examinar a introdução da moeda na Grécia, é essencial considerar não apenas os aspectos econômicos, mas também os contextos políticos, sociais e culturais que moldaram este importante desenvolvimento na história da civilização grega.",
           
          semelhantes: semelhantes2
        },
        {
          id: 32,
          name: "Jogos Olímpicos",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Olympiade_de_la_R%C3%A9publique_1796%2C_Mus%C3%A9e_de_la_R%C3%A9volution_fran%C3%A7aise_-_Vizille.jpg/290px-Olympiade_de_la_R%C3%A9publique_1796%2C_Mus%C3%A9e_de_la_R%C3%A9volution_fran%C3%A7aise_-_Vizille.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "Os Jogos Olímpicos da Grécia Antiga representam uma das instituições mais icônicas e duradouras da história da humanidade, remontando ao período pré-histórico. Inspirados pela tradição oral e pelos registros históricos, podemos entender os Jogos Olímpicos como uma celebração da excelência atlética, cultural e espiritual, que unia as diversas cidades-estado gregas em competições esportivas e rituais religiosos em homenagem aos deuses olímpicos. Os Jogos foram realizados em Olímpia, na região da Élida, a cada quatro anos, a partir do século VIII a.C. e continuaram por mais de mil anos, até serem abolidos pelo imperador romano Teodósio I, em 393 d.C. Durante os Jogos, atletas de diversas origens competiam em eventos como corridas, lutas, lançamento de disco e pentatlo, em busca da glória atlética e da honra para suas cidades-estado. Além das competições esportivas, os Jogos Olímpicos também incluíam rituais religiosos, cerimônias de sacrifício e festivais culturais que fortaleciam os laços entre as comunidades gregas e promoviam a paz e a cooperação entre elas. Portanto, os Jogos Olímpicos da Grécia Antiga não só representam uma importante tradição esportiva, mas também refletem os valores e a identidade cultural da civilização grega, deixando um legado duradouro que continua a inspirar e cativar pessoas em todo o mundo até os dias de hoje.",
           
          semelhantes: semelhantes2
        },
        {
          id: 33,
          name: "Peste bubônica em Atenas ",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Plague_in_an_Ancient_City_LACMA_AC1997.10.1_%281_of_2%29.jpg/220px-Plague_in_an_Ancient_City_LACMA_AC1997.10.1_%281_of_2%29.jpg",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "A peste bubônica em Atenas foi um evento catastrófico que assolou a cidade durante a Guerra do Peloponeso, entre 430 e 426 a.C., como descrito por Tucídides em sua 'História da Guerra do Peloponeso'. A doença, provavelmente uma forma de peste bubônica ou tifo, espalhou-se rapidamente entre a população ateniense, causando uma devastação sem precedentes. Inspirados pelos relatos de Tucídides e pelas análises de historiadores e arqueólogos modernos, podemos entender a peste como um evento multifacetado que teve consequências profundas para Atenas e para o mundo grego. A doença provocou uma enorme perda de vidas, enfraquecendo o poder militar e político de Atenas e minando sua influência na guerra contra Esparta. Além disso, a peste exacerbou as tensões sociais e políticas na cidade, alimentando o descontentamento popular e contribuindo para o declínio da democracia ateniense. No entanto, a peste também teve implicações culturais e intelectuais, influenciando a arte, a literatura e a filosofia da época. Portanto, ao examinar a peste bubônica em Atenas, é essencial considerar não apenas os aspectos médicos e epidemiológicos, mas também os impactos sociais, políticos e culturais que esta calamidade teve na história da cidade e da civilização grega.",
           
          semelhantes: semelhantes2
        },
        {
          id: 130,
          name: "Invasão dos romanos",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxi1S5N_Ou-JX3Xd5mpp6gTkLgNjqMBaEWrQ&usqp=CAU",
          productType: "openBackHeadphones",
          rating: 4,
          totalSales: "" , 
          periodo: "Idade Antiga",
          descricao: "A invasão dos romanos na Grécia foi um evento de grande importância na história da região, marcando o fim da independência política grega e o início da integração da Grécia no Império Romano. Inspirados pelos registros históricos e pelas análises de historiadores antigos e modernos, podemos entender a invasão romana como um processo gradual que se estendeu ao longo de vários séculos, culminando na incorporação da Grécia como uma província romana em 146 a.C., após a conquista de Corinto pelas legiões romanas. A invasão romana teve uma série de consequências para a Grécia e sua população. Por um lado, representou o fim da autonomia política das cidades-estado gregas, que passaram a ser governadas por autoridades romanas e a contribuir com impostos e soldados para o exército romano. Por outro lado, também trouxe benefícios para a Grécia, como a promoção da cultura grega no mundo romano, o desenvolvimento de infraestrutura e a integração econômica com o restante do império. No entanto, a invasão romana também provocou mudanças sociais e culturais, como a disseminação do cristianismo e a transformação da língua e da cultura gregas sob a influência romana. Portanto, ao examinar a invasão dos romanos na Grécia, é essencial considerar não apenas os aspectos políticos e militares, mas também os impactos sociais, econômicos e culturais que esta importante transformação teve na história da região e da civilização grega.",
           
          semelhantes: semelhantes2
        },



        {
          id: 34,
          name: "Filosofia Grecia",
          image:
            "https://static.todamateria.com.br/upload/es/co/escoladeatenasvaticano-0-cke.jpg?auto_optimize=low",
         
         // price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
        //  periodo: "Idade Antiga",
        descricao: "A filosofia na Grécia antiga representa uma das contribuições mais significativas e duradouras da civilização grega para o pensamento humano. Inspirada pela curiosidade intelectual e pelo desejo de compreender o mundo ao seu redor, a filosofia grega floresceu entre os séculos VI e IV a.C., em cidades como Atenas, Mileto e Atenas. Os filósofos gregos exploraram uma ampla gama de questões fundamentais, incluindo a natureza da realidade, a origem do cosmos, a ética, a política e a natureza da mente humana. Desde os primeiros filósofos pré-socráticos, como Tales, Heráclito e Parmênides, até os grandes mestres da filosofia clássica, como Sócrates, Platão e Aristóteles, a filosofia grega ofereceu uma riqueza de ideias e perspectivas que continuam a influenciar o pensamento ocidental até os dias de hoje. Os filósofos gregos desenvolveram métodos de investigação lógica e racional que ainda são fundamentais para a prática filosófica contemporânea, como o diálogo socrático, a dialética platônica e o empirismo aristotélico. Além disso, a filosofia grega também teve um profundo impacto nas áreas da ciência, da política, da ética e da religião, moldando o desenvolvimento da cultura ocidental e contribuindo para o surgimento da civilização ocidental. Portanto, ao examinar a filosofia na Grécia antiga, é essencial reconhecer sua importância histórica e seu legado duradouro como uma das mais importantes realizações intelectuais da humanidade.",
           
          semelhantes: semelhantes3
        },
        {
          id: 35,
          name: "Tales de Mileto, Anaximandro de Mileto, Anaxímenes de Mileto",
          image:
            "https://static.todamateria.com.br/upload/ta/le/talesdemiletocke.jpg?auto_optimize=low",
         
          price: 170,
          rating: 4,
          timeLeft: 21,
          totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao: "Tales de Mileto, Anaximandro de Mileto e Anaxímenes de Mileto foram três dos primeiros filósofos pré-socráticos que viveram na cidade de Mileto, na Grécia antiga, por volta do século VI a.C. Esses filósofos são conhecidos por suas contribuições pioneiras para o desenvolvimento da filosofia ocidental, especialmente no campo da cosmologia e da metafísica. Tales de Mileto é frequentemente considerado o primeiro filósofo e é conhecido por sua busca por uma explicação racional e naturalista para a origem e natureza do universo. Ele propôs que a água era o princípio básico de todas as coisas e que todas as substâncias eram formadas a partir dela. Anaximandro de Mileto, discípulo de Tales, desenvolveu ainda mais essa ideia, propondo o conceito de apeíron, ou o indeterminado, como a substância primordial e infinita que dá origem a todas as coisas. Ele também foi um dos primeiros a propor a teoria da evolução, sugerindo que os seres humanos evoluíram de formas de vida mais simples. Anaxímenes de Mileto, por sua vez, propôs que o ar era o princípio fundamental do universo e que todas as substâncias eram formadas a partir dele por meio de processos de condensação e rarefação. Ele também desenvolveu uma teoria sobre a origem dos corpos celestes, sugerindo que eram formados por aglomeração de ar. As contribuições desses filósofos foram fundamentais para o desenvolvimento da filosofia grega e para a transição do pensamento mítico para o pensamento racional e científico na Grécia antiga.",
           
          semelhantes: semelhantes3
        },
        {
          id: 36,
          name: "Heráclito de Éfeso",
          image:
            "https://static.todamateria.com.br/upload/he/ra/heraclitodeefeso-cke.jpg?auto_optimize=low",
       
         // price: 170,
          rating: 4,
       //   timeLeft: 21,
          totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Heráclito de Éfeso foi um filósofo pré-socrático que viveu por volta do século VI a.C. e é conhecido por suas ideias sobre o fluxo constante e a mudança perpétua no universo. Inspirado pela observação da natureza e pela reflexão sobre a condição humana, Heráclito desenvolveu uma filosofia que enfatizava a ideia de que tudo está em constante transformação, e que a mudança é a única constante na vida. Ele é famoso por sua afirmação de que ninguém pode entrar no mesmo rio duas vezes, sugerindo que, assim como as águas de um rio estão sempre em movimento, tudo na vida está sujeito a mudanças contínuas e irreversíveis. Heráclito também é conhecido por sua teoria do logos, ou razão cósmica, que ele considerava como a força ordenadora por trás do universo em constante mudança. Ele argumentava que a sabedoria consistia em reconhecer e aceitar a natureza transitória e contraditória da realidade, e que a verdadeira compreensão só poderia ser alcançada através da razão e do autoconhecimento. Apesar de suas ideias inovadoras, Heráclito foi muitas vezes mal compreendido e ridicularizado por seus contemporâneos, e suas obras sobrevivem apenas em fragmentos. No entanto, sua influência na filosofia ocidental foi duradoura, e suas ideias sobre o fluxo constante e a mudança perpétua continuam a ser objeto de estudo e debate até os dias de hoje.",
           
          semelhantes: semelhantes3
        },
        {
          id: 37,
          name: "Pitágoras de Samos",
          image:
            "https://static.todamateria.com.br/upload/pi/ta/pitagoras-0-cke.jpg?auto_optimize=low",
         
          rating: 4,
         // timeLeft: 21,
        //  totalSales: 6347 , 
          periodo: "Idade Antiga",
          descricao: "Pitágoras de Samos foi um filósofo, matemático e místico grego que viveu por volta do século VI a.C. Ele é conhecido por suas contribuições para a matemática, a música, a filosofia e a religião, bem como por sua escola de pensamento, conhecida como o Pitagorismo. Inspirado pela busca pela verdade universal e pelo conhecimento, Pitágoras e seus seguidores desenvolveram uma série de ideias inovadoras que tiveram um impacto duradouro na história da filosofia e da ciência. Na matemática, Pitágoras é famoso pelo teorema que leva seu nome, que estabelece a relação entre os comprimentos dos lados de um triângulo retângulo. Ele também fez importantes contribuições para a teoria dos números, a geometria e a música, explorando as relações entre os números e os elementos da natureza. Além de suas realizações matemáticas, Pitágoras também foi um filósofo de destaque, cujas ideias abrangiam uma ampla gama de temas, incluindo ética, cosmologia, epistemologia e teologia. Ele acreditava na existência de uma ordem cósmica baseada em números e proporções, e ensinava que a alma é imortal e está ligada ao universo através da harmonia e da razão. A influência de Pitágoras e do Pitagorismo estendeu-se por séculos após sua morte, moldando o pensamento de filósofos, cientistas e artistas em toda a história ocidental.",
           
          semelhantes: semelhantes3
        },
        {
          id: 38,
          name: "Xenófanes de Cólofon",
          image:
            "https://static.todamateria.com.br/upload/xe/no/xenofanes1-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Xenófanes de Cólofon foi um filósofo e poeta grego que viveu por volta do século VI a.C. Ele é conhecido por suas ideias inovadoras sobre religião, conhecimento e crítica cultural. Xenófanes foi um crítico agudo das crenças religiosas tradicionais de sua época, argumentando que os deuses dos gregos eram criações humanas e que as concepções antropomórficas dos deuses eram inadequadas e indignas. Em vez disso, ele propôs a ideia de um único deus supremo, imutável e transcendente, que governa o universo com justiça e sabedoria. Além de suas contribuições para a teologia, Xenófanes também fez importantes observações sobre a natureza do conhecimento e da verdade. Ele argumentou que a verdade é relativa e que os seres humanos são limitados em sua capacidade de compreender o universo em sua totalidade. Xenófanes também foi um crítico da superstição e do dogmatismo, defendendo uma abordagem racional e crítica para o conhecimento. Sua influência na filosofia e na religião foi duradoura, e suas ideias continuam a ser objeto de estudo e debate até os dias de hoje.",
           
          semelhantes: semelhantes3
        },


        {
          id: 39,
          name: "Parmênides de Eleia",
          image:
            "https://static.todamateria.com.br/upload/pa/rm/parmenides-0-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Parmênides de Eleia foi um filósofo pré-socrático que viveu por volta do século V a.C. Ele é conhecido por sua obra poética filosófica intitulada 'Sobre a Natureza', na qual desenvolveu uma teoria radical sobre o ser e o não-ser. Parmênides argumentava que o ser é eterno, imutável e indivisível, e que o não-ser é inexistente e incompreensível. Ele defendia que o ser é único e imutável, constituindo a totalidade do universo, enquanto o não-ser é uma mera ilusão criada pela mente humana. Parmênides também argumentava que o conhecimento verdadeiro só podia ser alcançado através da razão e da lógica, e que a percepção sensorial era enganosa e ilusória. Sua filosofia influenciou profundamente o pensamento posterior, especialmente a filosofia de Platão e Aristóteles, e suas ideias continuam a ser objeto de estudo e debate na filosofia contemporânea.",
           
          semelhantes: semelhantes3
        },
        {
          id: 40,
          name: "Zenão de Eleia",
          image:
            "https://static.todamateria.com.br/upload/80/0p/800pxzenoofeleatibaldiorcarducciescorial-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Zenão de Eleia foi um filósofo pré-socrático que viveu por volta do século V a.C. Ele é conhecido por seus paradoxos lógicos, que desafiaram as concepções tradicionais sobre o movimento e o espaço. Zenão foi um discípulo de Parmênides e defendeu sua filosofia do ser imutável e eterno. No entanto, Zenão também é famoso por seus argumentos contra a ideia de que o movimento é possível. Seus paradoxos, como o paradoxo da corrida de Aquiles e a tartaruga, e o paradoxo de flecha em voo, foram projetados para mostrar que o movimento é uma ilusão, e que o tempo e o espaço são divisíveis ao infinito. Embora muitos de seus contemporâneos tenham rejeitado suas ideias como absurdas, os paradoxos de Zenão tiveram um profundo impacto na filosofia posterior, influenciando pensadores como Platão e Aristóteles, bem como os matemáticos e físicos modernos. Sua obra desafiou as concepções tradicionais sobre o movimento e o espaço, e estimulou debates intelectuais que continuam até os dias de hoje.",
           
          semelhantes: semelhantes3
        },
        {
          id: 41,
          name: "Demócrito de Abdera",
          image:
            "https://static.todamateria.com.br/upload/dr/em/dremocrito3-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Demócrito de Abdera foi um filósofo grego pré-socrático que viveu por volta do século V a.C. Ele é conhecido por ser um dos primeiros defensores da teoria atomista, que postulava a existência de átomos como as unidades fundamentais e indivisíveis da matéria. Inspirado pelas ideias de seus predecessores, como Leucipo, Demócrito desenvolveu uma filosofia materialista que explicava a natureza e o funcionamento do universo em termos de interações entre átomos e vazio. Ele argumentava que todas as coisas eram compostas por átomos em constante movimento e que as diferenças entre as substâncias eram o resultado das diferentes formas, tamanhos e arranjos dos átomos. Demócrito também foi um pensador prolífico em outras áreas, incluindo ética, epistemologia e cosmologia. Ele defendia uma visão de mundo determinista, segundo a qual todas as ações humanas eram o resultado de causas naturais e não de livre arbítrio. A influência de Demócrito na filosofia ocidental foi duradoura, e suas ideias continuaram a ser objeto de estudo e debate ao longo dos séculos, influenciando o desenvolvimento da ciência e da filosofia até os dias de hoje.",
           
          semelhantes: semelhantes3
        },
        {
          id: 42,
          name: "Sócrates",
          image:
            "https://static.todamateria.com.br/upload/so/cr/socrates-0-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Sócrates foi um filósofo grego que viveu em Atenas durante o século V a.C. Ele é considerado um dos fundadores da filosofia ocidental e é conhecido por seu método de questionamento e sua busca pela verdade e pelo conhecimento. Inspirado pela tradição intelectual e ética de sua época, Sócrates dedicou-se ao exame das questões fundamentais da vida humana, incluindo ética, moralidade, justiça, virtude e o propósito da existência. Em vez de ensinar seus alunos diretamente, Sócrates usava o diálogo e o questionamento para desafiar suas crenças e estimular o pensamento crítico. Ele acreditava que o autoconhecimento era a chave para a sabedoria e que a virtude era o resultado do conhecimento. Sócrates também era conhecido por sua postura contrária à corrupção e à hipocrisia na sociedade ateniense, o que eventualmente levou à sua condenação e execução por impietade e corrupção da juventude. Apesar de sua morte trágica, o legado de Sócrates continuou a influenciar a filosofia ocidental através dos escritos de seus discípulos, como Platão e Xenofonte, que preservaram seus ensinamentos e disseminaram suas ideias pelo mundo antigo.",
           
          semelhantes: semelhantes3
        },
        {
          id: 43,
          name: "Platão",
          image:
            "https://static.todamateria.com.br/upload/pl/at/platao2-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Platão foi um dos mais importantes filósofos da Grécia Antiga, nascido em Atenas por volta de 427 ou 428 a.C. Ele é conhecido por sua vasta contribuição para a filosofia, literatura, política e educação, e é considerado um dos fundadores da tradição filosófica ocidental. Inspirado por seu mentor, Sócrates, Platão desenvolveu suas próprias teorias e ideias, que são amplamente apresentadas em diálogos escritos por ele. Sua obra mais conhecida é 'A República', na qual ele discute temas como justiça, ética, política e o papel da filosofia na sociedade. Em seus diálogos, Platão apresenta seu conceito de 'Ideias' ou 'Formas', entidades transcendentes que representam a verdadeira realidade por trás das aparências sensíveis. Ele também fundou a Academia de Atenas, uma das primeiras instituições de ensino superior do mundo, que teve uma profunda influência na educação ocidental. Além disso, Platão escreveu diálogos sobre diversos temas, como epistemologia, metafísica, ética e estética, explorando uma ampla gama de questões filosóficas. Sua influência na filosofia ocidental foi imensa e suas ideias continuam a ser objeto de estudo e debate até os dias de hoje.",
           
          semelhantes: semelhantes3
        },
        {
          id: 44,
          name: "Aristóteles",
          image:
            "https://static.todamateria.com.br/upload/ar/is/aristoteles2-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Aristóteles foi um filósofo grego nascido em Estagira, por volta de 384 a.C. Ele é considerado um dos mais influentes pensadores da história da filosofia ocidental e foi discípulo de Platão na Academia de Atenas. Aristóteles é conhecido por sua vasta contribuição para diversos campos do conhecimento, incluindo filosofia, ciência, política, ética, metafísica, lógica, poesia e retórica. Ele desenvolveu um método sistemático de investigação baseado na observação empírica e na lógica dedutiva, que serviu como base para muitos dos campos do conhecimento humano. Aristóteles escreveu extensivamente sobre uma variedade de assuntos, incluindo sua obra 'Metafísica', na qual ele investiga a natureza da realidade e da existência, e 'Ética a Nicômaco', na qual ele explora questões de moralidade e virtude. Além disso, Aristóteles foi um dos primeiros a desenvolver uma teoria sistemática da lógica, que ainda é estudada hoje em dia. Sua influência na filosofia ocidental foi imensa e suas ideias continuam a ser debatidas e estudadas em todo o mundo.",
           
          semelhantes: semelhantes3
        },
        {
          id: 45,
          name: "Ceticismo",
          image:
            "https://static.todamateria.com.br/upload/pi/rr/pirro-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O ceticismo é uma corrente filosófica que questiona a possibilidade de se alcançar conhecimento verdadeiro sobre o mundo. Inspirado pelas dúvidas e incertezas inerentes à condição humana, o ceticismo argumenta que não podemos confiar completamente em nossas percepções, raciocínio ou autoridade das fontes. Em vez disso, os céticos defendem uma postura de suspensão do juízo, na qual suspendemos nosso julgamento sobre a verdade ou falsidade de qualquer afirmação. O ceticismo pode ser dividido em diferentes vertentes, como o ceticismo pirrônico, associado a Pirro de Élis, que defendia a suspensão do juízo em todas as questões; e o ceticismo acadêmico, associado à Academia Platônica, que argumentava que a verdade é inatingível e que devemos buscar apenas a probabilidade. O ceticismo desempenhou um papel importante na história da filosofia, influenciando pensadores como Descartes, que adotou uma abordagem cética em sua busca pela verdade, e Hume, que questionou as bases do conhecimento humano. Apesar das críticas, o ceticismo continua a ser uma ferramenta importante na filosofia contemporânea, desafiando nossas certezas e incentivando-nos a questionar e a examinar nossas crenças mais profundas.",
           
          semelhantes: semelhantes3
        },
        {
          id: 46,
          name: "Epicurismo",
          image:
            "https://static.todamateria.com.br/upload/ep/ic/epicuro2-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O epicurismo é uma escola de pensamento filosófico fundada por Epicuro de Samos por volta do século IV a.C. Inspirado pela busca pela felicidade e pela tranquilidade mental, o epicurismo argumenta que o prazer é o objetivo principal da vida humana e que a dor deve ser evitada. No entanto, Epicuro defendia uma concepção mais sutil de prazer, baseada na ausência de dor física e na tranquilidade da alma, em vez de indulgência em prazeres sensoriais. Para alcançar esse estado de tranquilidade, Epicuro propunha uma série de práticas e atitudes, incluindo a moderação, a amizade, a contemplação da natureza e a busca pela sabedoria. Ele também argumentava que o medo da morte e dos deuses era irracional, já que a morte não é nada para nós e os deuses não se preocupam com os assuntos humanos. O epicurismo exerceu uma influência duradoura na filosofia ocidental, especialmente em áreas como ética, epistemologia e filosofia da mente. Seus ensinamentos continuaram a ser estudados e debatidos ao longo dos séculos, influenciando pensadores como Lucrécio, Cícero e até mesmo alguns modernos filósofos.",
           
          semelhantes: semelhantes3
        },
        {
          id: 47,
          name: "Estoicismo",
          image:
            "https://static.todamateria.com.br/upload/im/pe/imperadormarcoaurelio-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O estoicismo é uma escola de pensamento filosófico fundada na Grécia Antiga por Zenão de Cítio, por volta do século III a.C. Inspirado pela ideia de viver de acordo com a natureza, o estoicismo ensina que o objetivo principal da vida humana é viver em conformidade com a razão cósmica, ou logos, e aceitar serenamente o destino que nos é dado. Os estoicos defendiam a ideia de que as emoções negativas, como o medo, a tristeza e a raiva, são o resultado de julgamentos equivocados sobre o que é bom ou mau, e que podemos alcançar a felicidade e a paz interior através do desenvolvimento da virtude, da razão e da autodisciplina. Eles também argumentavam que devemos aceitar as coisas que não podemos controlar e focar nossa atenção e energia naquilo que está sob nosso controle. O estoicismo exerceu uma influência significativa na filosofia, na ética e na psicologia ao longo da história, influenciando pensadores como Epicteto, Sêneca e Marco Aurélio, bem como muitos filósofos contemporâneos e terapeutas cognitivo-comportamentais.",
           
          semelhantes: semelhantes3
        },

        {
          id: 48,
          name: "Cinismo",
          image:
            "https://static.todamateria.com.br/upload/di/og/diogeneseoscaes-cke.jpg?auto_optimize=low",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O cinismo foi uma escola de pensamento filosófico fundada por Antístenes, discípulo de Sócrates, e posteriormente desenvolvida por Diógenes de Sinope, por volta do século IV a.C. Inspirado pela busca pela verdade e pela autossuficiência, o cinismo ensina que a virtude e a felicidade podem ser alcançadas através da rejeição das convenções sociais e materiais e da adesão estrita aos princípios da natureza. Os cínicos acreditavam que a verdadeira liberdade só poderia ser encontrada vivendo-se em conformidade com a natureza, sem se deixar levar pelos desejos materiais ou pelas opiniões dos outros. Eles praticavam a simplicidade voluntária, vivendo de forma austera e desapegada das convenções sociais e das normas culturais. Diógenes, em particular, tornou-se famoso por sua vida simples e despojada, vivendo em um barril e desprezando as riquezas e o prestígio social. O cinismo exerceu uma influência significativa na filosofia ocidental, influenciando pensadores como Sócrates, Platão e até mesmo alguns filósofos contemporâneos, que defendem uma vida simples e ética baseada na autenticidade e na autossuficiência.",
           
          semelhantes: semelhantes3
        },


        {
          id: 75,
          name: "Cultura e Sociedade Romana",
          image:
            "https://www.walksinsiderome.com/wp-content/uploads/2023/01/Chariot-racing-960x636.png",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A cultura e sociedade romana foram profundamente influentes e marcaram um período significativo na história do mundo ocidental. A sociedade romana era estratificada em diferentes classes sociais, incluindo os patrícios (a aristocracia), os plebeus (os cidadãos comuns) e os escravos. O governo era inicialmente uma monarquia, mas eventualmente evoluiu para uma república e, mais tarde, para um império. A cultura romana foi influenciada por várias fontes, incluindo a cultura grega, etrusca e oriental. Os romanos adotaram e adaptaram muitos aspectos da cultura grega, como literatura, arte, filosofia e religião, dando-lhes uma identidade única. A literatura romana produziu alguns dos maiores escritores da história, como Virgílio, Ovídio, Horácio e Cícero. A arquitetura romana é famosa por suas construções grandiosas, como o Coliseu, o Panteão e os aquedutos. A religião romana era politeísta, com deuses e deusas adorados em templos e rituais. A educação era valorizada na sociedade romana, com ênfase na retórica, filosofia e literatura. A sociedade romana também era conhecida por suas leis e instituições, que influenciaram muitos sistemas legais modernos. Em resumo, a cultura e sociedade romana tiveram um impacto profundo na história do mundo, moldando a civilização ocidental e deixando um legado duradouro em áreas como política, direito, literatura, arte e arquitetura.",
           
          semelhantes: semelhantes4
        },
        {
          id: 76,
          name: "Fundação de Roma",
          image:
            "https://static.todamateria.com.br/upload/ro/mu/romuloeremolobabb.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A fundação de Roma é um evento central na mitologia e história romana, marcando o início da cidade que viria a se tornar uma das mais poderosas e influentes da antiguidade e, posteriormente, do mundo. Segundo a lenda, Roma foi fundada em 21 de abril de 753 a.C. por Rômulo e Remo, dois irmãos gêmeos criados por uma loba e descendentes do príncipe troiano Enéias. A história mítica conta que os irmãos travaram uma disputa pela fundação da cidade, e Rômulo acabou matando Remo e se tornando o primeiro rei de Roma. Ele então fundou a cidade no monte Palatino e estabeleceu um governo baseado em leis e instituições, que serviram como base para o desenvolvimento posterior da civilização romana. Embora muitos detalhes da fundação de Roma sejam lendários e tenham sido objeto de debate entre historiadores e arqueólogos, o evento continua a ser um ponto de referência crucial na história e na identidade romanas, e é celebrado todos os anos com festividades e cerimônias.",
           
          semelhantes: semelhantes4
        },
        {
          id: 77,
          name: "Monarquia Romana",
          image:
            "https://www.walksinsiderome.com/wp-content/uploads/2023/01/Ancient-Roman-festivals.png",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Monarquia Romana é o período inicial da história de Roma, que tradicionalmente é datado do século VIII a.C. até o estabelecimento da República Romana em 509 a.C. Durante esse tempo, Roma foi governada por uma série de reis lendários, de acordo com a tradição romana. A monarquia romana é marcada por eventos mitológicos, como a fundação da cidade por Rômulo e Remo, e por uma série de reis lendários, como Rômulo, Numa Pompílio, Tarquínio, o Soberbo, entre outros. Esses primeiros reis romanos são conhecidos por estabelecer instituições e tradições que moldaram a futura República e o Império Romano. A monarquia romana é muitas vezes vista como uma época de crescimento e desenvolvimento inicial de Roma, durante a qual a cidade cresceu em tamanho e poder, estabelecendo-se como uma das principais potências da península itálica. No entanto, muitos detalhes sobre esse período são incertos, e muitas das histórias e lendas sobre os primeiros reis de Roma foram misturadas com mitologia e folclore ao longo dos séculos.",
           
          semelhantes: semelhantes4
        },
        {
          id: 78,
          name: "Julio Cesar",
          image:
            "https://i.postimg.cc/5tvMpz4h/Roma2.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Júlio César foi um dos líderes políticos e militares mais proeminentes da Roma Antiga, cuja ascensão ao poder teve um impacto profundo na história do mundo ocidental. Nascido em 100 a.C. em uma família patrícia romana, César ascendeu rapidamente na política romana, tornando-se cônsul em 59 a.C. Ele foi um líder carismático e habilidoso, conhecido por suas habilidades de oratória, estratégia militar e capacidade de fazer alianças políticas. Durante seu governo, César implementou uma série de reformas políticas, sociais e econômicas destinadas a fortalecer o governo central e melhorar a vida dos cidadãos romanos. Ele também expandiu o Império Romano por meio de conquistas militares, tornando-se um dos líderes mais poderosos da história romana. No entanto, sua ascensão ao poder alarmou muitos dos senadores romanos, que o viram como uma ameaça à República. Em 44 a.C., César foi assassinado por um grupo de conspiradores liderados por Brutus e Cássio, que temiam que ele se tornasse um ditador vitalício. Sua morte levou ao colapso da República Romana e ao início do período imperial. Apesar de sua morte prematura, o legado de Júlio César continua a ser sentido até os dias de hoje, e sua influência na política, no direito e na cultura continua a ressoar ao longo dos séculos.",
           
          semelhantes: semelhantes4
        },
        {
          id: 79,
          name: "República Romana",
          image:
            "https://i.postimg.cc/4xs8jh1C/Roma4.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A República Romana foi um período crucial na história de Roma, que durou aproximadamente de 509 a.C. até 27 a.C. Durante esse tempo, Roma era governada por um sistema político que incluía magistrados eleitos, senado, assembleias populares e uma série de instituições republicanas. A República Romana foi marcada por um equilíbrio de poder entre diferentes classes sociais, incluindo os patrícios (aristocracia) e os plebeus (cidadãos comuns), que muitas vezes entravam em conflito pelo controle do governo. Durante o período republicano, Roma expandiu seu território por meio de conquistas militares, estendendo seu domínio por toda a península itálica e além. No entanto, a República também foi marcada por uma série de crises políticas, incluindo guerras civis, lutas de poder entre facções rivais e o colapso das instituições republicanas. Eventualmente, em 27 a.C., o jovem general e político romano Caio Otávio, mais tarde conhecido como Augusto, estabeleceu-se como o primeiro imperador de Roma, marcando o fim da República e o início do Império Romano. Apesar de seus problemas e falhas, a República Romana deixou um legado duradouro na história do mundo, influenciando sistemas políticos e constitucionais em todo o mundo ocidental.",
           
          semelhantes: semelhantes4
        },
        {
          id: 80,
          name: "Império Romano",
          image:
            "https://i.postimg.cc/k41wb1rq/Roma5.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Império Romano foi uma das mais poderosas e influentes civilizações da antiguidade, que durou cerca de 500 anos, desde a ascensão de Augusto, em 27 a.C., até a queda do Império do Ocidente, em 476 d.C. Durante esse tempo, Roma se tornou o centro de um vasto império que se estendia por toda a Europa, norte da África e partes do Oriente Médio. O Império Romano foi marcado por uma administração centralizada, que incluía uma complexa burocracia, um exército profissional e uma série de leis e instituições que garantiam a estabilidade e o funcionamento do império. Roma também foi um centro de cultura, com influências gregas, egípcias e orientais. Durante o período imperial, Roma alcançou grandes feitos na arte, arquitetura, literatura, ciência e engenharia. O Império Romano também foi um período de expansão e conquista, com os romanos estendendo seu domínio por todo o Mediterrâneo e além. No entanto, o império enfrentou uma série de desafios internos e externos, incluindo guerras civis, invasões bárbaras, crises econômicas e instabilidade política. Apesar de seus problemas, o legado do Império Romano continua a ser sentido até os dias de hoje, com muitos aspectos de sua cultura, língua, direito e instituições influenciando o mundo moderno.",
           
          semelhantes: semelhantes4
        },
        {
          id: 81,
          name: "Invasões germânicas",
          image:
            "https://i.postimg.cc/dtTnhj5c/Roma3.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As invasões germânicas, também conhecidas como invasões bárbaras, foram uma série de movimentos migratórios e ataques militares realizados por povos germânicos contra o Império Romano durante o período final de sua existência. Entre os séculos III e V d.C., várias tribos germânicas, como os visigodos, ostrogodos, vândalos, francos, suevos, anglo-saxões e outros, invadiram e conquistaram partes do território romano. Essas invasões foram motivadas por uma variedade de fatores, incluindo pressões demográficas, busca por terras férteis e riquezas, e atração pelo modo de vida romano. As invasões germânicas causaram sérios danos ao Império Romano, contribuindo para sua fragmentação e eventual queda. Um dos eventos mais significativos foi a invasão e saque de Roma pelos visigodos em 410 d.C., sob o comando de Alarico. Posteriormente, em 476 d.C., o último imperador romano do Ocidente, Rômulo Augusto, foi deposto pelo líder germânico Odoacro, marcando o fim do Império Romano do Ocidente. No entanto, é importante notar que as invasões germânicas não foram o único fator responsável pelo declínio do Império Romano, mas sim parte de um conjunto mais amplo de desafios políticos, econômicos e sociais que o império enfrentou em seus últimos séculos de existência.",
           
          semelhantes: semelhantes4
        },
        {
          id: 82,
          name: "Guerras Púnicas",
          image:
            "https://4.bp.blogspot.com/-CAnc75L3SW4/VbkRLpYijWI/AAAAAAAAWMs/S1ZoF3fRJVE/s1600/Hist%25C3%25B3ria%2Be%2BSociedade%2B%25287%2529.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As Guerras Púnicas foram uma série de conflitos militares entre a República Romana e a cidade-estado cartaginesa de Cartago, travadas entre os séculos III e II a.C. As guerras receberam o nome de 'Púnicas' devido ao termo latino 'Punicus', que se refere aos cartagineses. As Guerras Púnicas foram marcadas por uma intensa rivalidade entre Roma e Cartago pelo controle do Mediterrâneo ocidental, incluindo o domínio sobre as rotas comerciais marítimas e as colônias na Sicília, na península Ibérica e no norte da África. A Primeira Guerra Púnica, que ocorreu entre 264 e 241 a.C., foi principalmente uma guerra naval, durante a qual Roma construiu uma poderosa frota para desafiar a supremacia marítima de Cartago. A guerra terminou com a vitória de Roma, que ganhou controle sobre a Sicília, transformando-se em uma potência marítima no Mediterrâneo ocidental. A Segunda Guerra Púnica, que ocorreu entre 218 e 201 a.C., foi travada principalmente na península Itálica e é mais conhecida por suas campanhas militares lideradas pelo general cartaginês Aníbal Barca, que cruzou os Alpes e infligiu sérias derrotas às forças romanas. No entanto, Roma eventualmente emergiu vitoriosa, graças a generais como Cipião Africano, que derrotou as forças cartaginesas na Batalha de Zama, em 202 a.C. A Terceira Guerra Púnica, que ocorreu entre 149 e 146 a.C., resultou na completa destruição de Cartago e no estabelecimento de Roma como a potência dominante no Mediterrâneo ocidental. As Guerras Púnicas tiveram um impacto significativo na história romana, consolidando o domínio de Roma sobre o Mediterrâneo e influenciando sua expansão posterior como um império.",
           
          semelhantes: semelhantes4
        },
        {
          id: 83,
          name: "Economia do Império Romano",
          image:
            "https://i.postimg.cc/W3k6d276/Roma.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A economia do Império Romano era vasta e complexa, com uma mistura de agricultura, comércio, manufatura e mineração que sustentava a sociedade romana. A agricultura era a base da economia romana, com a maioria da população envolvida na produção de alimentos, como cereais, vinho, azeite e carne. Grandes propriedades rurais, chamadas de latifúndios, eram comuns em muitas regiões do império, onde escravos e trabalhadores livres realizavam a maior parte do trabalho agrícola. Além da agricultura, o comércio desempenhava um papel fundamental na economia romana, com uma extensa rede de estradas, portos e rotas marítimas que conectavam as províncias do império e facilitavam o transporte de mercadorias. As cidades romanas eram centros de comércio e indústria, onde os artesãos produziam uma ampla variedade de bens, como cerâmica, tecidos, metais e vidro. A mineração também era uma atividade importante, com depósitos de minerais como ouro, prata, ferro e cobre sendo explorados em todo o império. Além disso, o governo romano desempenhava um papel ativo na economia, regulando o comércio, cobrando impostos e financiando obras públicas, como estradas, aquedutos e edifícios públicos. No entanto, a economia romana enfrentou uma série de desafios, incluindo crises políticas, guerras, instabilidade social e declínio da produção agrícola, que contribuíram para o colapso do Império Romano do Ocidente no século V d.C.",
           
          semelhantes: semelhantes4
        },
        {
          id: 84,
          name: "Fim do imperio romano do Ocidente",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rome-_Ruins_of_the_Forum%2C_Looking_towards_the_Capitol.jpg/220px-Rome-_Ruins_of_the_Forum%2C_Looking_towards_the_Capitol.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O fim do Império Romano do Ocidente marcou o colapso de uma das mais poderosas e influentes civilizações da antiguidade e é geralmente datado em 476 d.C., quando o último imperador romano do Ocidente, Rômulo Augusto, foi deposto pelo líder germânico Odoacro. No entanto, o colapso do Império Romano do Ocidente foi um processo gradual que ocorreu ao longo de vários séculos e foi influenciado por uma série de fatores. Algumas das causas incluem pressões militares externas, como invasões bárbaras e a incapacidade do exército romano de defende r adequadamente as fronteiras do império. Além disso, o império enfrentou desafios internos, como crises econômicas, instabilidade política, corrupção e divisões sociais. O declínio do comércio e da produção agrícola também enfraqueceu a economia romana e contribuiu para o colapso do sistema de governo centralizado. A fragmentação do império em reinos romano-germânicos e o enfraquecimento das instituições romanas levaram ao fim da autoridade imperial no Ocidente e ao estabelecimento de uma série de reinos bárbaros na Europa. Apesar do fim do Império Romano do Ocidente, o Império Romano do Oriente, também conhecido como Império Bizantino, continuou a existir por mais de mil anos, preservando muitos dos aspectos da cultura, língua e direito romanos.",
           
          semelhantes: semelhantes4
        },
        {
          id: 85,
          name: "Formacao Império Romano do Oriente (Bizantino)",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yT8Jd0KBn3AvHpwY45qcYBDgMXG2qUqrUA&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A formação do Império Romano do Oriente, também conhecido como Império Bizantino, teve início após a divisão do Império Romano em 395 d.C., quando o imperador Teodósio dividiu o império entre seus dois filhos, Arcádio, que governaria no Oriente, e Honório, que governaria no Ocidente. O Império Romano do Oriente teve sua capital em Constantinopla (atual Istambul), que foi fundada por Constantino, o Grande, em 330 d.C., como Nova Roma, e posteriormente renomeada em sua homenagem. Constantinopla ocupava uma posição estratégica no cruzamento entre a Europa e a Ásia, controlando as rotas comerciais entre o Mediterrâneo oriental e o Mar Negro. O Império Bizantino foi inicialmente marcado por uma continuidade com o Império Romano, preservando muitos dos aspectos da cultura, língua e administração romanas. No entanto, ao longo do tempo, o Império Bizantino desenvolveu sua própria identidade distinta, influenciada pela influência grega oriental, pelo cristianismo ortodoxo e pelas pressões geopolíticas da região. O Império Bizantino enfrentou uma série de desafios ao longo de sua história, incluindo guerras com vizinhos poderosos, como os persas e os árabes, disputas religiosas, como os íconoclastas, e invasões bárbaras. No entanto, o Império Bizantino conseguiu sobreviver por mais de mil anos, preservando muitos dos conhecimentos e tradições da Antiguidade Clássica e exercendo uma influência duradoura na história e cultura da Europa Oriental e do Mediterrâneo.",
           
          semelhantes: semelhantes4
        },
        {
          id: 86,
          name: "Coliseu Romano",
          image:
            "https://2.bp.blogspot.com/-mOzjVvKZWVk/VbkSFORbzvI/AAAAAAAAWM0/nkZ2JSTvNU0/s1600/Hist%25C3%25B3ria%2Be%2BSociedade%2B%25288%2529.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Coliseu Romano, também conhecido como Anfiteatro Flaviano, é um dos mais icônicos e bem preservados monumentos da Roma Antiga. Localizado no centro de Roma, Itália, o Coliseu foi construído durante o reinado dos imperadores da dinastia Flaviana, entre os anos 70 e 80 d.C. Ele foi originalmente usado para uma variedade de eventos públicos, incluindo jogos de gladiadores, lutas de animais, execuções públicas, caças e encenações de batalhas históricas. Com capacidade para cerca de 50.000 espectadores, o Coliseu era uma impressionante demonstração do poder e grandiosidade do Império Romano, refletindo sua engenharia avançada e seu compromisso com o entretenimento público. O Coliseu foi construído principalmente em concreto e mármore e apresentava uma série de características inovadoras, como um sistema de arquibancadas em camadas, túneis subterrâneos, elevadores e uma cobertura retrátil. Ao longo dos séculos, o Coliseu sofreu danos por terremotos, pilhagens e escavações, mas ainda hoje é uma das atrações turísticas mais visitadas do mundo, atraindo milhões de visitantes todos os anos. Além de sua importância histórica e arquitetônica, o Coliseu também é um símbolo duradouro da cidade de Roma e da influência do Império Romano na cultura e na sociedade ocidentais.",
           
          semelhantes: semelhantes4
        },
        {
          id: 60,
          name: "Alta Idade Média",
          image:
            "https://www.artesliberais.com.br/wp-content/uploads/2018/11/Post5.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Alta Idade Média, também conhecida como período medieval, refere-se ao período histórico que se estende aproximadamente do século V ao século XI na Europa. Este período é marcado por uma série de transformações sociais, políticas, econômicas e culturais, que foram influenciadas por uma combinação de eventos como a queda do Império Romano do Ocidente, as invasões bárbaras, a propagação do cristianismo, e o desenvolvimento do feudalismo. Após o colapso do Império Romano do Ocidente em 476 d.C., a Europa Ocidental entrou em um período de fragmentação política e incerteza, com a ascensão de reinos germânicos e o declínio da autoridade centralizada. Durante a Alta Idade Média, o cristianismo tornou-se a religião dominante na Europa, exercendo uma influência significativa sobre a vida e a cultura da época. Mosteiros e conventos tornaram-se centros de aprendizado e preservação do conhecimento, enquanto a Igreja Católica desempenhava um papel central na vida espiritual e política. O sistema feudal também começou a se desenvolver durante este período, com a aristocracia rural exercendo controle sobre vastas áreas de terra e camponeses servindo como mão de obra agrícola. Apesar das condições turbulentas, a Alta Idade Média também foi um período de crescimento e renascimento, com avanços na agricultura, comércio, arquitetura e educação que prepararam o terreno para o surgimento da Europa medieval.",
           
          semelhantes: semelhantes5
        },
        {
          id: 61,
          name: "Baixa Idade Média",
          image:
            "https://2.bp.blogspot.com/-0hAowmO5qaU/Wbh4xQPmrLI/AAAAAAAAID8/O0n92LUMm5YBG_BOrCWPw3s1AL5zGy7WACK4BGAYYCw/s1600/festa-na-idade-media.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Baixa Idade Média é o período histórico que se estende aproximadamente do século XI ao século XV na Europa. Durante este período, a Europa passou por uma série de mudanças significativas, incluindo o renascimento urbano, o crescimento do comércio e das cidades, a consolidação do sistema feudal, o aumento da influência da Igreja Católica, e eventos como as Cruzadas e a Peste Negra. O renascimento urbano foi caracterizado pelo crescimento das cidades e o renascimento do comércio, impulsionado pelo aumento da produção agrícola, pelo desenvolvimento de rotas comerciais e pelo surgimento de uma nova classe de comerciantes e artesãos. As cidades medievais se tornaram centros de atividade econômica, social e cultural, com mercados, guildas, universidades e catedrais que refletiam a vida urbana da época. Ao mesmo tempo, o sistema feudal continuou a desempenhar um papel importante na organização social e política da Europa, com senhores feudais exercendo controle sobre vastas áreas de terra e camponeses trabalhando como servos. A Igreja Católica também exerceu uma influência significativa sobre a sociedade medieval, desempenhando papéis religiosos, políticos e culturais. As Cruzadas foram uma série de campanhas militares lançadas pela Igreja Católica para recuperar a Terra Santa do domínio muçulmano, enquanto a Peste Negra foi uma pandemia de peste bubônica que assolou a Europa, causando uma devastação sem precedentes na população e na economia. Apesar dos desafios e crises, a Baixa Idade Média também foi um período de grande criatividade e inovação, com avanços na arte, arquitetura, literatura e ciência que ajudaram a moldar o mundo medieval.",
           
          semelhantes: semelhantes5
        },
        {
          id: 62,
          name: "1453: Queda de Constantinopla",
          image:
            "https://editoraunesp.com.br/blog/icone/queda-de-constantinopla-completa-567-anos",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A queda de Constantinopla em 1453 marcou o fim do Império Romano do Oriente, também conhecido como Império Bizantino, e foi um evento de grande importância na história mundial. Constantinopla, a capital do império, era uma das cidades mais ricas e culturalmente vibrantes da época, servindo como um importante centro comercial, político e religioso. No entanto, após um longo cerco pelas forças otomanas lideradas pelo sultão Maomé II, a cidade finalmente caiu em 29 de maio de 1453. A queda de Constantinopla teve uma série de consequências significativas. Ela marcou o fim de mais de mil anos de história do Império Bizantino e o fim da presença romana no Mediterrâneo oriental. Também abriu o caminho para a expansão do Império Otomano na Europa e Ásia Menor, que se tornou uma das maiores potências do mundo durante os séculos seguintes. Além disso, a queda de Constantinopla teve um impacto profundo na Europa Ocidental, desencadeando uma onda de migração de estudiosos e intelectuais bizantinos para o oeste, o que contribuiu para o Renascimento e o surgimento de uma nova era de aprendizado e descobertas na Europa. Em resumo, a queda de Constantinopla em 1453 foi um evento histórico de grande magnitude, que teve consequências duradouras para o mundo mediterrâneo e para a história global.",
           
          semelhantes: semelhantes5
        },
        {
          id: 63,
          name: "Cruzadas",
          image:
            "https://s2-galileu.glbimg.com/foumqlhi6O5Hvqket-YHZd9PN7s=/0x0:1279x734/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/y/Y/EqXedHQ4Oc15UEJEAAfw/2017-12-06-1280px-counquest-of-jeusalem-1099.jpeg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As Cruzadas foram uma série de expedições militares empreendidas pelos cristãos europeus entre os séculos XI e XIII com o objetivo de retomar Jerusalém e outros lugares sagrados do domínio muçulmano. As Cruzadas foram motivadas por uma combinação de fatores religiosos, políticos, econômicos e sociais, incluindo a expansão do Islã, a reconquista cristã da Península Ibérica, as rivalidades políticas entre os reinos europeus, e o desejo de riquezas e terras. Ao longo de várias décadas, várias cruzadas foram lançadas, resultando em uma série de campanhas militares, batalhas e acordos diplomáticos entre cristãos e muçulmanos. A Primeira Cruzada, em particular, resultou na captura de Jerusalém pelos cruzados em 1099, que estabeleceram vários estados cruzados na região, incluindo o Reino de Jerusalém. No entanto, as subsequentes cruzadas enfrentaram dificuldades e fracassos, com os muçulmanos eventualmente reconquistando Jerusalém em 1187. As Cruzadas tiveram um impacto profundo na história da Europa e do Oriente Médio, estimulando o comércio, o desenvolvimento militar e tecnológico, o intercâmbio cultural e religioso, e contribuindo para o fortalecimento do papado e das monarquias europeias. No entanto, as Cruzadas também resultaram em violência, intolerância religiosa, e sofrimento humano, deixando um legado controverso que ainda é debatido até hoje.",
           
          semelhantes: semelhantes5
        },
        {
          id: 64,
          name: "Feudalismo",
          image:
            "https://www.artesliberais.com.br/wp-content/uploads/2018/11/Post-7.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O feudalismo foi um sistema político, econômico e social predominante na Europa durante a Idade Média, especialmente entre os séculos IX e XIV. Este sistema se baseava em uma estrutura hierárquica de relações de poder e obrigações entre diferentes classes sociais, incluindo senhores feudais, vassalos e camponeses. No topo da hierarquia estava o rei, que concedia terras, conhecidas como feudos, aos senhores feudais em troca de lealdade e serviço militar. Os senhores feudais, por sua vez, concediam parcelas dessas terras aos vassalos, que prometiam proteção e apoio militar em troca. Abaixo dos vassalos estavam os camponeses, que trabalhavam a terra em troca de proteção e uso de terras. Este sistema de relações feudais era baseado em obrigações mútuas de fidelidade, proteção e serviço, e era mantido por uma combinação de acordos formais e tradições culturais. O feudalismo era também um sistema econômico, com a produção agrícola como atividade predominante, e os senhores feudais controlando a produção e distribuição de alimentos em suas terras. Além disso, o feudalismo era um sistema social, com uma rígida hierarquia de status e privilégios que limitava a mobilidade social e determinava a vida das pessoas de acordo com seu status de nascimento. O feudalismo desempenhou um papel fundamental na organização e estabilidade da sociedade medieval, fornecendo segurança, ordem e uma estrutura básica de governo em uma época de grande turbulência e mudança.",
           
          semelhantes: semelhantes5
        },
        {
          id: 65,
          name: "Império Bizantino",
          image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjvvQ51CMYAwCizn-oxbxdbCYOCgcAcrA33wZshPw2II1LR3xH_yMp7_umn4YLeOnCkG_XVS5SCR3eI-mKPgxrnzDSmNXmhOHp3qIC2MTQKIknp5SdvO1Mul8JiGMtzPgq9ifCUMv3Vybv/s1600/Constantinople.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Império Bizantino, também conhecido como Império Romano do Oriente, foi uma continuação direta do Império Romano que sobreviveu à queda do Império Romano do Ocidente e existiu por mais de mil anos, até a queda de Constantinopla em 1453. O Império Bizantino teve sua capital em Constantinopla (atual Istambul), fundada por Constantino, o Grande, em 330 d.C., como Nova Roma, e posteriormente renomeada em sua homenagem. O império foi inicialmente caracterizado por uma mistura de influências romanas e gregas, com o cristianismo ortodoxo oriental tornando-se a religião oficial do estado. O Império Bizantino foi um centro de aprendizado e cultura, preservando e transmitindo muitos aspectos da civilização clássica greco-romana para a Idade Média e além. Durante sua história, o Império Bizantino enfrentou uma série de desafios, incluindo invasões bárbaras, conflitos territoriais, disputas religiosas e conflitos internos. No entanto, o império conseguiu resistir e se adaptar a esses desafios, mantendo sua posição como uma das maiores potências do mundo medieval. O Império Bizantino também foi um importante centro de comércio, arte, arquitetura, literatura e ciência, com uma influência duradoura na história e cultura da Europa Oriental e do Mediterrâneo. No entanto, a queda de Constantinopla em 1453 marcou o fim do Império Bizantino e o fim da presença romana no Mediterrâneo oriental, encerrando um capítulo importante da história mundial.",
           
          semelhantes: semelhantes5
        },
        {
          id: 66,
          name: "Império Carolíngio",
          image:
            "https://i.postimg.cc/SxKRpPdD/download-4.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Império Carolíngio foi um vasto reino que se desenvolveu na Europa Ocidental durante o século VIII, sob a liderança dos governantes da dinastia carolíngia, especialmente Carlos Magno. Este império teve sua origem na expansão do Reino dos Francos, que controlava grande parte da Europa Ocidental após a queda do Império Romano do Ocidente. Carlos Magno, também conhecido como Carlos, o Grande, foi coroado Imperador do Sacro Império Romano-Germânico em 800 pelo Papa Leão III, estabelecendo assim o início do período conhecido como Império Carolíngio. O Império Carolíngio foi caracterizado por uma administração centralizada, uma economia baseada na agricultura e um renascimento cultural e intelectual, conhecido como Renascimento Carolíngio. Carlos Magno promoveu a educação e a alfabetização, estabelecendo escolas e promovendo a produção de manuscritos. Ele também incentivou a unificação da Igreja e do estado, promovendo a conversão dos povos germânicos ao cristianismo e estabelecendo laços estreitos com o papado. No entanto, após a morte de Carlos Magno em 814, o império começou a se fragmentar devido a disputas sucessórias e pressões externas, eventualmente levando à divisão do império em três partes pelos Tratados de Verdun (843). Apesar de sua fragmentação, o Império Carolíngio teve um impacto duradouro na história da Europa, estabelecendo as bases para o feudalismo, o Sacro Império Romano-Germânico e a unidade cultural e política da Europa Ocidental.",
           
          semelhantes: semelhantes5
        },
        {
          id: 67,
          name: "Cultura na Idade media",
          image:
            "https://s3.static.brasilescola.uol.com.br/be/2020/02/inquisicao.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A cultura na Idade Média foi marcada por uma combinação de elementos cristãos, clássicos e germânicos, refletindo a influência das tradições romanas, cristãs e bárbaras. Durante este período, a Igreja Católica exerceu uma influência dominante sobre a vida cultural e intelectual da Europa, desempenhando um papel central na preservação e transmissão do conhecimento clássico, bem como na promoção da arte religiosa e da devoção cristã. A arquitetura religiosa foi uma das formas mais importantes de expressão cultural na Idade Média, com a construção de catedrais góticas, mosteiros e igrejas românicas que se tornaram marcos emblemáticos da época. A literatura também floresceu na Idade Média, com a produção de obras épicas, como a Canção de Rolando e o Ciclo Arturiano, bem como poesia lírica, crônicas históricas e tratados filosóficos e teológicos. A música era outra forma importante de expressão cultural, com o desenvolvimento de estilos como o canto gregoriano e a polifonia. Além disso, a Idade Média viu avanços significativos na educação e na aprendizagem, com a fundação de escolas monásticas e catedrais, a tradução e preservação de textos antigos, e o desenvolvimento de universidades e centros de aprendizado. Embora muitas das realizações culturais da Idade Média tenham sido eclipsadas pelo Renascimento e pela era moderna, o período medieval deixou um legado duradouro na arte, literatura, música, arquitetura, educação e religião que continua a influenciar o mundo até hoje.",
           
          semelhantes: semelhantes5
        },







        {
          id: 68,
          name: "Antropocentrismo",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZE6NwKE5Jx1ZViXi1WGxDtEdU-0AfJSRhyzR7Ocr8467PTRLXoATi3-IMq0k2osP1QSg&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O antropocentrismo é uma visão de mundo que coloca os seres humanos no centro da existência e atribui a eles uma posição de superioridade sobre o restante da natureza. Esta ideologia, que teve origem na filosofia grega antiga e foi posteriormente desenvolvida durante o Renascimento, contrasta com o teocentrismo, que coloca Deus ou os deuses no centro do universo. O antropocentrismo foi promovido por filósofos como Protagoras na Grécia Antiga, que proclamou que -o homem é a medida de todas as coisas-, e por pensadores renascentistas como Pico della Mirandola, que argumentou que os seres humanos têm o poder de moldar seus próprios destinos. Durante o Renascimento, o antropocentrismo foi refletido na arte, na ciência e na filosofia, com o desenvolvimento do humanismo, que enfatizava a dignidade, a liberdade e o potencial criativo do ser humano. Esta visão de mundo teve um impacto profundo na cultura europeia, influenciando o surgimento do pensamento secular, a valorização das realizações individuais e a busca pelo conhecimento humano. No entanto, o antropocentrismo também foi criticado por alguns pensadores, que argumentavam que ele levava ao egoísmo, à exploração da natureza e à degradação do meio ambiente. Apesar das críticas, o antropocentrismo continua a ser uma das ideologias dominantes na sociedade ocidental moderna, moldando nossa compreensão do lugar dos seres humanos no universo e nossas relações com o mundo natural.",
           
          semelhantes: semelhantes6
        },
        {
          id: 69,
          name: "Humanismo e Individualismo",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8F43lfsaPEhiAzRCZbkXPkS-j41fWM1Ch5jYL5ZfH72D64RHGcE36dmbXZtqmr0P948&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O humanismo e o individualismo são duas correntes de pensamento inter-relacionadas que surgiram durante o Renascimento europeu, especialmente nos séculos XIV e XV. O humanismo é uma abordagem filosófica e cultural que valoriza a dignidade, a liberdade e o potencial criativo do ser humano, buscando promover o desenvolvimento das habilidades e virtudes humanas. Esta perspectiva enfatiza a importância da educação, do aprendizado e da busca pelo conhecimento humano como meios de alcançar a excelência e o florescimento pessoal. O individualismo, por sua vez, é uma ênfase na autonomia, na liberdade e na realização pessoal do indivíduo, valorizando a singularidade e a singularidade de cada pessoa. Esta ideologia destaca a importância da liberdade de pensamento, da expressão pessoal e da autorrealização como princípios fundamentais da vida humana. Durante o Renascimento, o humanismo e o individualismo foram promovidos por filósofos, escritores, artistas e líderes políticos que buscavam rejeitar a visão teocêntrica do mundo medieval em favor de uma perspectiva mais centrada no ser humano. Estas ideias foram refletidas na arte, na literatura, na ciência e na filosofia da época, com o desenvolvimento de obras que celebravam a criatividade, a originalidade e o potencial humano. No entanto, o humanismo e o individualismo também foram criticados por alguns pensadores, que argumentavam que eles levavam ao egoísmo, ao relativismo moral e à alienação social. Apesar das críticas, estas correntes de pensamento tiveram um impacto duradouro na cultura europeia e continuam a influenciar a forma como entendemos o lugar do ser humano no mundo.",
           
          semelhantes: semelhantes6
        },
        {
          id: 70,
          name: "Racionalismo e Cientificismo",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9N_JrcZo0VMCbDMtBjoCIWniMn9bWNOfLw&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O racionalismo e o cientificismo são duas correntes de pensamento que surgiram durante o período do Iluminismo na Europa, nos séculos XVII e XVIII, e que tiveram um profundo impacto no desenvolvimento da ciência, da filosofia e da cultura ocidental. O racionalismo é uma abordagem filosófica que enfatiza a razão como a principal fonte de conhecimento e a capacidade da mente humana de entender o mundo através da lógica e do pensamento crítico. Esta perspectiva valoriza a observação, a experimentação e o raciocínio dedutivo como métodos para descobrir as leis fundamentais da natureza e da realidade. O cientificismo, por sua vez, é uma ênfase na importância da ciência e do método científico como guias para o conhecimento humano e como fonte de progresso e desenvolvimento. Esta ideologia valoriza a objetividade, a empiria e a busca por explicações racionais e testáveis para os fenômenos naturais. Durante o Iluminismo, o racionalismo e o cientificismo foram promovidos por filósofos, cientistas e intelectuais que buscavam substituir as explicações religiosas e metafísicas do mundo por uma abordagem mais baseada na razão e na evidência. Estas ideias foram refletidas no desenvolvimento da ciência moderna, com avanços significativos em áreas como a física, a química, a biologia e a matemática. No entanto, o racionalismo e o cientificismo também foram criticados por alguns pensadores, que argumentavam que eles levavam a uma visão mecânica e reducionista da natureza humana e do universo. Apesar das críticas, estas correntes de pensamento continuaram a influenciar o pensamento ocidental e a moldar a forma como entendemos o mundo e buscamos conhecimento.",
           
          semelhantes: semelhantes6
        },

        {
          id: 71,
          name: "",
          image:
            "",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",
   
           
          semelhantes: semelhantes6
        },

      /*  {
          id: 71,
          name: "",
          image:
            "",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",
   
           
          semelhantes: semelhantes6
        },
*/
        {
          id: 72,
          name: "Arquitetura",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SLWfVAGwb2XOEH59gPz632YjKpkz9eYiig&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A arquitetura renascentista foi um estilo arquitetônico que surgiu durante o Renascimento na Itália, no século XV, e se espalhou por toda a Europa nos séculos seguintes. Este estilo arquitetônico foi inspirado pela redescoberta e reinterpretação dos princípios e formas da arquitetura clássica greco-romana, e foi caracterizado por uma ênfase na proporção, na simetria e na harmonia, bem como pelo uso de técnicas avançadas de construção e ornamentação. Uma das características mais distintivas da arquitetura renascentista foi a utilização de elementos arquitetônicos clássicos, como colunas, arcos, cúpulas e frontões, em novas e inovadoras formas. Os arquitetos renascentistas também procuravam criar edifícios que refletissem as aspirações humanas e os ideais da época, com uma ênfase na beleza, na ordem e na perfeição. Um dos exemplos mais famosos da arquitetura renascentista é a Catedral de Santa Maria del Fiore, em Florença, projetada por Filippo Brunelleschi, que apresenta uma cúpula monumental que se tornou um símbolo da cidade. Outros exemplos notáveis de arquitetura renascentista incluem o Palazzo Vecchio em Florença, o Palácio Ducal em Veneza e a Basílica de São Pedro no Vaticano. A arquitetura renascentista teve um impacto duradouro na história da arquitetura e do urbanismo, influenciando estilos subsequentes como o barroco, o neoclássico e o renascimento europeu.",
           
          semelhantes: semelhantes6
        },

        {
          id: 73,
          name: "Pintura",
          image:
            "https://www.artesliberais.com.br/wp-content/uploads/2018/11/Post-12.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A pintura renascentista foi uma forma de arte que floresceu durante o Renascimento na Europa, especialmente na Itália, nos séculos XV e XVI. Este período foi marcado por uma revolução na pintura, com os artistas renascentistas buscando capturar a beleza natural e a profundidade emocional do mundo ao seu redor através do uso de técnicas avançadas de perspectiva, luz e sombra, e composição. Os artistas renascentistas também foram influenciados pela redescoberta dos princípios e técnicas da arte clássica greco-romana, bem como pela crescente ênfase no indivíduo humano e na exploração das emoções humanas. Uma das figuras mais importantes da pintura renascentista foi Leonardo da Vinci, cujas obras-primas incluem a -Mona Lisa- e -A Última Ceia-, que exemplificam a sua habilidade em retratar a profundidade psicológica e a complexidade emocional dos seus personagens. Outro grande mestre da pintura renascentista foi Michelangelo, cujas obras-primas incluem os afrescos da Capela Sistina e a escultura -David-, que demonstram a sua habilidade em representar a forma humana de maneira poderosa e realista. Além de Leonardo e Michelangelo, outros grandes artistas renascentistas incluem Rafael, Ticiano e Tintoretto, que contribuíram para o desenvolvimento da pintura renascentista com suas obras-primas que continuam a inspirar e fascinar os espectadores até os dias de hoje.",
           
          semelhantes: semelhantes6
        },

        {
          id: 74,
          name: "Literatura",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvStHAm9C5IWSnvr7EVVB7wNooNFiTjP4vw&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A literatura renascentista foi uma forma de expressão artística que floresceu durante o Renascimento na Europa, especialmente na Itália, nos séculos XV e XVI. Este período foi marcado por uma revitalização do interesse pelas obras clássicas da antiguidade greco-romana e por uma ênfase no humanismo, que promovia o estudo das humanidades e das ciências humanas. Como resultado, a literatura renascentista foi caracterizada por uma diversidade de temas e estilos, incluindo o resgate e a imitação de modelos clássicos, a exploração dos sentimentos humanos e a celebração da individualidade e da liberdade. Uma das figuras mais importantes da literatura renascentista foi Dante Alighieri, cuja obra-prima -A Divina Comédia- é considerada uma das maiores obras da literatura mundial e exemplifica a sua habilidade em combinar elementos da tradição clássica com temas cristãos e medievais. Outro grande mestre da literatura renascentista foi William Shakespeare, cujas peças teatrais, como -Hamlet-, -Romeu e Julieta- e -Otelo-, são aclamadas pela sua complexidade psicológica, riqueza de linguagem e profundidade temática. Além de Dante e Shakespeare, outros grandes escritores renascentistas incluem Giovanni Boccaccio, autor de -Decameron-, e Miguel de Cervantes, autor de -Dom Quixote-, cujas obras continuam a ser estudadas e apreciadas até os dias de hoje.",
           
           
          semelhantes: semelhantes6
        },











        {
          id: 87,
          name: "A invenção da Imprensa",
          image:
            "https://ensinarhistoria.com.br/s21/wp-content/uploads/2021/04/Pericles-discursando-aos-cidadaos-pintura-Philipp-Foltz-1877.png",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A invenção da imprensa foi um marco histórico que teve um impacto profundo na disseminação do conhecimento e na democratização da informação. Embora a invenção da imprensa tenha sido um processo gradual e complexo, é amplamente atribuída a Johannes Gutenberg, um inventor alemão do século XV. Gutenberg é mais conhecido por ter desenvolvido um sistema de impressão com tipos móveis metálicos, que permitia a produção rápida e eficiente de livros, panfletos e outros materiais impressos. Esta inovação revolucionou a forma como a informação era transmitida e democratizou o acesso à educação e à cultura, tornando possível a disseminação em massa de ideias e conhecimentos. A invenção da imprensa também teve um impacto significativo na disseminação da Reforma Protestante e na disseminação de ideias científicas, filosóficas e políticas durante o Renascimento e a era moderna.",
          semelhantes: semelhantes9
        },
        {
          id: 88,
          name: "Imprensa de gutemberg",
          image:
            "https://miro.medium.com/v2/resize:fit:1400/1*AfWwvPA9LMhlH4jaAoR_Tw.jpeg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Imprensa de Gutenberg foi um avanço tecnológico revolucionário que permitiu a produção em massa de livros e outros materiais impressos. Desenvolvida por Johannes Gutenberg no século XV, a imprensa de tipos móveis metálicos permitia a rápida montagem e desmontagem de letras individuais, o que tornava possível a produção rápida e eficiente de páginas impressas. Este sistema de impressão revolucionou a indústria editorial e teve um impacto profundo na disseminação do conhecimento e na democratização da informação. A imprensa de Gutenberg tornou possível a produção de livros em quantidades sem precedentes, reduzindo significativamente os custos de produção e tornando os livros mais acessíveis a uma ampla gama de pessoas. Esta inovação tecnológica teve um impacto duradouro na cultura e na sociedade, tornando possível a disseminação em massa de ideias e conhecimentos e contribuindo para o desenvolvimento da educação, da ciência e da cultura em todo o mundo.",
           
          semelhantes: semelhantes9
        },
        {
          id: 89,
          name: "Reforma luterana",
          image:
            "https://i.pinimg.com/564x/e2/ee/0a/e2ee0a11720e7c4f32538f5c783aeaba.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Reforma Luterana foi um movimento religioso e teológico que teve origem na Alemanha no século XVI, liderado pelo monge agostiniano Martinho Lutero. A Reforma foi desencadeada pela publicação das 95 Teses de Lutero em 1517, na qual ele criticava a venda de indulgências pela Igreja Católica Romana e questionava a autoridade do Papa e das tradições eclesiásticas. As ideias de Lutero rapidamente se espalharam pela Europa, alimentadas pela recente invenção da imprensa de tipos móveis, que permitiu a rápida disseminação de suas obras e ideias. A Reforma Luterana contestava algumas doutrinas e práticas da Igreja Católica, defendendo princípios como a justificação pela fé, a autoridade das Escrituras e o sacerdócio universal dos crentes. O movimento desencadeou conflitos religiosos e políticos em toda a Europa, culminando na divisão da cristandade ocidental entre católicos e protestantes. A Reforma Luterana teve um impacto duradouro na história da religião e da sociedade, dando origem a novas denominações protestantes e influenciando o desenvolvimento político, cultural e intelectual da Europa moderna.",
           
          semelhantes: semelhantes9
        },
        {
          id: 90,
          name: "Calvinismo",
          image:
            "https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Calvinismo foi um movimento religioso e teológico que surgiu na Suíça no século XVI, liderado pelo reformador francês João Calvino. O Calvinismo se desenvolveu a partir das ideias da Reforma Protestante, mas teve suas próprias características distintas e ênfases teológicas. Uma das doutrinas centrais do Calvinismo é a predestinação, que afirma que Deus predestinou algumas pessoas para a salvação e outras para a condenação antes mesmo da criação do mundo. Esta doutrina foi central para a teologia de Calvino e teve um impacto profundo na ética calvinista, promovendo uma ênfase na disciplina pessoal, no trabalho árduo e na responsabilidade social. O Calvinismo também enfatizava a soberania de Deus em todas as áreas da vida, incluindo a política, a economia e a cultura. O movimento calvinista se espalhou rapidamente pela Europa e além, especialmente para a Holanda, a Escócia, a Inglaterra e as colônias americanas. O Calvinismo teve um impacto duradouro na história da religião e da sociedade, influenciando o desenvolvimento do capitalismo, da democracia, da educação e da cultura em todo o mundo.",
           
          semelhantes: semelhantes9
        },
        {
          id: 91,
          name: "Anglicanismo",
          image:
            "https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O anglicanismo é uma tradição cristã que se originou na Inglaterra no século XVI durante a Reforma Protestante e que se tornou a religião estabelecida da Igreja da Inglaterra. O anglicanismo foi fundado por Henrique VIII da Inglaterra, que rompeu com a autoridade papal em Roma e estabeleceu a Igreja da Inglaterra como uma igreja nacional independente. O anglicanismo manteve muitas das crenças e práticas da Igreja Católica Romana, incluindo a ordem episcopal, o culto litúrgico e a crença nos sacramentos, mas também incorporou elementos da teologia protestante, como a ênfase na autoridade das Escrituras e na salvação pela fé. O anglicanismo se tornou uma das principais tradições religiosas do mundo, com uma presença significativa em todo o Império Britânico e além. O anglicanismo também influenciou o desenvolvimento de outras tradições protestantes, como o metodismo e o episcopalismo, e desempenhou um papel importante na história política e religiosa da Grã-Bretanha e de suas ex-colônias. O anglicanismo continua a ser uma tradição vibrante e diversificada, com uma ampla variedade de crenças e práticas em todo o mundo.",
           
          semelhantes: semelhantes9
        },
        {
          id: 92,
          name: "Nova Formçao economica",
          image:
            "https://i.pinimg.com/564x/12/c5/bd/12c5bd08c324500e4e42772f30e4ff32.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A transição econômica do feudalismo para o mercantilismo e, posteriormente, para o capitalismo foi um processo complexo e multifacetado que ocorreu ao longo de vários séculos na Europa Ocidental, especialmente durante os períodos da Renascença e da Idade Moderna. O feudalismo, um sistema econômico e social dominante na Europa medieval, era caracterizado por relações de vassalagem e suserania entre senhores feudais e servos, bem como por uma economia agrária baseada na produção de subsistência e no trabalho servil. No entanto, durante o final da Idade Média e o início da Idade Moderna, o feudalismo começou a dar lugar a novas formas de organização econômica e social, impulsionadas por mudanças demográficas, tecnológicas, comerciais e culturais. O mercantilismo, que se desenvolveu durante os séculos XVI e XVII, foi um sistema econômico caracterizado pelo controle governamental sobre o comércio e a indústria, com o objetivo de fortalecer o poder e a riqueza do Estado. O mercantilismo enfatizava a acumulação de ouro e prata, a promoção das exportações e a restrição das importações, bem como o estabelecimento de colônias ultramarinas como fontes de matérias-primas e mercados. No entanto, o mercantilismo foi gradualmente substituído pelo capitalismo, um sistema econômico baseado na propriedade privada dos meios de produção, na livre concorrência e na busca do lucro. O capitalismo se desenvolveu a partir do final do mercantilismo e floresceu durante a Revolução Industrial, impulsionando o crescimento econômico, a inovação tecnológica e a urbanização em larga escala. Ao longo desse processo de transição, a Europa experimentou mudanças profundas na estrutura econômica, social e política, que moldaram o mundo moderno e deram origem ao sistema econômico global que conhecemos hoje.",
           
          semelhantes: semelhantes9
        },
        {
          id: 93,
          name: "Immanuel Kant (1724-1804)",
          image:
            "https://i.postimg.cc/cCRcvgCQ/Kant.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Immanuel Kant foi um dos mais influentes filósofos da era moderna, nascido em 1724 na cidade de Königsberg, na Prússia Oriental (hoje Kaliningrado, Rússia), e falecido em 1804. Kant é mais conhecido por suas contribuições para a filosofia da mente, da ética e da metafísica, bem como por seu trabalho seminal na teoria do conhecimento e na filosofia política. Sua obra mais famosa é a 'Crítica da Razão Pura', publicada em 1781, na qual ele examina a natureza e os limites do conhecimento humano, argumentando que grande parte do conhecimento é estruturado pela mente humana de acordo com suas próprias categorias e formas a priori. Kant também é conhecido por sua ética deontológica, apresentada na 'Fundamentação da Metafísica dos Costumes' e na 'Crítica da Razão Prática', na qual ele argumenta que a moralidade é baseada no respeito pelo dever moral e na dignidade inerente à pessoa humana. Além disso, Kant desenvolveu uma teoria política baseada no conceito de paz perpétua e no respeito pelo direito e pela autonomia dos indivíduos, que influenciou o pensamento político liberal e democrático nos séculos seguintes. A influência de Kant se estende além da filosofia, tendo impacto significativo em áreas como a teologia, a psicologia, a ciência política e a estética. Sua obra continua a ser estudada e debatida por filósofos e estudiosos até os dias de hoje, e seu legado perdura como um dos pilares do pensamento ocidental moderno.",
           
          semelhantes: semelhantes10
        },
        {
          id: 94,
          name: "Voltair(1694-1778)",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82fDw0BgUeyOp24DZmd3NuH9jOeQ3TZ32JMtrdBiUy9X7EKH9UNSjTwSPcoHpOujiBj0&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Voltaire, cujo nome verdadeiro era François-Marie Arouet, foi um dos mais importantes filósofos e escritores do Iluminismo francês, nascido em 1694 em Paris e falecido em 1778. Ele é conhecido por sua obra vasta e diversificada, que abrangeu uma variedade de gêneros, incluindo ensaios filosóficos, peças teatrais, poemas e romances. Voltaire era um crítico ferrenho da superstição, da intolerância religiosa e da opressão política, e defendia princípios como a liberdade de expressão, a tolerância religiosa e a separação entre igreja e estado. Sua obra mais famosa é o romance 'Cândido, ou o Otimismo', publicado em 1759, que satiriza a filosofia otimista de Leibniz e critica a injustiça, a hipocrisia e a crueldade do mundo. Além disso, Voltaire foi um defensor apaixonado do pensamento racional, da ciência e da razão, e um crítico contundente da religião organizada, especialmente da Igreja Católica. Ele era conhecido por seu estilo de escrita mordaz e irônico, que lhe rendeu muitos admiradores e também muitos inimigos entre os poderosos e os conservadores de sua época. A influência de Voltaire se estende além de sua obra literária, tendo impacto significativo na cultura, na política e na filosofia modernas. Seu compromisso com a razão, a liberdade e a justiça continua a inspirar pensadores e defensores dos direitos humanos em todo o mundo.",
           
          semelhantes: semelhantes10
        },
        {
          id: 95,
          name: "Montesquie(1689-1755)",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkn63B3bVbmoTnHWh_DAcT58ZYjAAtdXJ9o9kpXq85hovObR29b6sDzDldy1hbftjG8U&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Montesquieu, cujo nome verdadeiro era Charles-Louis de Secondat, foi um filósofo político e escritor francês do Iluminismo, nascido em 1689 e falecido em 1755. Ele é mais conhecido por sua obra 'O Espírito das Leis', publicada em 1748, na qual ele explorou as diferentes formas de governo e propôs o conceito de separação dos poderes. Montesquieu argumentava que a liberdade política e o Estado de Direito poderiam ser melhor protegidos através da divisão do poder entre os poderes legislativo, executivo e judiciário, de modo que cada um deles servisse como freio e contrapeso aos outros. Essa ideia de separação dos poderes influenciou profundamente os sistemas políticos modernos e é um princípio fundamental das democracias constitucionais. Além de suas contribuições para a teoria política, Montesquieu também era conhecido por sua abordagem científica e empirista, bem como por sua crítica à tirania, à superstição e à desigualdade social. Sua obra teve um impacto duradouro na filosofia política e na cultura ocidental, inspirando revoluções políticas, movimentos de reforma e debates sobre a natureza do poder e da liberdade.",
           
          semelhantes: semelhantes10
        },
        {
          id: 96,
          name: "August Comte(1798-1857)",
          image:
            "https://i.postimg.cc/cJ5m8GmL/A-Comte.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Auguste Comte foi um filósofo francês do século XIX, nascido em 1798 e falecido em 1857, conhecido por ser o fundador da sociologia e por sua teoria do positivismo. Comte argumentava que o conhecimento humano passa por três estágios diferentes: o teológico, o metafísico e o positivo. No estágio teológico, as pessoas explicam o mundo em termos de forças sobrenaturais e divinas; no estágio metafísico, elas explicam em termos abstratos e impessoais; e no estágio positivo, buscam explicações baseadas em observações empíricas e leis naturais. Comte acreditava que a sociedade passaria por um estágio semelhante de desenvolvimento, passando de uma fase teológica para uma fase positiva, na qual os fenômenos sociais seriam estudados cientificamente e a sociologia se tornaria uma disciplina autônoma. Além de suas contribuições para a sociologia, Comte também defendia a ideia de que o conhecimento científico deveria ser usado para promover o progresso social e moral da humanidade. Ele propôs a criação de uma nova religião da humanidade, baseada nos princípios do positivismo e no culto à humanidade como um todo. Embora as ideias de Comte tenham sido amplamente influentes em seu tempo, muitas delas foram posteriormente criticadas e revisadas por outros pensadores. No entanto, seu legado como o fundador da sociologia e defensor do positivismo continua a ser reconhecido até os dias de hoje.",
           
          semelhantes: semelhantes10
        },
        {
          id: 97,
          name: "Denis Diderot (1713-1784)",
          image:
            "https://i.postimg.cc/KjqdsH7q/Denis-Direot.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Denis Diderot foi um filósofo, escritor e editor francês do século XVIII, nascido em 1713 e falecido em 1784, mais conhecido por ser um dos principais colaboradores da Enciclopédia, ou Dicionário Racional das Ciências, das Artes e dos Ofícios. A Enciclopédia foi uma das mais importantes obras do Iluminismo, concebida como uma compilação abrangente do conhecimento humano até então. Diderot foi o editor-chefe da Enciclopédia e também contribuiu com muitos artigos sobre uma variedade de tópicos, incluindo filosofia, ciência, religião, política e artes. A Enciclopédia foi pioneira no uso da razão, da crítica e da investigação científica para desafiar os dogmas e as superstições da época, defendendo ideias como a liberdade de expressão, a igualdade perante a lei e a tolerância religiosa. Além de seu trabalho na Enciclopédia, Diderot era um filósofo prolífico em seu próprio direito, explorando uma ampla gama de temas em suas obras, incluindo moralidade, estética, política e religião. Ele era conhecido por seu ceticismo em relação à religião e seu compromisso com a razão, a ciência e os direitos humanos. Diderot foi uma figura central no movimento intelectual do Iluminismo e seu trabalho continua a ser estudado e debatido por filósofos, historiadores e estudiosos até os dias de hoje.",
           
          semelhantes: semelhantes10
        },
        {
          id: 98,
          name: "Jean-Jacques Rousseau (1712-1778)",
          image:
            "https://amigopai.files.wordpress.com/2017/05/rousseau-quadro11.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Jean-Jacques Rousseau foi um filósofo, escritor e compositor suíço-francês do século XVIII, nascido em 1712 e falecido em 1778, conhecido por suas contribuições para a filosofia política, a teoria da educação e a literatura. Rousseau é mais conhecido por suas obras 'Discurso sobre a Origem e os Fundamentos da Desigualdade entre os Homens', 'O Contrato Social' e 'Emílio, ou Da Educação'. No 'Contrato Social', Rousseau argumentava que a sociedade civil e o governo deveriam ser baseados no contrato social, no qual os indivíduos concordam em se submeter à autoridade do Estado em troca de proteção e segurança. Ele defendia a ideia de uma democracia direta e participativa, na qual os cidadãos participariam ativamente na tomada de decisões políticas. Além disso, Rousseau criticava a desigualdade social e econômica gerada pela propriedade privada e pela acumulação de riqueza, defendendo uma forma de comunismo primitivo baseado na propriedade comum e na solidariedade social. Em 'Emílio, ou Da Educação', Rousseau propunha uma nova abordagem para a educação infantil, baseada no respeito pela natureza e pelo desenvolvimento natural da criança. Ele argumentava que a educação deveria se concentrar na formação do caráter e das virtudes morais, em vez de apenas no desenvolvimento intelectual. Rousseau teve um impacto profundo na história do pensamento político e educacional, influenciando movimentos como o romantismo, o liberalismo e o socialismo, bem como figuras como Kant, Hegel e Marx.",
           
          semelhantes: semelhantes10
        },
        {
          id: 99,
          name: "Adam Smith (1723-1790)",
          image:
            "https://i.postimg.cc/J48D1dLD/images.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Adam Smith foi um filósofo moral e economista escocês do século XVIII, nascido em 1723 e falecido em 1790, conhecido por sua obra seminal 'A Riqueza das Nações'. Smith é considerado o pai da economia moderna e um dos fundadores da teoria econômica clássica. Em 'A Riqueza das Nações', publicada em 1776, Smith argumentava que o livre mercado, baseado na competição e na busca do interesse próprio, levaria naturalmente ao aumento da riqueza e ao bem-estar geral da sociedade. Ele cunhou o termo 'mão invisível' para descrever o fenômeno pelo qual os indivíduos, buscando seus próprios interesses egoístas no mercado, acabam promovendo o bem comum e a prosperidade geral da sociedade. Além de sua defesa do livre mercado, Smith também fez contribuições importantes para a teoria do valor, a teoria da divisão do trabalho e a teoria da renda. Ele argumentava que a divisão do trabalho e a especialização produtiva são os principais motores do crescimento econômico e da produtividade. Embora Smith seja frequentemente associado ao liberalismo econômico e ao capitalismo, ele também estava preocupado com questões sociais e morais, e argumentava que o Estado deveria desempenhar um papel ativo na promoção do bem-estar geral, fornecendo educação pública, justiça legal e defesa nacional. A obra de Smith teve um impacto duradouro no pensamento econômico e político, influenciando teóricos e políticas em todo o mundo.",
           
          semelhantes: semelhantes10
        },
        {
          id: 100,
          name: "Jhon Loke(1632-1704)",
          image:
            "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/john-locke-iluminismo.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "John Locke foi um filósofo inglês do século XVII, nascido em 1632 e falecido em 1704, conhecido por suas contribuições para a teoria política, a epistemologia e a filosofia moral. Locke é frequentemente considerado um dos principais expoentes do empirismo britânico e um dos fundadores do liberalismo político. Sua obra mais famosa é o 'Ensaio sobre o Entendimento Humano', publicado em 1690, no qual ele argumentava que a mente humana é uma 'folha em branco' no nascimento, e que todo o conhecimento é adquirido através da experiência sensorial e da reflexão. Locke também é conhecido por sua teoria do contrato social, apresentada em sua obra 'Dois Tratados sobre o Governo', na qual ele argumentava que o governo legítimo deriva do consentimento dos governados e tem a responsabilidade de proteger os direitos naturais, como vida, liberdade e propriedade. Locke foi um defensor ardente da liberdade individual, da tolerância religiosa e da separação entre igreja e estado. Ele argumentava que a religião deveria ser uma questão de crença privada, não de imposição coercitiva, e defendia o direito à liberdade de consciência e de expressão. As ideias de Locke tiveram um impacto profundo na história do pensamento político e na formação das democracias liberais modernas, influenciando figuras como Thomas Jefferson, Voltaire e os autores da Declaração dos Direitos do Homem e do Cidadão durante a Revolução Francesa.",
           
          semelhantes: semelhantes10
        },

        {
          id: 101,
          name: "Thomas Hobbes",
          image:
            "https://i.postimg.cc/BvZZyd2s/Hobbes.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Thomas Hobbes foi um filósofo inglês do século XVII, nascido em 1588 e falecido em 1679, conhecido por suas contribuições para a teoria política e a filosofia moral. Hobbes é mais conhecido por sua obra 'Leviatã', publicada em 1651, na qual ele desenvolve uma teoria contratualista do Estado e da sociedade. Hobbes argumentava que, no estado de natureza, os seres humanos viviam em um estado de guerra de todos contra todos, onde a vida era 'solitária, pobre, sórdida, brutal e curta'. Para escapar desse estado de guerra e garantir a paz e a segurança, os indivíduos concordavam em se submeter a um soberano absoluto, que detinha o poder supremo e tinha o direito de impor a ordem e a justiça. Essa forma de governo, conhecida como absolutismo, era justificada pelo contrato social, no qual os indivíduos abdicavam de parte de sua liberdade em troca de proteção e segurança. Hobbes também foi um dos primeiros filósofos a aplicar métodos científicos à política e à moral, argumentando que as leis da natureza poderiam ser descobertas através da razão e da observação empírica. Embora suas ideias tenham sido controversas em sua época, elas tiveram um impacto duradouro na teoria política e na filosofia moral, influenciando pensadores como John Locke, Jean-Jacques Rousseau e outros teóricos do contrato social.",
           
          semelhantes: semelhantes10
        },

        {
          id: 102,
          name: "Descartes",
          image:
            "https://i.postimg.cc/JnyJky6s/download-5.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "René Descartes foi um filósofo, matemático e cientista francês do século XVII, nascido em 1596 e falecido em 1650, conhecido por suas contribuições para a filosofia moderna e a matemática. Descartes é frequentemente considerado o pai da filosofia moderna e um dos fundadores da geometria analítica. Sua obra mais famosa é 'Meditações sobre a Filosofia Primeira', publicada em 1641, na qual ele desenvolveu um método sistemático para alcançar o conhecimento seguro e indubitável. Descartes começou sua busca pelo conhecimento duvidando de tudo que podia ser duvidado, até chegar à conclusão de que a única coisa indubitável era o próprio pensamento: 'Penso, logo existo' ('Cogito, ergo sum'). A partir dessa certeza fundamental, Descartes reconstruiu todo o edifício do conhecimento humano, baseando-se na razão e na lógica matemática. Ele acreditava que a mente humana era capaz de conhecer a verdade objetiva e de descobrir as leis fundamentais da natureza através do uso da razão e do método científico. Além de suas contribuições para a filosofia, Descartes também fez importantes avanços na matemática, especialmente na geometria, e desenvolveu um sistema de coordenadas cartesianas que revolucionou a geometria analítica. Sua obra teve um impacto profundo na história da filosofia, da ciência e da matemática, influenciando pensadores como Spinoza, Leibniz e Newton, e contribuindo para o desenvolvimento do método científico e do racionalismo moderno.",
           
          semelhantes: semelhantes10
        },





        {
          id: 103,
          name: "Ascensão de Napoleão Bonaparte",
          image:
            "https://i.postimg.cc/FzJrt6NK/EraN3.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A ascensão de Napoleão Bonaparte marca um dos capítulos mais significativos da história europeia do início do século XIX. Nascido na Córsega em 1769, Napoleão emergiu como um líder militar durante a Revolução Francesa. Sua ascensão ao poder foi impulsionada por sua habilidade militar excepcional e seu talento estratégico. Após uma série de campanhas bem-sucedidas, Napoleão se tornou o primeiro cônsul da França em 1799. Ele logo consolidou seu poder e se autoproclamou Imperador dos Franceses em 1804. O governo de Napoleão foi caracterizado por uma série de reformas e conquistas militares. Ele promoveu o Código Napoleônico, um conjunto abrangente de leis que codificou os princípios da Revolução Francesa, como igualdade perante a lei e liberdade individual. Além disso, Napoleão expandiu os domínios do Império Francês por meio de uma série de campanhas militares, estabelecendo um vasto império na Europa continental. Sua hegemonia foi desafiada por uma coalizão de potências europeias, levando a uma série de guerras conhecidas como Guerras Napoleônicas. Após uma série de derrotas militares, Napoleão foi finalmente derrotado na Batalha de Waterloo em 1815 e exilado para a ilha de Santa Helena, onde morreu em 1821. Apesar de seu eventual declínio, o legado de Napoleão como líder militar e reformador político permaneceu duradouro, influenciando eventos subsequentes na Europa e além.",
           
          semelhantes: semelhantes14
        },
        {
          id: 104,
          name: "Consolidação do Poder",
          image:
            "https://ep00.epimg.net/elpais/imagenes/2021/05/04/album/1620127756_041477_1620129303_album_normal.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A consolidação do poder de Napoleão Bonaparte foi um processo complexo que ocorreu ao longo das primeiras décadas do século XIX. Após emergir como um líder militar durante a Revolução Francesa, Napoleão aproveitou as circunstâncias políticas turbulentas da França pós-revolucionária para consolidar sua autoridade e estabelecer um regime forte e centralizado. Em 1799, Napoleão liderou um golpe de Estado bem-sucedido, derrubando o governo do Diretório e se tornando o primeiro cônsul da França. Ao longo dos anos seguintes, ele consolidou ainda mais seu poder por meio de uma série de reformas políticas, administrativas e legais. Napoleão promoveu a estabilidade política e social por meio do Código Napoleônico, um sistema legal abrangente que estabeleceu a igualdade perante a lei, a proteção da propriedade privada e a liberdade individual. Além disso, ele reorganizou o governo francês, criando uma burocracia eficiente e centralizada que fortaleceu seu controle sobre o país. A consolidação do poder de Napoleão também foi facilitada por suas vitórias militares impressionantes, que expandiram os domínios do Império Francês e aumentaram sua popularidade entre o povo francês. No entanto, a hegemonia de Napoleão foi desafiada por uma série de guerras contra potências europeias, culminando na derrota final na Batalha de Waterloo em 1815. Após sua abdicação, Napoleão foi exilado para a ilha de Elba, marcando o fim de seu domínio na Europa continental.",
           
          semelhantes: semelhantes14
        },
        {
          id: 105,
          name: "Guerra da Primeira Coalizão (1792-1797)",
          image:
            "https://i.postimg.cc/mr827MmT/EraN1.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra da Primeira Coalizão foi um conflito militar que ocorreu entre 1792 e 1797, durante as fases iniciais da Revolução Francesa. A guerra foi desencadeada pelas tensões entre a França revolucionária e as monarquias absolutistas europeias, que temiam a disseminação dos ideais revolucionários. A coalizão anti-francesa foi formada por potências como Áustria, Prússia, Grã-Bretanha, Espanha e outros estados europeus. A França revolucionária, liderada pelo Comitê de Salvação Pública, respondeu declarando guerra contra várias nações vizinhas em defesa da revolução e da soberania nacional. As primeiras fases da guerra foram marcadas por uma série de vitórias francesas, incluindo a captura de importantes fortalezas fronteiriças e a derrota das forças inimigas em várias batalhas. No entanto, a guerra se arrastou por anos e testemunhou uma série de reviravoltas e mudanças de alianças. A Primeira Coalizão não conseguiu alcançar seus objetivos de restaurar a monarquia na França, e a guerra acabou em 1797 com o Tratado de Campo Formio, que resultou em ganhos territoriais significativos para a França às custas de seus adversários. Embora a Guerra da Primeira Coalizão tenha terminado temporariamente, ela preparou o terreno para conflitos posteriores e refletiu as profundas divisões ideológicas e geopolíticas que caracterizaram o período revolucionário na Europa.",
           
          semelhantes: semelhantes14
        },
        {
          id: 106,
          name: "Guerra da Segunda Coalizão (1798-1802)",
          image:
            "https://i.postimg.cc/nV67sbs0/EraN5.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra da Segunda Coalizão foi um conflito militar que ocorreu entre 1798 e 1802, envolvendo a França revolucionária e uma coalizão de potências europeias contrárias à expansão dos ideais revolucionários franceses. A Segunda Coalizão foi formada em resposta à crescente agressão francesa na Europa e ao estabelecimento da República Francesa após a Revolução de 1799. Os principais membros da coalizão incluíam a Áustria, a Grã-Bretanha, a Rússia, o Império Otomano e outros estados europeus. A guerra testemunhou uma série de campanhas militares em várias frentes, incluindo a Itália, o Egito, o Oriente Médio e o norte da Europa. Uma das campanhas mais famosas da guerra foi a Expedição do Egito, liderada por Napoleão Bonaparte, que resultou na conquista do Egito e na derrota da Marinha Britânica na Batalha do Nilo em 1798. No entanto, apesar de algumas vitórias iniciais, a França enfrentou dificuldades crescentes à medida que a guerra se arrastava. A Segunda Coalizão foi enfraquecida por divisões internas e conflitos de interesse entre seus membros, e a França conseguiu garantir uma série de vitórias importantes, tanto no campo de batalha quanto nas negociações diplomáticas. A guerra chegou ao fim em 1802 com o Tratado de Amiens, que estabeleceu uma paz temporária entre a França e a Grã-Bretanha. Embora a paz fosse breve e a Segunda Coalizão tenha sido dissolvida, o conflito refletiu as rivalidades geopolíticas e as lutas pelo poder que caracterizaram o período revolucionário e napoleônico na Europa.",
           
          semelhantes: semelhantes14
        },
        {
          id: 107,
          name: "Guerra da Terceira Coalizão (1803-1806)",
          image:
            "https://i.postimg.cc/qvpNnkpX/EraN8.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra da Terceira Coalizão foi um conflito militar que ocorreu entre 1803 e 1806, envolvendo a França napoleônica e uma coalizão de potências europeias contrárias à hegemonia francesa na Europa. A Terceira Coalizão foi formada em resposta à crescente expansão do Império Francês sob o governo de Napoleão Bonaparte e à ameaça que representava para a estabilidade geopolítica da Europa. Os principais membros da coalizão incluíam a Grã-Bretanha, a Áustria, a Rússia e a Suécia, entre outros estados europeus. A guerra testemunhou uma série de campanhas militares em várias frentes, incluindo a Alemanha, a Itália e o mar Báltico. Uma das campanhas mais significativas da guerra foi a Batalha de Trafalgar em 1805, na qual a Marinha Britânica infligiu uma derrota decisiva à frota franco-espanhola, garantindo assim sua supremacia naval. No entanto, apesar de algumas vitórias iniciais, a Terceira Coalizão foi enfraquecida por divisões internas e rivalidades entre seus membros, enquanto Napoleão demonstrou sua habilidade tática e estratégica em uma série de vitórias importantes, incluindo a Batalha de Austerlitz em 1805. A guerra chegou ao fim em 1806 com a assinatura do Tratado de Pressburg entre a França e a Áustria, que resultou em ganhos territoriais significativos para a França e na dissolução da Terceira Coalizão. Embora a paz fosse temporária e novos conflitos ocorressem posteriormente, a Guerra da Terceira Coalizão marcou um ponto de virada importante na ascensão de Napoleão Bonaparte como uma figura dominante na Europa.",
           
          semelhantes: semelhantes14
        },
        {
          id: 108,
          name: "Guerra da Quarta Coalizão (1806-1807)",
          image:
            "https://i.postimg.cc/HskG7Kf8/EraN4.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra da Quarta Coalizão foi um conflito militar que ocorreu entre 1806 e 1807, envolvendo a França napoleônica e uma coalizão de potências europeias contrárias à expansão do Império Francês na Europa continental. A Quarta Coalizão foi formada em resposta à crescente hegemonia francesa e à ameaça que representava para a estabilidade geopolítica da região. Os principais membros da coalizão incluíam a Prússia, a Rússia, a Suécia e outros estados europeus. A guerra testemunhou uma série de campanhas militares em várias frentes, incluindo a Europa Central e Oriental. Uma das campanhas mais significativas da guerra foi a Batalha de Jena-Auerstedt em 1806, na qual as forças francesas infligiram uma derrota decisiva às forças prussianas, abrindo o caminho para a ocupação francesa da Prússia. Apesar de algumas vitórias iniciais, a Quarta Coalizão foi enfraquecida por divisões internas e rivalidades entre seus membros, enquanto Napoleão demonstrou sua habilidade tática e estratégica em uma série de batalhas importantes. A guerra chegou ao fim em 1807 com a assinatura do Tratado de Tilsit entre a França e a Rússia, que resultou em ganhos territoriais significativos para a França e na dissolução da Quarta Coalizão. Embora a paz fosse temporária e novos conflitos ocorressem posteriormente, a Guerra da Quarta Coalizão consolidou ainda mais o domínio de Napoleão na Europa continental.",
           
          semelhantes: semelhantes14
        },



        {
          id: 109,
          name: "Guerra Peninsular (1807-1814)",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-U1QEO5IOeUrqDcx8VZ__ZuC5rIsLm-_fA&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra Peninsular, também conhecida como Guerra da Independência Espanhola, foi um conflito militar que ocorreu entre 1807 e 1814 na Península Ibérica, envolvendo as forças napoleônicas da França e os exércitos espanhóis, apoiados pelas guerrilhas locais e por uma coalizão internacional. A guerra foi desencadeada pela invasão da Espanha pelas tropas francesas lideradas por Napoleão Bonaparte, após a recusa do rei espanhol em aderir ao Bloqueio Continental contra a Grã-Bretanha. O domínio francês sobre a Espanha provocou uma revolta popular, conhecida como Levante do 2 de Maio, em Madrid, e uma série de insurreições em todo o país. A resistência espanhola foi fortalecida pela formação de guerrilhas, que lançaram uma guerra de guerrilha contra as tropas francesas e seus aliados. A guerra testemunhou uma série de batalhas e campanhas militares em toda a Península Ibérica, com os franceses enfrentando a resistência feroz dos espanhóis e de suas forças aliadas, incluindo o exército britânico liderado pelo Duque de Wellington. A Guerra Peninsular teve um custo humano significativo e foi caracterizada por táticas brutais de ambos os lados, incluindo execuções em massa e saques. A guerra chegou ao fim em 1814, após a retirada das tropas francesas da Península Ibérica, e teve um impacto duradouro na política e na sociedade espanhola, contribuindo para o declínio do poder napoleônico na Europa e para o surgimento de movimentos nacionalistas na Espanha e em outras partes da Europa.",
           
          semelhantes: semelhantes14
        },
        {
          id: 110,
          name: "Invasão da Rússia (1812)",
          image:
            "https://i.postimg.cc/Zn1qCSV3/Eran7.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Invasão da Rússia por Napoleão Bonaparte em 1812 foi uma das campanhas militares mais ambiciosas e desastrosas da história militar. A invasão foi lançada como parte da campanha de Napoleão para impor o Bloqueio Continental à Rússia e garantir a submissão do czar Alexandre I à supremacia francesa na Europa. Em junho de 1812, Napoleão liderou uma grande força composta por soldados franceses e de várias nações aliadas em direção à Rússia. No entanto, a campanha rapidamente se transformou em um desastre devido a uma combinação de fatores, incluindo o vasto território russo, o clima extremo, a tática de terra arrasada empregada pelo exército russo e a resistência feroz das tropas russas. A invasão culminou na dramática Batalha de Borodino em setembro de 1812, uma das batalhas mais sangrentas da história, que resultou em um impasse tático e em pesadas baixas para ambos os lados. Após a Batalha de Borodino, as tropas francesas avançaram para Moscou, apenas para encontrá-la abandonada e incendiada pelas autoridades russas. Com suprimentos escassos e o inverno russo se aproximando, Napoleão foi forçado a ordenar a retirada de suas tropas em outubro de 1812. A retirada foi um desastre, com as tropas francesas enfrentando fome, frio e ataques constantes das tropas russas em retirada. A maioria das forças francesas foi dizimada durante a retirada, e a invasão acabou sendo um ponto de virada crucial na campanha de Napoleão na Europa, minando sua autoridade e influência na região.",
           
          semelhantes: semelhantes14
        },

        {
          id: 111,
          name: "Guerras da Sexta Coalizão (1813-1814)",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4DC35b2P5bFlipPcclzP6-Cwiy9x_DRzDA&usqp=CAU",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As Guerras da Sexta Coalizão foram uma série de conflitos militares que ocorreram entre 1813 e 1814 na Europa, envolvendo a França napoleônica e uma coalizão de potências europeias contrárias ao domínio de Napoleão Bonaparte. A Sexta Coalizão foi formada em resposta à crescente oposição pública e ao ressurgimento das potências europeias após o fracasso da campanha russa de Napoleão em 1812. Os principais membros da coalizão incluíam a Rússia, a Prússia, a Áustria e a Grã-Bretanha, entre outros estados europeus. A guerra testemunhou uma série de campanhas militares em várias frentes, incluindo a Europa Central e Oriental. Uma das batalhas mais significativas da guerra foi a Batalha das Nações em Leipzig em 1813, na qual as forças coalizadas infligiram uma derrota decisiva às tropas francesas, forçando Napoleão a recuar para a França. A guerra também incluiu uma campanha na Península Ibérica, onde as forças britânicas e espanholas lançaram uma ofensiva bem-sucedida contra as tropas francesas, contribuindo para a derrota final de Napoleão. As Guerras da Sexta Coalizão culminaram na invasão da França em 1814 e na abdicação de Napoleão em favor da restauração da monarquia. O conflito marcou o fim do domínio napoleônico na Europa e o início de um período de restauração e reorganização política na região.",
           
          semelhantes: semelhantes14
        },

        {
          id: 112,
          name: "Guerra dos Cem Dias (1815)",
          image:
            "https://i.postimg.cc/4dHyZy1Z/EraN6.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra dos Cem Dias foi um conflito militar que ocorreu em 1815 na Europa, marcando o retorno de Napoleão Bonaparte ao poder após sua abdicação em 1814. O período dos Cem Dias começou com a fuga de Napoleão do exílio na ilha de Elba e sua subsequente chegada à França em março de 1815. A notícia de seu retorno provocou tumulto na Europa e levou à formação de uma coalizão internacional contra ele. As principais potências europeias, incluindo a Grã-Bretanha, a Áustria, a Prússia e a Rússia, reuniram suas forças para enfrentar Napoleão e restaurar a monarquia na França. A guerra testemunhou uma série de batalhas e campanhas militares em toda a Europa, com as tropas francesas enfrentando as forças da coalizão em uma série de confrontos decisivos. A batalha mais famosa da Guerra dos Cem Dias foi a Batalha de Waterloo em junho de 1815, na qual as forças francesas de Napoleão foram derrotadas pelas forças da coalizão lideradas pelo Duque de Wellington. A derrota em Waterloo marcou o fim do período dos Cem Dias e o segundo e último exílio de Napoleão, desta vez para a ilha de Santa Helena, onde ele morreu em 1821. A Guerra dos Cem Dias teve um impacto significativo na história europeia, encerrando definitivamente a era napoleônica e estabelecendo as bases para a restauração da ordem política na Europa.",
           
          semelhantes: semelhantes14
        },

        {
          id: 113,
          name: "Congresso de Viena e Restauração",
          image:
            "https://i.postimg.cc/QCPqCH2b/Cong-Viena.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Congresso de Viena e a Restauração foram eventos cruciais que ocorreram após as Guerras Napoleônicas, entre 1814 e 1815, com o objetivo de restaurar a estabilidade política na Europa após a queda de Napoleão Bonaparte. O Congresso de Viena foi uma conferência diplomática realizada na capital austríaca entre as principais potências europeias da época, incluindo Áustria, Rússia, Prússia, Grã-Bretanha e França. O congresso foi liderado por figuras proeminentes como Klemens von Metternich, ministro das Relações Exteriores da Áustria, e Viscount Castlereagh, ministro das Relações Exteriores da Grã-Bretanha. O principal objetivo do Congresso de Viena era reorganizar o mapa político da Europa e restaurar as monarquias depostas por Napoleão, garantindo assim um equilíbrio de poder na região. As negociações resultaram em uma série de acordos e tratados que estabeleceram novas fronteiras territoriais e reorganizaram as alianças políticas na Europa. A Restauração refere-se ao período subsequente ao Congresso de Viena, durante o qual as monarquias absolutistas foram restauradas em muitos países europeus, substituindo os regimes republicanos ou revolucionários estabelecidos durante as Guerras Napoleônicas. O objetivo da Restauração era estabelecer uma ordem política e social baseada nos princípios do conservadorismo e do absolutismo, em oposição aos ideais democráticos e republicanos da Revolução Francesa. Embora o Congresso de Viena e a Restauração tenham sido criticados por reprimir movimentos nacionalistas e democráticos em toda a Europa, eles conseguiram estabelecer um período de relativa estabilidade política na região, conhecido como a 'Era da Restauração'.",
           
          semelhantes: semelhantes14
        },

        {
          id: 114,
          name: "Exílio e Retorno",
          image:
            "https://annelauregraff.files.wordpress.com/2016/04/20_pensif.jpg?w=547",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "Os exílios de Napoleão Bonaparte foram eventos significativos que marcaram o final de sua carreira política e militar. Após sua derrota na Batalha de Waterloo em 1815, Napoleão foi forçado a abdicar do trono francês pela segunda vez e foi exilado para a ilha de Santa Helena, um território remoto no Atlântico Sul. O exílio de Santa Helena, que durou até sua morte em 1821, foi caracterizado por condições rigorosas e isolamento, com Napoleão vivendo sob vigilância constante das autoridades britânicas. Durante seu exílio, Napoleão dedicou-se à escrita de suas memórias e à reflexão sobre sua carreira política e militar. Seu exílio também foi marcado por controvérsias e conspirações, com teorias de que sua morte teria sido resultado de envenenamento por agentes britânicos, embora essa teoria seja contestada pela maioria dos historiadores. Após a morte de Napoleão em 1821, seus restos mortais foram inicialmente enterrados na ilha de Santa Helena, antes de serem posteriormente transferidos para a França em 1840, onde foram sepultados no Hôtel des Invalides, em Paris, em um túmulo comemorativo. Os exílios de Napoleão marcaram o fim de uma era na história europeia e o início de um período de restauração política e estabilidade na região.",
           
          semelhantes: semelhantes14
        },

        {
          id: 115,
          name: "Primavera Dos Povos",
          image:
            "https://conhecimentocientifico.r7.com/wp-content/uploads/2018/12/voce-sabia-que-os-ideais-da-revolucao-de-1848-espalharam-pelo-mundo.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Primavera dos Povos foi um período de revoluções e agitações políticas que ocorreu em grande parte da Europa em 1848. As revoluções foram motivadas por uma série de fatores, incluindo descontentamento popular com regimes autoritários, demandas por reformas políticas e sociais, e influência de ideias liberais e nacionalistas. Os levantes começaram em fevereiro de 1848 em Paris, com a Revolução Francesa de 1848, que resultou na queda do rei Luís Felipe e na proclamação da Segunda República Francesa. Os protestos se espalharam rapidamente por toda a Europa, com revoltas ocorrendo em países como Alemanha, Itália, Áustria, Hungria e Polônia, entre outros. As demandas populares variavam de país para país, mas incluíam exigências por constituições escritas, direitos políticos e sociais, e autonomia nacional. Apesar de alguns sucessos iniciais, como a abolição do feudalismo na Áustria e a concessão de constituições liberais em alguns estados alemães, a Primavera dos Povos acabou sendo em grande parte reprimida pelas forças conservadoras e autoritárias. A revolução foi finalmente suprimida em meados de 1849, com o retorno à ordem política anterior em muitos países europeus. Embora as revoluções de 1848 tenham falhado em alcançar muitos de seus objetivos imediatos, elas tiveram um impacto duradouro na política europeia, inspirando movimentos nacionalistas e democráticos nas décadas seguintes e contribuindo para a transformação gradual da Europa em direção a sistemas políticos mais democráticos e liberais.",
           
          semelhantes: semelhantes14
        },


        {
          id: 116,
          name: "Revoluções e Movimentos Nacionalistas",
          image:
            "https://cliohistoriaeliteratura.files.wordpress.com/2019/12/02-12.jpg?w=657",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As revoluções e movimentos nacionalistas do século XIX foram eventos marcantes que moldaram a história europeia e global. Durante esse período, vários países enfrentaram agitações políticas, movimentos de independência e mudanças de regime que refletiam a busca por autodeterminação, liberdade e identidade nacional. Um dos acontecimentos mais significativos foi o golpe de Luís Bonaparte, que ocorreu em dezembro de 1851 na França. Luís Napoleão Bonaparte, sobrinho de Napoleão Bonaparte, havia sido eleito presidente da Segunda República Francesa em 1848, mas seu mandato estava prestes a expirar em 1852. Temendo a perda de poder, Luís Bonaparte lançou um golpe de Estado em 2 de dezembro de 1851, dissolvendo a Assembleia Nacional, suspendendo a Constituição e proclamando-se imperador Napoleão III. Este golpe marcou o fim da Segunda República Francesa e o início do Segundo Império Francês. O golpe de Luís Bonaparte foi facilitado pelo descontentamento popular, pela instabilidade política e pela crescente polarização entre facções políticas na França. Apesar das críticas à sua ascensão ao poder, Napoleão III governou a França por quase duas décadas, implementando reformas econômicas e urbanísticas significativas, mas também reprimindo a dissidência política e expandindo o imperialismo francês no exterior. Seu reinado chegou ao fim com a derrota na Guerra Franco-Prussiana em 1870 e a consequente queda do Segundo Império. O golpe de Luís Bonaparte e o subsequente estabelecimento do Segundo Império tiveram um impacto profundo na política francesa e na história europeia, marcando o início de uma era de autoritarismo e imperialismo na França e contribuindo para o surgimento de movimentos sociais e políticos em toda a Europa.",
           
          semelhantes: semelhantes14
        },

        {
          id: 117,
          name: "Primeira Revolução Industrial (Final do século XVIII - início do século XIX)",
          image:
            "https://miro.medium.com/v2/resize:fit:1200/1*j3zE7LKl6zYY3Ipo06NS7g.jpeg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Primeira Revolução Industrial foi um período de transformação econômica, social e tecnológica que ocorreu na Grã-Bretanha durante o final do século XVIII e início do século XIX. Esse período foi marcado por uma série de avanços significativos na produção industrial, como a introdução de novas máquinas, métodos de produção mais eficientes e a aplicação de fontes de energia como o carvão e a água. Um dos marcos mais importantes dessa revolução foi a mecanização da indústria têxtil, com a invenção de máquinas como o tear mecânico, que aumentaram drasticamente a produção de tecidos e reduziram os custos de produção. Além da indústria têxtil, outros setores também passaram por mudanças significativas, como a metalurgia, a mineração e a produção de energia. A Primeira Revolução Industrial teve um impacto profundo na sociedade britânica e global, levando a uma rápida urbanização, o surgimento da classe trabalhadora industrial e mudanças nas relações de trabalho. Enquanto alguns se beneficiaram enormemente desse período de crescimento econômico, outros enfrentaram condições de trabalho desumanas, salários baixos e insegurança no emprego. A Primeira Revolução Industrial não foi apenas um marco econômico, mas também um catalisador para mudanças sociais, políticas e culturais que moldaram o mundo moderno.",
           
          semelhantes: semelhantes15
        },

        {
          id: 118,
          name: "Mudanças Sociais e Econômicas",
          image:
            "https://i.postimg.cc/28Zp086S/Rev-Industrial2.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As mudanças sociais e econômicas decorrentes da Primeira Revolução Industrial foram profundas e abrangentes. Economicamente, houve uma transição significativa de uma economia agrária e baseada em ofícios para uma economia industrializada. Isso resultou no surgimento de novos setores econômicos, como a indústria têxtil, metalurgia e mineração, e a adoção de tecnologias inovadoras, como máquinas a vapor e linhas de produção. Essas mudanças não apenas aumentaram a produção e a eficiência, mas também alteraram fundamentalmente a estrutura econômica e a organização do trabalho. Socialmente, a industrialização levou a mudanças demográficas significativas, como a urbanização em larga escala, com pessoas migrando do campo para as cidades em busca de emprego nas fábricas. Isso resultou no surgimento de grandes centros urbanos, como Manchester e Birmingham, e na formação de uma nova classe trabalhadora industrial. Essa classe enfrentou condições de trabalho difíceis, salários baixos e uma falta de proteção social, o que levou a uma crescente conscientização e organização dos trabalhadores em sindicatos e movimentos trabalhistas. Além disso, as mudanças econômicas e sociais também tiveram impacto na estrutura familiar e nas relações sociais, com a separação entre trabalho e vida familiar se tornando mais pronunciada e o papel das mulheres na força de trabalho se expandindo. Em resumo, as mudanças sociais e econômicas decorrentes da Primeira Revolução Industrial foram vastas e profundas, moldando a sociedade e a economia modernas e estabelecendo as bases para o mundo industrializado em que vivemos hoje.",
           
          semelhantes: semelhantes15
        },

        {
          id: 119,
          name: "Segunda Revolução Industrial (meados do século XIX - início do século XX)",
          image:
            "https://i.postimg.cc/bwy7p0gs/Rev-Industrial6.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Segunda Revolução Industrial foi um período de transformação econômica e tecnológica que ocorreu principalmente durante o final do século XIX e início do século XX. Essa fase da revolução industrial foi marcada por avanços significativos em várias áreas, incluindo a produção de aço em larga escala, a eletrificação, o desenvolvimento de novos processos químicos e a invenção de novas formas de transporte e comunicação. Uma das características mais distintivas da Segunda Revolução Industrial foi a rápida expansão da indústria pesada, especialmente a produção de aço e produtos químicos. Isso foi impulsionado pelo desenvolvimento de novas tecnologias, como o processo Bessemer para fabricação de aço, que permitiu a produção em larga escala e a redução dos custos. Além disso, a eletrificação tornou-se generalizada durante esse período, com a eletricidade sendo cada vez mais utilizada como fonte de energia em fábricas, transportes e residências. Outros avanços importantes incluíram a invenção do motor de combustão interna, que impulsionou o desenvolvimento de novos meios de transporte, como automóveis e aviões, e o desenvolvimento de novas formas de comunicação, como o telégrafo e o telefone. A Segunda Revolução Industrial teve um impacto profundo na sociedade e na economia, transformando a forma como as pessoas viviam, trabalhavam e se comunicavam. Ela também contribuiu para o surgimento de novas classes sociais, como a classe média, e para o aumento da urbanização e da globalização. Em resumo, a Segunda Revolução Industrial foi um período de mudança acelerada e inovação tecnológica que teve um impacto duradouro no mundo moderno.",
           
          semelhantes: semelhantes15
        },

        {
          id: 120,
          name: "Impacto na Sociedade e na Economia Global",
          image:
            "https://i.postimg.cc/25pS0KmP/Rev-Industrial3.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O impacto da Segunda Revolução Industrial na sociedade e na economia global foi profundo e abrangente. Em termos econômicos, a Segunda Revolução Industrial impulsionou o crescimento econômico e a industrialização em todo o mundo, transformando economias agrárias em economias industrializadas. Isso resultou em um aumento maciço na produção de bens e serviços, bem como na criação de novos empregos e oportunidades econômicas. Além disso, a Segunda Revolução Industrial também estimulou o comércio internacional e o desenvolvimento de mercados globais, permitindo a circulação de bens, capitais e pessoas em escala sem precedentes. Socialmente, a Segunda Revolução Industrial provocou mudanças significativas na estrutura social e nas relações de trabalho. O crescimento das indústrias pesadas e a expansão das cidades resultaram em uma migração em massa do campo para a cidade, levando à formação de grandes centros urbanos e ao surgimento de novas classes sociais, como a classe trabalhadora industrial e a classe média. No entanto, também gerou desigualdades sociais e econômicas, com condições de trabalho desumanas, baixos salários e uma falta de proteção social para os trabalhadores. Além disso, a Segunda Revolução Industrial teve um impacto profundo no meio ambiente, com a poluição e a degradação ambiental se tornando cada vez mais graves. Em resumo, a Segunda Revolução Industrial teve um impacto transformador na sociedade e na economia global, moldando a forma como vivemos, trabalhamos e nos relacionamos até os dias de hoje.",
           
          semelhantes: semelhantes15
        },

        {
          id: 121,
          name: "Consequências Sociais e Ambientais",
          image:
            "https://i.postimg.cc/RZJc3yX8/Rev-Industrial4.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As consequências sociais e ambientais da Segunda Revolução Industrial foram significativas e multifacetadas. Em termos sociais, a rápida industrialização e urbanização resultaram em mudanças drásticas na estrutura social e nas relações de trabalho. O crescimento das indústrias pesadas e a expansão das cidades levaram a uma migração em massa do campo para a cidade, resultando na formação de grandes centros urbanos e no surgimento de uma nova classe trabalhadora industrial. No entanto, muitos trabalhadores enfrentaram condições de trabalho desumanas, baixos salários e falta de proteção social, o que levou a uma crescente conscientização e organização dos trabalhadores em sindicatos e movimentos trabalhistas. Além disso, a urbanização rápida e não planejada também levou ao surgimento de problemas sociais, como superlotação, pobreza urbana e falta de moradia adequada. Em termos ambientais, a Segunda Revolução Industrial teve um impacto devastador no meio ambiente. O uso generalizado de carvão e outras fontes de energia fóssil levou à poluição atmosférica e ao aquecimento global, enquanto o descarte inadequado de resíduos industriais contaminou rios, lagos e solos. Além disso, o desmatamento em larga escala para fornecer matéria-prima para as indústrias contribuiu para a perda de habitats naturais e a extinção de espécies. Em resumo, as consequências sociais e ambientais da Segunda Revolução Industrial foram mistas, trazendo benefícios econômicos significativos, mas também resultando em desafios sociais e ambientais que ainda enfrentamos hoje.",
           
          semelhantes: semelhantes15
        },

        {
          id: 122,
          name: "Cultura e Arte na Era Industrial",
          image:
            "https://i.postimg.cc/rmBjscLf/Rev-Industrial.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         "descricao": "Durante a Era Industrial, a cultura e a arte experimentaram mudanças significativas, refletindo os impactos da revolução tecnológica, social e econômica. A urbanização em larga escala e o crescimento das cidades trouxeram uma concentração de pessoas, ideias e recursos, criando um ambiente propício para o florescimento da cultura urbana. Na literatura, surgiram movimentos como o Realismo e o Naturalismo, que retratavam a vida cotidiana das classes trabalhadoras e exploravam temas sociais e humanos. Autores como Charles Dickens na Inglaterra e Émile Zola na França são exemplos importantes desse período. Na arte visual, o Realismo também se manifestou, com artistas retratando a vida urbana e industrial em suas obras. Além disso, houve uma reação ao movimento romântico anterior, com artistas buscando representar a realidade de forma mais objetiva e precisa. O impressionismo, com suas técnicas de pintura ao ar livre e foco na captura da luz e da cor, também se destacou nesse período. Na música, a Era Industrial viu o desenvolvimento de novos gêneros e estilos, muitos dos quais foram influenciados pelas mudanças sociais e tecnológicas. A popularização de instrumentos musicais, como o piano e a guitarra, levou ao surgimento de novas formas de música popular, enquanto compositores clássicos experimentaram com novas técnicas e formas musicais. Em resumo, a Era Industrial teve um impacto profundo na cultura e na arte, moldando novas formas de expressão e fornecendo uma rica fonte de inspiração para artistas e pensadores da época.",
           
          semelhantes: semelhantes15
        },




        {
          id: 123,
          name: "Leis Intoleráveis",
          image:
            "https://i.postimg.cc/nrng3tyf/Rev-Americana4.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "As Leis Intoleráveis, também conhecidas como Atos Intoleráveis, foram uma série de medidas punitivas impostas pelo Parlamento Britânico às colônias americanas após o Levante do Chá em Boston em 1773. Estas leis foram destinadas a punir Massachusetts por seu papel no protesto e restaurar a autoridade britânica na colônia. As Leis Intoleráveis incluíam a Lei do Porto de Boston, que fechava o porto de Boston até que os colonos pagassem pelos danos causados durante o Levante do Chá; a Lei de Governo de Massachusetts, que restringia os poderes do governo colonial e ampliava os poderes do governador britânico; a Lei de Administração de Justiça, que permitia que funcionários britânicos fossem julgados na Grã-Bretanha por crimes cometidos nas colônias; e a Lei de Quartelamento, que permitia o alojamento de soldados britânicos em casas coloniais. Estas leis foram amplamente consideradas como uma violação dos direitos coloniais e levaram a um aumento da tensão entre as colônias americanas e a Grã-Bretanha. Em resposta às Leis Intoleráveis, as Treze Colônias convocaram o Primeiro Congresso Continental em 1774 e adotaram uma série de resoluções condenando as medidas britânicas e defendendo os direitos coloniais. As Leis Intoleráveis foram um dos principais catalisadores da Revolução Americana, alimentando o sentimento anti-britânico e fortalecendo o movimento pela independência.",
          semelhantes: semelhantes15
        },
       

        {
          id: 124,
          name: "Guerra de independência",
          image:
            "https://i.postimg.cc/yYZYMm5Q/Rev-Americana2.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A Guerra de Independência Americana, também conhecida como Revolução Americana, foi um conflito armado travado entre 1775 e 1783 entre as Treze Colônias americanas e a Grã-Bretanha. Este conflito surgiu de tensões crescentes entre as colônias americanas e o governo britânico, especialmente em relação a questões de representação política, impostos injustos e restrições comerciais. A guerra começou em abril de 1775, quando as tropas britânicas confrontaram os colonos em Lexington e Concord, Massachusetts. Este confronto inicial marcou o início das hostilidades armadas e inspirou os colonos a buscar a independência da Grã-Bretanha. Ao longo dos anos seguintes, as forças americanas, lideradas por figuras como George Washington, travaram uma série de batalhas contra o exército britânico. O ponto de virada veio em 1776, quando as Treze Colônias declararam sua independência por meio da Declaração de Independência, redigida por Thomas Jefferson. A guerra continuou por mais sete anos, com os americanos recebendo apoio de nações como a França e a Espanha. Em 1781, os americanos alcançaram uma vitória decisiva na Batalha de Yorktown, levando à rendição britânica e ao reconhecimento da independência das Treze Colônias. O Tratado de Paris de 1783 formalizou a independência dos Estados Unidos da América e estabeleceu as fronteiras do novo país. A Guerra de Independência Americana teve um impacto duradouro na história mundial, inspirando movimentos de independência e revolução em todo o mundo e estabelecendo os Estados Unidos como uma potência global.",
          semelhantes: semelhantes15
        },
        {
          id: 125,
          name: "Espansao para Oeste",
          image:
            "https://i.postimg.cc/LXKrZPvX/Rev-Americana3.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "A expansão para o Oeste foi um fenômeno crucial na história dos Estados Unidos, marcando um período de rápido crescimento territorial e desenvolvimento econômico. Durante o século XIX, os Estados Unidos embarcaram em uma ambiciosa política de expansão territorial para o Oeste, buscando adquirir novos territórios e expandir sua influência além das fronteiras originais das Treze Colônias. Essa expansão foi impulsionada por uma série de fatores, incluindo o desejo de acesso a terras férteis e recursos naturais, a busca por novas oportunidades econômicas e a crença na chamada -Destino Manifesto- - a ideia de que os Estados Unidos tinham um destino divino de expandir-se pelo continente. A expansão para o Oeste ocorreu em várias fases, incluindo a aquisição da Louisiana em 1803, a compra da Flórida em 1819, a anexação do Texas em 1845 e a cessione do Oregon pela Grã-Bretanha em 1846. A expansão também foi marcada por conflitos violentos com povos indígenas nativos americanos e pela Guerra Mexicano-Americana em 1846-1848, que resultou na aquisição de vastos territórios no sudoeste. A expansão para o Oeste teve um impacto profundo na sociedade americana, transformando a nação em uma potência continental e moldando as ideias de fronteira, oportunidade e identidade nacional. No entanto, também levantou questões sobre a escravidão, os direitos dos povos indígenas e a preservação do meio ambiente, que continuaram a influenciar o desenvolvimento dos Estados Unidos até os dias de hoje.",
          semelhantes: semelhantes15
        },
        {
          id: 126,
          name: "Modelo americano",
          image:
            "https://i.postimg.cc/dQWysj5J/Rev-Americana1.jpg",
          
        
          rating: 4,
        //  timeLeft: 21,
         // totalSales: 6347 , 
         // periodo: "Idade Antiga",
         descricao: "O Modelo Americano refere-se ao sistema político, econômico e social dos Estados Unidos da América, que tem sido influente globalmente e muitas vezes considerado um exemplo para outras nações. O modelo é caracterizado por uma democracia representativa, uma economia de mercado baseada no capitalismo, e uma sociedade pluralista e diversificada. Na esfera política, os Estados Unidos adotaram um sistema de governo federal, com um governo central em Washington, D.C., e governos estaduais independentes em cada um dos cinquenta estados. O país possui uma Constituição que estabelece os princípios fundamentais do governo, incluindo a separação de poderes entre os ramos executivo, legislativo e judiciário. Na esfera econômica, os Estados Unidos são conhecidos por sua economia de mercado altamente desenvolvida, baseada na iniciativa privada, na livre concorrência e na liberdade individual de empreendimento. O país tem uma longa tradição de inovação e empreendedorismo, com um setor privado dinâmico que impulsiona o crescimento econômico e a criação de empregos. Socialmente, os Estados Unidos são uma sociedade diversificada e multicultural, com uma população composta por pessoas de diversas origens étnicas, culturais, religiosas e sociais. Embora o modelo americano tenha sido elogiado por suas realizações e aspirações democráticas, também enfrentou críticas e desafios, incluindo questões relacionadas à desigualdade social, racial e econômica, bem como preocupações com o funcionamento do sistema político e a influência do poder econômico.",
           
          semelhantes: semelhantes15
        },
       













        //revoluçao francesa
        {
          id: 50,
          name: "Assembleia dos estados gerais",
          image:
            "https://media.gettyimages.com/id/1045433726/pt/vetorial/french-revolution-the-estates-general-of-1789-was-the-first-meeting-since-1614-of-the.jpg?s=612x612&w=gi&k=20&c=akaZRkh-bpVQakYYtlr0L-_wbrpMke3idmQ5UC8sD28=",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao: "A Assembleia dos Estados Gerais foi uma instituição representativa convocada pelo rei Luís XVI durante a Revolução Francesa. Composta por representantes dos três estados - o clero, a nobreza e o terceiro estado (burguesia e camponeses) - a Assembleia dos Estados Gerais foi convocada em 1789 para lidar com a crise financeira e política enfrentada pelo governo francês. A convocação da Assembleia foi um evento significativo, pois representou uma oportunidade única para os representantes dos estados debaterem e proporem reformas para a França. No entanto, a Assembleia dos Estados Gerais rapidamente se transformou em um ponto de conflito, com o terceiro estado exigindo maior representação e poder político. Isso culminou na formação da Assembleia Nacional em 17 de junho de 1789, quando os representantes do terceiro estado declararam-se como a única autoridade legítima na França. A convocação da Assembleia dos Estados Gerais marcou o início da Revolução Francesa e sinalizou o fim do Antigo Regime na França, preparando o cenário para mudanças políticas, sociais e econômicas profundas.",
          semelhantes: semelhantes13
        }, 
        {
          id: 51,
          name: "Revolta nos campos",
          image:
            "https://media.gettyimages.com/id/1349705474/pt/vetorial/return-of-louis-xvi-from-versailles-to-paris.jpg?s=612x612&w=gi&k=20&c=E5HdVCRB-et7AYv2AwfDvPOwu2D_n7Bs3PZ_GjwZMZY=",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao: "A Revolta nos Campos foi um levante camponês que ocorreu durante a Revolução Francesa, entre 1789 e 1799. Este levante foi uma resposta dos camponeses franceses às mudanças políticas, sociais e econômicas que ocorreram durante a revolução. Os camponeses, que compunham a grande maioria da população rural da França, enfrentavam uma série de injustiças e privações antes da revolução, incluindo pesadas cargas tributárias, monopólios de terras por parte da nobreza e do clero, e falta de acesso a alimentos e recursos básicos. Durante a revolução, muitos camponeses esperavam que suas condições de vida melhorassem com a abolição dos privilégios feudais e a redistribuição das terras. No entanto, as mudanças promovidas pelos revolucionários não atenderam às expectativas dos camponeses, levando a um aumento da insatisfação e da agitação no campo. A Revolta nos Campos foi marcada por uma série de levantes e revoltas em toda a França rural, com os camponeses exigindo melhores condições de vida, o fim das práticas feudais e uma voz na política nacional. Embora a revolta tenha sido reprimida com violência pelas autoridades revolucionárias, ela demonstrou as tensões e contradições sociais que permeavam a sociedade francesa durante a Revolução Francesa e influenciaram os eventos posteriores.",
          semelhantes: semelhantes13
        }, 
        {
          id: 52,
          name: "Queda da bastilha",
          image:
            "https://i0.wp.com/paraondeir.blog/wp-content/uploads/2022/07/Queda-da-Bastilha.jpg?fit=800%2C631&ssl=1",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao: "A Queda da Bastilha, ocorrida em 14 de julho de 1789, foi um acontecimento seminal que marcou o início da Revolução Francesa e simbolizou a ascensão do povo contra a opressão monárquica e o despotismo real. A Bastilha, uma antiga fortaleza medieval e prisão política, tornou-se um ícone do regime absolutista do rei Luís XVI e do sistema feudal opressivo que governava a França. A invasão e tomada da Bastilha pelos parisienses representaram não apenas a busca por armas e munições para a revolta iminente, mas também o grito de liberdade e igualdade de uma população há muito subjugada pelo poder monárquico. Este evento histórico não foi apenas um assalto físico a uma fortaleza, mas sim um símbolo poderoso da resistência popular contra a tirania, um momento em que os cidadãos comuns se uniram para desafiar o status quo e reivindicar seus direitos fundamentais. A queda da Bastilha energizou e inspirou os revolucionários, dando-lhes uma sensação de triunfo inicial e fortalecendo sua determinação de derrubar o Antigo Regime e construir uma nova ordem baseada nos princípios da liberdade, igualdade e fraternidade. Portanto, a Queda da Bastilha é lembrada não apenas como um evento histórico, mas como um marco na luta contínua pela justiça social, pelos direitos humanos e pela democracia.",
          semelhantes: semelhantes13
        }, 
        {
          id: 53,
          name: "",
          image:
            "https://www.trabalhosescolares.net/wp-content/uploads/2008/07/revolucao_industrial_fundicao_ferro.jpg",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",

          semelhantes: semelhantes13
        }, 
        {
          id: 54,
          name: "Morte de Luis XVI",
          image:
            "https://media.gettyimages.com/id/1385734147/pt/vetorial/execution-of-louis-xvi.jpg?s=612x612&w=gi&k=20&c=UuKecwbOuCnS7bP1_5m6OHBXLUp6IP0ttGA2BO1mZdI=",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao: "A morte de Luís XVI, ocorrida em 21 de janeiro de 1793, foi um evento de profunda significância durante a Revolução Francesa, marcando um momento de ruptura decisiva na história da França. Como o último rei absoluto da monarquia francesa, Luís XVI foi julgado e condenado à morte pela Convenção Nacional, o governo revolucionário estabelecido após a abolição da monarquia. Sua execução por guilhotina na Praça da Revolução em Paris não apenas simbolizou o fim de séculos de domínio monárquico na França, mas também representou a afirmação do poder do povo sobre a autoridade real. A morte de Luís XVI foi precedida por uma série de eventos tumultuados durante a Revolução Francesa, incluindo sua prisão após a Fuga para Varennes, sua deposição como rei e a proclamação da República. Sua execução foi o clímax de um período de intensa agitação política e ideológica, quando as forças revolucionárias buscavam consolidar o domínio do movimento republicano sobre a nação. A morte de Luís XVI teve um impacto duradouro na França e na Europa, desencadeando uma onda de reações políticas e militares em todo o continente. Além disso, a execução do rei dividiu a opinião pública na França e no exterior, gerando debates acalorados sobre os limites do poder monárquico e os princípios da justiça e da legitimidade política.",
          semelhantes: semelhantes13
        }, 
        {
          id: 55,
          name: "Constituiçao de 1793",
          image:
            "https://media.gettyimages.com/id/1363994367/pt/vetorial/louis-xvi-of-france-before-the-national-assembly-on-december-26th-1792.jpg?s=612x612&w=gi&k=20&c=E9CGpDPqOrW4wVCltQmUWfZ5TgCicBbrm_oPfTU0vWM=",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao: "A Constituição de 1793, também conhecida como a Constituição do Ano I, foi um documento fundamental durante a Revolução Francesa, estabelecendo os princípios fundamentais do governo republicano na França. Aprovada pela Convenção Nacional em 24 de junho de 1793, esta constituição representou um marco na história política da França, substituindo a monarquia absoluta pela república democrática. A Constituição de 1793 foi influenciada pelos ideais da Revolução Francesa, como liberdade, igualdade e fraternidade, e estabeleceu uma estrutura de governo baseada na soberania popular e na separação de poderes. Ela previa a eleição de representantes para uma legislatura unicameral, a Convenção Nacional, que seria responsável pela tomada de decisões políticas e pela aprovação de leis. Além disso, a constituição garantia direitos civis e políticos fundamentais aos cidadãos, incluindo o direito à liberdade de expressão, liberdade de religião e o direito a um julgamento justo. No entanto, a Constituição de 1793 nunca foi plenamente implementada devido à instabilidade política e aos desafios enfrentados pela França durante a Revolução Francesa. Em 1795, foi substituída pela Constituição do Ano III, que estabeleceu o Diretório como forma de governo. Apesar de sua curta duração, a Constituição de 1793 deixou um legado duradouro, influenciando o desenvolvimento do constitucionalismo e dos direitos humanos em todo o mundo.",
          semelhantes: semelhantes13
        }, 
        {
          id: 56,
          name: "Figura 1",
          image:
            "https://www.trabalhosescolares.net/wp-content/uploads/2008/07/revolucao_industrial_fundicao_ferro.jpg",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",

          semelhantes: semelhantes13
        }, 
        {
          id: 57,
          name: "Figura 2",
          image:
            "https://www.trabalhosescolares.net/wp-content/uploads/2008/07/revolucao_industrial_fundicao_ferro.jpg",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",

          semelhantes: semelhantes13
        }, 
        {
          id: 58,
          name: "Figura 3",
          image:
            "https://www.trabalhosescolares.net/wp-content/uploads/2008/07/revolucao_industrial_fundicao_ferro.jpg",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao:"Um dos marcos mais intrigantes dessa era é a origem do uso de roupas. À medida que nossos antepassados enfrentavam desafios climáticos, desenvolveram técnicas primitivas de tecelagem e costura para criar vestimentas que não apenas os protegiam do frio, mas também simbolizavam suas identidades tribais. Essa jornada pelo tempo nos leva a refletir sobre como as raízes da civilização foram estabelecidas. Com vestígios arqueológicos, artefatos e pinturas rupestres, os arqueólogos desvendam os enigmas do passado, lançando luz sobre rituais, crenças e inovações que moldaram as bases de nossas sociedades atuais. Dentro desse contexto histórico, é fascinante comparar a evolução das antigas civilizações com narrativas contemporâneas. Um paralelo interessante pode ser traçado entre os desafios enfrentados por nossos ancestrais e as complexidades da vida moderna. Essa reflexão nos permite apreciar a trajetória da humanidade e compreender como as lições do passado continuam a ecoar em nosso presente. Além disso, à medida que exploramos o passado, é possível notar semelhanças entre diferentes épocas. Assim como capítulos de um livro, cada era contribui para a narrativa global da experiência humana. Essa compreensão mais profunda nos conecta ao legado deixado por aqueles que vieram antes de nós, inspirando uma apreciação mais rica de nossa própria jornada. Portanto, ao embarcarmos nessa viagem pelo túnel do tempo, somos convidados a questionar, aprender e apreciar as histórias que moldaram o curso da humanidade. Pois, ao compreendermos as origens, somos capacitados a moldar o futuro com sabedoria e respeito pelas lições aprendidas ao longo dos milênios.",

          semelhantes: semelhantes13
        }, 
        {
          id: 59,
          name: "O 18 de brumario",
          image:
            "https://media.gettyimages.com/id/538489182/pt/vetorial/a-13-vendemiaire-1795-bonaparte-sufocar-o-levantamento.jpg?s=2048x2048&w=gi&k=20&c=XLodg302nqYGon_tkvBb4931C77_5c_aFE1PZGxBY08=",
          //productType: "openBackHeadphones",
          //price: 170,
          //rating: 4,
          //timeLeft: 21,
          //totalSales: 6347 , 
          periodo: "Idade Moderna",
          descricao: "O 18 de Brumário foi um evento crucial na história da França durante o período revolucionário e marcou o início do governo de Napoleão Bonaparte. Ocorrido em 9 de novembro de 1799 (18 de Brumário no calendário revolucionário francês), este evento viu Napoleão Bonaparte liderar um golpe de Estado que derrubou o governo do Diretório e estabeleceu o Consulado como nova forma de governo na França. O 18 de Brumário foi precedido por anos de instabilidade política, corrupção e agitação social na França, com o Diretório lutando para manter o controle do país. Napoleão Bonaparte, um general de destaque do Exército francês, aproveitou a insatisfação popular e a divisão entre as facções políticas para consolidar seu poder e se autoproclamar Primeiro Cônsul da França. O golpe de Estado foi marcado por manobras políticas astutas, apoio militar e habilidades de liderança de Napoleão, que conseguiu garantir o controle do governo e estabelecer uma nova ordem política na França. O 18 de Brumário marcou o fim da Primeira República Francesa e o início do governo autoritário de Napoleão Bonaparte, que mais tarde se tornaria o imperador da França. Este evento teve um impacto duradouro na história da França e da Europa, inaugurando uma era de domínio napoleônico que moldaria o destino do continente nos anos seguintes.",
          semelhantes: semelhantes13,

        }, 
  ];
  export default productData;