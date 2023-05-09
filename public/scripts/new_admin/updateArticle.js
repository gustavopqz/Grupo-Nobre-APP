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
    <div class="doc">
        <img src="../img/icons/user.png" alt="Usuários">
        <p><b class="cyan">Usuários</b> inclui a listagem dos usuários, os tipos atualmente existentes, a criação de novos usuários e o funcionamento do token secreto.</p>
    </div>
    <div class="doc">
        <img src="../img/icons/share.png" alt="Projetos">
        <p><b class="cyan">Projetos integrados</b> inclui cada projeto que está ligado a este software, instruções para a utilzação e purpleirecionamentos para as áreas de gestão dos projetos.</p>
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