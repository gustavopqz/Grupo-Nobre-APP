//Each funcition update article div
const article = document.getElementsByTagName('article')[0]

//Grupo Nobre APP

//Presentation
function presentation(){
    article.innerHTML = 
    `<em>Grupo Nobre APP / Apresentação</em>
    <h1>Conheça o <b class="cyan">Grupo Nobre APP</b></h1>
    <p>Este software foi desenvolvido com o objetivo facilitar acessos a todas as aplicações Grupo Nobre, hospedar API's e documentações, além de se tornar a interface de gerenciamento de outros projetos.</p>
    <p>Os idiomas utilizados foram <b>Portugues Brasileiro</b> no frontend e <b>Inglês</b> no backend.</p>
    <p>O backup do projeto se encontra no <a href="https://github.com/gustavopqz/Grupo-Nobre-APP" class="cyan">github</a>.</p>
    <h2 class="presentationSubtitle">Como utilizar este painel administrativo</h2>
    <div class="doc">
        <img src="../img/icons/app.png" alt="Grupo Nobre APP">
        <p><b class="cyan">Grupo Nobre APP</b> inclui tudo que é necessário para manutenção em geral, incluindo instruições específicas e detalhamento do esqueleto do software.</p>
    </div>
    <div class="doc" onclick="userType()">
        <img src="../img/icons/user.png" alt="Usuários">
        <p><b class="cyan">Usuários</b> inclui a listagem dos usuários, os tipos atualmente existentes, a criação de novos usuários e o funcionamento do token secreto.</p>
    </div>
    <div class="doc" onclick="integratedProjects()">
        <img src="../img/icons/share.png" alt="Projetos">
        <p><b class="cyan">Projetos integrados</b> inclui cada projeto que está ligado a este software, instruções para a utilzação e purpleirecionamentos para as áreas de gestão dos projetos.</p>
    </div>
    <div class="doc" onclick="documentations()">
        <img src="../img/icons/info.png" alt="Documentações">
        <p><b class="cyan">Documentações gerais</b> incluem projetos que não estão necessariamente atrelados ao Grupo Nobre APP mas que vão ser de grande ajuda para manutenção dos projetos vigentes.</p>
    </div>`
}

//Dependences
function dependences(){
    article.innerHTML = 
    `<em>Grupo Nobre APP / Exigências e Dependências</em>
    <h1><b class="cyan">Exigências</b> e <b class="cyan">dependências</b> gerais do projeto</h1>
    <h2>Passo a passo:</h2>
    <div class="step">
        <p>1 - Download do <b class="mark"><a href="https://nodejs.org/en/download" target="_blank">Node.js LTS</a></b></p>
        <p>2 - Download global e configuração do <b class="mark"><a href="https://www.netlify.com/" target="_blank">Netlify CLI</a></b></p>
        <p>3 - Download e configuração ou gerenciamento do MongoDB local ou neste caso <b class="mark"><a href="https://www.mongodb.com/" target="_blank">MongoDB Atlas</a></b></p>
        <p>
            4 - Instalação das dependências:
            <ul id="dependencesList">
                <li><a href="https://www.npmjs.com/package/bcryptjs" class="mark">Bcrypt.js</a></li>
                <li><a href="https://expressjs.com/pt-br/" class="mark">Express</a></li>
                <li><a href="https://mongoosejs.com/" class="mark">Mongoose</a></li>
                <li><a href="https://axios-http.com/ptbr/docs/intro" class="mark">Axios</a></li>
                <li><a href="https://www.npmjs.com/package/dotenv" class="mark">Dotenv</a></li>
            </ul>
        </p>
        <div class="code">
            <h2>Instalação do Netlify CLI</h2>
            <div class="copyCode">
                <p><b class="purple">npm install</b> netlify-cli -g</p>
                <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
            </div>
        </div>
        <div class="code">
            <h2>Instalação de dependências</h2>
            <div class="copyCode">
                <p><b class="purple">npm install</b> bcryptjs express mongoose axios dotenv</p>
                <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
            </div>
        </div>
    </div>  `
}

//Structure
function structure(){
    article.innerHTML = 
    `<em>Grupo Nobre APP / Estrutura</em>
    <h1>Conheça a <b class="cyan">estrutura</b> do projeto</h1>
    <div id="frontend">
        <h2>Frontend</h2>
        <p>Construído com <b class="purple">HTML</b>, <b class="purple">CSS</b> e <b class="purple">JAVASCRIPT</b></p>
        <p>Localizado em <b class="mark">./public</b></p>
        <p>Página home: <b class="mark">./public/index.html</b></p>
        <p>Dividido em:</p>
        <ul id="frontendList">
            <li>Páginas: <b class="mark">./public/pages</b></li>
            <li>CSS: <b class="mark">./public/pages</b></li>
            <li>Imagens: <b class="mark">./public/img</b></li>
            <li>Scripts: <b class="mark">./public/scripts</b></li>
        </ul>
    </div>
    <div id="backend">
        <h2>Backend</h2>
        <p>Construído com <b class="purple">NODE.JS</b> com funções <b class="purple">AWS Lambda</b></p>
        <p>Localizado em <b class="mark">./functions</b></p>
        <p>Cada endpoint se encontra em um arquivo diferente</p>
        <p>Bando de dados: <b class="mark">MongoDB Altas</b></p>
        <p>Link de conexão ajustado por variáveis de ambiente</p>
        <p>Models em <b class="mark">./models</b></p>
        <p>Acesso aos endpoints por meio de <b class="mark">/.netlify/functions/endpoit_name</b></p>
    </div>`
}

//Development
function development(){
    article.innerHTML = 
    `<em>Grupo Nobre APP / Ambiente de desenvolvimento</em>
    <h1>Ambiente de <b class="cyan">desenvolvimento</b> e <b class="cyan">Deploy</b></h1>
    <h2>Netlify utiliza <b class="purple">Command Line Interface</b></h2>
    <p>Todo comando é feito utilizando <b class="purple">"netlify"</b> ou <b class="purple">"ntl"</b></p>
    <div class="code">
        <h2>Verificação se Netlify encontra-se instalado</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> --version</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Iniciação de novo projeto</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> init</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Linkagem de usuário</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> login</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Visualização de todos os comandos</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> help</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Verificação das configurações do projeto</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> status</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Inicialização do ambiente de desenvolvimento</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> dev</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Controle de variáveis de ambiente</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> env</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>
    <div class="code">
        <h2>Deploy teste e deploy prodrução</h2>
        <div class="copyCode">
            <p><b class="purple">ntl</b> deploy</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
        <div class="copyCode">
            <p><b class="purple">ntl</b> deploy --prod</p>
            <img onclick="copyCode(event)" src="../img/icons/copy.png" alt="Copiar" title="Copiar">
        </div>
    </div>`
}

function userType(){
    article.innerHTML = 
    `<em>Usuários / Tipos de usuários</em>
    <h1>Conheça os tipos de <b class="cyan">usuários</b></h1>
    <ul>
        <li class="userType">
            <h2>Administrador <b class="purple">Mestre</b></h2>
            <p>Possui todas as permissões de gestão de projeto e acesso a todas as informações</p>
        </li>
        <li class="userType">
            <h2>Administrador de <b class="purple">Mapa de Salas</b></h2>
            <p>Existe tanto para <b class="cyan">UNEF</b> quanto para <b class="cyan">UNIFAN</b></p>
            <p>Um administrador <b class="cyan">UNEF</b> não tem permissão de alterar o <b class="purple">Mapa de Salas</b> <b class="cyan">UNIFAN</b> e vice versa</p>
        </li>
        <li class="userType">
            <h2>Administrador da <b class="purple">FAQ</b></h2>
            <p>Consegue adicionar novas dúvidas frequentes</p>
        </li>
    </ul>`
}

function createUserDiv(){
    article.innerHTML = 
    `<em>Usuários / Criação de usuários</em>
    <h1>Crie um novo <b class="cyan">usuário</b></h1>
    <p>O padrão para criação de novos usuários é <b class="purple">"primeiro nome"."último sobrenome"</b></p>
    <div class="create">
        <div>
            <label for="firstName"><b>Primeiro nome:</b></label>
            <input id="firstName" type="text" autocomplete="off">
        </div>
        <div>
            <label for="lastName"><b>Último sobrenome:</b></label>
            <input id="lastName" type="text" autocomplete="off">
        </div>
    </div>
    <div class="create">
        <div>
            <label for="pass"><b>Senha:</b></label>
            <input id="pass" type="password">
        </div>
        <div>
            <label for="confirmPass"><b>Confirme a senha:</b></label>
            <input id="confirmPass" type="password">
        </div>
    </div>
    <div id="permissionsDiv">
        <label for="permissions"><b class="cyan">Permissões:</b></label>
        <select name="permission" id="permissions">
            <option value="not-selected">Selecione as permissões do usuário</option>
            <option value="admin-master">Administrador Mestre</option>
            <option value="room-map-unef">Gestor de Mapa de Salas UNEF</option>
            <option value="room-map-unifan">Gestor de Mapa de Salas UNIFAN</option>
            <option value="faq">Gestor de dúvidas frequentes na FAQ</option>
        </select>
    </div>
    <div id="submitCreate">
        <button id="createUser" onclick="createUser()">Criar</button>
    </div>`
}

function listUsersDiv(){
    article.innerHTML = 
    `<em>Usuários / Listagem de usuários</em>
    <h1>Visualize todos os <b class="cyan">usuários</b></h1>
    <h2>Administradores <b class="purple">Mestres</b></h2>
    <div id="masters" class="adminDivision"></div>
    <h2>Administradores <b class="purple">Mapa de Salas UNEF</b></h2>
    <div id="room-map-unef" class="adminDivision"></div>
    <h2>Administradores <b class="purple">Mapa de Salas UNIFAN</b></h2>
    <div id="room-map-unifan" class="adminDivision"></div>
    <h2>Administradores <b class="purple">FAQ</b></h2>
    <div id="faq" class="adminDivision"></div>`
    
    //For each user do...
    getUsers.forEach(user => {
        const newCard = document.createElement('div')      
        newCard.setAttribute('class', 'userCard')

        //Generate card
        newCard.innerHTML =
        `<h2>${user.username}</h2>
        <div class="info">
            <h5><b class="purple">Usuário:</b></h5>
            <p>${user.login}</p>
        </div>
        <div class="info">
            <h5><b class="purple">Criado por:</b></h5>
            <p>${user.criador}</p>
        </div>
        <div class="info">
            <h5><b class="purple">Criado em:</b></h5>
            <p>${user.criacao}</p>
        </div>
        <div class="delete">
            <button class="deleteUser" onclick="deleteUser(event)">Deletar usuário</button>
        </div>`

        if(user.permissions == 'admin-master'){
            document.getElementById('masters').appendChild(newCard)
        }else if(user.permissions == 'room-map-unef'){
            document.getElementById('room-map-unef').appendChild(newCard)
        }else if(user.permissions == 'room-map-unifan'){
            document.getElementById('room-map-unifan').appendChild(newCard)
        }else if(user.permissions == 'faq'){
            document.getElementById('faq').appendChild(newCard)
        }
    })
}

function token(){
    article.innerHTML = 
    `<em>Usuários / Token</em>
    <h1>Saiba mais sobre o <b class="cyan">Token de autenticação</b></h1>
    <p>Cada tipo de usuário utiliza um <b class="cyan">token</b> diferente</p>
    <p>O token de <b class="purple">Administrador Mestre</b> pode ser utilizado em <b class="purple">todas as aplicações deste projeto</b></p>
    <p>Os <b class="cyan">tokens</b> ficam registrados em <b class="purple">variáveis de ambiente</b></p>
    <p>Quando o login é efetuado, uma <b class="cyan">hash do token</b> é gerada dinamicamente e enviada ao usuário</p>
    <p>Para saber mais sobre a geração dinâmica do token acesso <b class="mark">./functions/login</b></p>
    <p>A única página que utiliza o token para visualização geral é o <b class="purple">painel administrativo</b></p>
    <p>Além desta funcionalidade, tokens são verficados para tentativa de acesso/alteração no <b class="purple">banco de dados</b></p>`
}

function integratedProjects(){
    article.innerHTML = 
    `<em>Projetos integrados / Apresentação</em>
    <h1>Conheça os <b class="cyan">Projetos Integrados</b> ao Grupo Nobre APP</h1>
    <p>Nesta seção encontrará a documentação dos projetos que estão diretamente ligados ao <b class="purple">Grupo Nobre APP</b></p>
    <p>Todos os <b class="cyan">paineis administrativos</b> destes projetos se encontram no <b class="purple">Grupo Nobre APP</b></p>
    <p>Alguns destes projetos tem sua <b class="cyan">versão cliente</b> hospedada no <b class="purple">servidor VPS Hostgator</b> do Grupo Nobre</p>
    <p>Projetos que consomem API's do <b class="cyan">Grupo Nobre APP</b> foram testados antes de serem hospedados na <b class="purple">Hostgator</b></p>
    <h2 class="cyan">Banco de dados</h2>
    <p>O banco de dados para estes projetos está em cloud com <b class="mark"><a href="https://mongodb.com/">MongoDB Atlas</a></b></p>
    <p>O login de acesso é <b class="cyan">ti@gruponobre.edu.br</b> e a <b class="cyan">senha corporativa</b></p>
    <p>Cada projeto possui uma <b class="purple">collection</b> situada no mesmo <b class="purple">cluster</b></p>`
}

function virtualLibrary(){
    article.innerHTML =
    `<em>Projetos integrados / Biblioteca Virtual</em>
    <h1>Conheça os endpoints de integração com a <b class="cyan">Biblioteca Virtual</b></h1>
    <p>Estes endpoints foram criados com o objetivo de integrar a <b class="purple">criação de novos usuários</b> na bilbioteca virtual e na solicitação de <b class="purple">url autenticada</b> para o aluno que efetuar acesso</p>
    <p>A estrutura destes endpointes são iguais para <b class="cyan">UNEF</b> e para a <b class="cyan">UNIFAN</b>, a única diferença é a chave secreta que vai no header da requisição</p>
    <p>Estes endpoints consomem a <b class="cyan">API</b> da <b class="purple">Biblioteca Virtual</b></p>
    <p>Podem ser chamados em qualquer projetos, passando os <b class="purple">dados necessários</b></p>
    <p>Os dados que devem ser enviados no <b class="purple">Body da requisição</b> são: <b class="cyan">Primeiro nome do aluno, último nome do aluno e registro acadêmico do aluno</b></p>
    <p>O endpoint trata de montar a requisição com estes dados da forma que a <b class="purple">Bilbioteca Virtual</b> solicita</p>
    <h2 class="purple">Localização</h2>
    <p><b class="mark">./functions/bibli_unef.js</b> e <b class="mark">./functions/bibli_fan.js</b></p>`
}

function roomMap(){
    article.innerHTML = 
    `<em>Projetos integrados / Mapa de salas</em>
    <h1>Conheça o <b class="cyan">Mapa de Salas</b></h1>
    <p>Este projeto foi criado para que os alunos possam saber <b class="purple">onde será ministrada suas aulas</b> e <b class="purple">quais os horários.</b></p>

    <h2 class="cyan">UNEF</h2>
    <h3 class="purple">Localização</h3>
    <p>Painel administrativo em <b class="mark"><a href="https://home.gruponobre.edu.br/pages/mapa-admin-unef">https://home.gruponobre.edu.br/pages/mapa-admin-unef</a></b></p>
    <p>Página cliente em <b class="mark"><a href="https://mapa.unef.edu.br/">https://mapa.unef.edu.br/</a></b></p>
    <h3 class="purple">Manutenção do Frontend</h3>
    <h4 class="purple">Administrativo</h4>
    <p>
        <b class="mark">./public/pages/mapa-admin-unef.html</b><br>
        <b class="mark">./public/css/map</b><br>
        <b class="mark">./public/scripts/map</b><br>
    </p>
    <h4 class="purple">Cliente</h4>
    <p>Gerenciador de arquivos <b class="purple">Hostagor</b></p>
    <h3 class="purple">Manutenção do Backend</h3>
    <p>Para gerar o mapa completo com base em um arquivo xlsx (excel) é necessário utilizar o <b class="purple" style="text-decoration: underline;">software de ETL em Python</b> com a leitura do arquivo e construção das requisições que serão enviadas para <b class="mark">./functions/create_map_unef.js</b></p>
    <p>Para gerar disciplinas as requisições são feitas em <b class="mark">./functions/create_discipline.js</b></p>
    <p>Para leitura das disciplinas no banco é utilizado o endpoint <b class="mark">./functions/search_disciplines.js</b></p>
    <p>Update de disciplinas em <b class="mark">./functions/update_disciple.js</b></p>
    <p>Exclusão de disciplina em <b class="mark">./function/update_discipline.js</b></p>

    <h2 class="cyan">UNIFAN</h2>
    <h3 class="purple">Localização</h3>
    <p>Painel administrativo em <b class="mark"><a href="https://home.gruponobre.edu.br/pages/mapa-admin-unifan">https://home.gruponobre.edu.br/pages/mapa-admin-unifan</a></b></p>
    <p>Página cliente em <b class="mark"><a href="https://mapa.unifan.net.br/">https://mapa.unifan.net.br/</a></b></p>
    <h3 class="purple">Manutenção do Frontend</h3>
    <h4 class="purple">Administrativo</h4>
    <p>
        <b class="mark">./public/pages/mapa-admin-unifan.html</b><br>
        <b class="mark">./public/css/map-unfan</b><br>
        <b class="mark">./public/scripts/map-unifan</b><br>
    </p>
    <h4 class="purple">Cliente</h4>
    <p>Gerenciador de arquivos <b class="purple">Hostagor</b></p>
    <h3 class="purple">Manutenção do Backend</h3>
    <p>Para gerar o mapa completo com base em um arquivo xlsx (excel) é necessário utilizar o <b class="purple" style="text-decoration: underline;">software de ETL em Python</b> com a leitura do arquivo e construção das requisições que serão enviadas para <b class="mark">./functions/create_map_unifan.js</b></p>
    <p>Para gerar disciplinas as requisições são feitas em <b class="mark">./functions/create_discipline_unifan.js</b></p>
    <p>Para leitura das disciplinas no banco é utilizado o endpoint <b class="mark">./functions/search_discipline_unifans.js</b></p>
    <p>Update de disciplinas em <b class="mark">./functions/update_discipline_unifan.js</b></p>
    <p>Exclusão de disciplina em <b class="mark">./function/update_discipline_unifan.js</b></p>`
}

function faq(){
    article.innerHTML=
    `<em>Projetos integrados / FAQ</em>
    <h1>Conheça a nossa <b class="cyan">Base de Conhecimento</b></h1>
    <p>Comumente ulilizada pelo <b class="purple">call center</b></p>
    <p>Base ulilizada para acesso rápido a <b class="purple">informações e perguntas</b> que são respondidas com frequência</p>
    <p>Tanto a página administrativa quanto a página cliente estão hospedadas no <b class="cyan">Grupo Nobre APP</b></p>
    <h2 class="cyan">Manutenção do Frontend</h2>
    <p><b class="mark">./public/pages/faq.html</b> e <b class="mark">./public/pages/faq-admin.html</b></p>
    <p><b class="mark">./public/css/faq</b></p>
    <p><b class="mark">./public/scripts/faq</b></p>
    <h2 class="cyan">Manutenção do Backend</h2>
    <p>Para criar uma nova pergunta respondida <b class="mark">./functions/create_question</b></p>
    <p>Para ler as perguntas cadastradas <b class="mark">./functions/search_question</b> - OBS: Este endpoint <b class="purple">exige que o tema seja enviado na requisição</b> para pesquisa somente das perguntas daquele tema</p>`
}

function documentations(){
    article.innerHTML =
    `<em>Documentações gerais / Apresentação</em>
    <h1>Visualize a documentação de <b class="cyan">Projetos Grupo Nobre</b></h1>
    <p>Nesta seção você poderá visualizar a <b class="cyan">documentação de diversos projetos</b> em vigência no Grupo Nobre</p>
    <div class="doc" onclick="searchRA()">
        <img src="../img/icons/bookmark.png" alt="Consulta RA">
        <p><b class="cyan">Consulta de RA</b> - Colégio Nobre</p>
    </div>`
}

function searchRA(){
    article.innerHTML =
    `<em>Documentações gerais / Consulta de RA</em>
    <h1><b class="cyan">Consulta de RA</b> - Colégio Nobre</h1>
    <p>Este software foi desenvolvido para que os alunos do Colégio Nobre que não lembram seu RA possam consultar</p>
    <p><b class="purple">Dados necessários</b> para a consulta: <b class="purple">CPF</b> e <b class="purple">Data de Nascimento</b></p>
    <h2 class="purple">Localização</h2>
    <p>A única página necessária estar em funcionamento é de <b class="purple">cliente</b></p>
    <p>Hospedada na <b class="purple">Hostgator</b> em <b class="mark"><a href="https://consulta.colegionobre.com.br/">https://consulta.colegionobre.com.br/</a></b></p>
    <h2 class="purple">Manutenção do backend</h2>
    <p>Para coletar os dados de cadatro dos alunos é necessário realizar uma query no <b class="purple">banco de dados</b> do <b class="cyan">RM</b></p>
    <p>A execução do processo de insert no <b class="purple">MongoDB</b> para que possa ser solicitado pelo aluno é feita por meio de uma <b class="purple">ferramenta de ETL em Python</b></p>
    <p>Os endpoints da API deste projetos estão em <b class="mark">./functions/create_school_student.js</b> e <b class="mark">./functions/search_school_student.js</b></p>`
}