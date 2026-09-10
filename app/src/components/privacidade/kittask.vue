<template>
  <div class="site-dark-theme min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top glass-nav">
      <div class="container">
        <a class="navbar-brand fw-bold fs-4 text-gradient" href="#">LSSF Studios</a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Início</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Termos de Uso
              </a>
              <ul class="dropdown-menu dropdown-menu-dark glass-dropdown" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" to="/termos/kittask">KitTask</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Política de Privacidade
              </a>
              <ul class="dropdown-menu dropdown-menu-dark glass-dropdown" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" to="/privacidade/kittask">KitTask</router-link></li>
              </ul>
            </li> 
          </ul>
          </div>
        </div>
    </nav>

    <div class="container mt-5 mb-5 pt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center mb-4">Política de Privacidade</h1>

          <p class="meta">Aplicativo: KitTask · Desenvolvedor: Lucas Dos Santos Francisco (LSSF Studios) · Última atualização: 10 de setembro de 2026</p>
        
          <p>Esta Política de Privacidade descreve como o KitTask (&ldquo;Aplicativo&rdquo;), desenvolvido por Lucas Dos Santos Francisco (&ldquo;Provedor de Serviços&rdquo;, &ldquo;nós&rdquo;), acessa, coleta, usa e compartilha dados do usuário. Ao usar o Aplicativo, você concorda com a coleta e uso de informações de acordo com esta política.</p>
        
          <p>Se você tiver dúvidas ou sugestões sobre esta Política de Privacidade, entre em contato conosco pelo e-mail <a href="mailto:suportlssfapp@gmail.com">suportlssfapp@gmail.com</a>.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Dados que coletamos</h2>
        
          <p><strong style="color: var(--text-strong);">Dados fornecidos diretamente por você.</strong> Ao criar uma conta no KitTask, coletamos:</p>
          <ul>
            <li>Nome</li>
            <li>Endereço de e-mail</li>
            <li>Senha (armazenada de forma criptografada)</li>
            <li>Dados de tarefas que você cria dentro do Aplicativo (título, descrição, status, histórico)</li>
          </ul>
        
          <p><strong style="color: var(--text-strong);">Dados coletados automaticamente.</strong></p>
          <ul>
            <li><strong>Dados de uso:</strong> telas acessadas, funcionalidades utilizadas, tempo de uso, interações dentro do Aplicativo.</li>
            <li><strong>Dados do dispositivo:</strong> modelo do dispositivo, sistema operacional e versão, identificador de instalação do app.</li>
            <li><strong>Identificador de publicidade (Advertising ID):</strong> usado para exibição de anúncios personalizados via Google AdMob.</li>
            <li><strong>Dados de falhas (crash data):</strong> relatórios técnicos gerados automaticamente quando o Aplicativo encontra um erro, incluindo stack trace e estado do dispositivo no momento da falha.</li>
          </ul>
        
          <p>Não associamos identificadores persistentes do dispositivo (como IMEI, IMSI ou número de série do SIM) a dados pessoais ou a identificadores redefiníveis, em conformidade com a política de Dados do Usuário do Google Play.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Como usamos seus dados</h2>
          <p>Usamos os dados coletados para:</p>
          <ul>
            <li>Criar e gerenciar sua conta no KitTask;</li>
            <li>Fornecer e manter as funcionalidades principais do Aplicativo (gerenciamento de tarefas);</li>
            <li>Exibir anúncios, quando aplicável;</li>
            <li>Entender como o Aplicativo é usado, para melhorá-lo;</li>
            <li>Identificar e corrigir falhas técnicas;</li>
            <li>Comunicar atualizações importantes sobre o Aplicativo, quando necessário.</li>
          </ul>
          <p>Não vendemos seus dados pessoais a terceiros, sob nenhuma circunstância.</p>
          <hr class="my-5 border-secondary opacity-25">
        
          <h2>Compartilhamento de dados com terceiros</h2>
          <p>O KitTask utiliza os seguintes serviços de terceiros, que podem coletar informações de acordo com suas próprias políticas de privacidade:</p>


          <table>
            <thead>
              <tr><th>Serviço</th><th>Finalidade</th><th>Política</th></tr>
            </thead>
            <tbody>
              <tr><td>Google Play Services</td><td>Infraestrutura e autenticação</td><td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Ver política</a></td></tr>
              <tr><td>Google AdMob</td><td>Exibição de anúncios</td><td><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener">Ver política</a></td></tr>
              <tr><td>Google Analytics para Firebase</td><td>Análise de uso do app</td><td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Ver política</a></td></tr>
              <tr><td>Firebase Crashlytics</td><td>Relatório de falhas</td><td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Ver política</a></td></tr>
            </tbody>
          </table>
        
          <hr class="my-5 border-secondary opacity-25">
          <p>Podemos também compartilhar dados quando exigido por lei, para cumprir um processo legal válido, ou como parte de uma eventual fusão, aquisição ou venda de ativos — sempre com aviso adequado aos usuários quando legalmente exigido.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Segurança dos dados</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia de dados em trânsito (HTTPS/TLS), armazenamento seguro de senhas (hash, nunca em texto plano) e controle de acesso restrito aos dados armazenados.</p>
          <p>Apesar dos nossos esforços, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro. Não podemos garantir segurança absoluta.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Retenção de dados</h2>
          <p>Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Dados de conta são mantidos enquanto sua conta estiver ativa.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Exclusão de conta e dados</h2>
          <p>Você pode solicitar a exclusão da sua conta e dos dados associados a qualquer momento:</p>
          <ul>
            <li><strong>Dentro do Aplicativo:</strong> acesse Perfil → Configurações → Excluir conta e confirme a solicitação.</li>
            <li><strong>Fora do Aplicativo:</strong> acesse nossa <a href="/delete-account">página de exclusão de conta</a>.</li>
          </ul>
          <p>Após a solicitação, todos os dados pessoais associados à sua conta serão permanentemente excluídos de nossos sistemas em até 30 dias, exceto informações que sejamos legalmente obrigados a reter (por exemplo, para fins de segurança, prevenção de fraude ou cumprimento regulatório), mantidas apenas pelo tempo estritamente necessário.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Seus direitos</h2>
          <p>Dependendo da sua localização, você pode ter direito a acessar os dados pessoais que temos sobre você, corrigir dados incorretos ou desatualizados, solicitar a exclusão dos seus dados e retirar o consentimento para o uso dos seus dados, quando aplicável. Para exercer qualquer um desses direitos, entre em contato pelo e-mail informado abaixo.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Crianças</h2>
          <p>O KitTask não é direcionado a menores de 13 anos e não coletamos intencionalmente dados pessoais de crianças. Se você é pai/responsável e acredita que seu filho nos forneceu dados pessoais, entre em contato para que possamos removê-los.</p>
          <hr class="my-5 border-secondary opacity-25">

          <h2>Alterações a esta Política de Privacidade</h2>
          <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova versão nesta página, com a data de atualização revisada no topo do documento. Recomendamos revisar esta página regularmente.</p>
          <hr class="my-5 border-secondary opacity-25">
          
          <h5 class="mt-4"><strong>Contate-nos</strong></h5>
          <p>Caso tenha dúvidas ou sugestões sobre os Termos e Condições, não hesite em entrar em contato com o Prestador de Serviços pelo e-mail <a href="mailto:suportlssfapp@gmail.com">suportlssfapp@gmail.com</a>.</p>

        </div>
      </div>
      <footer class="site-footer text-center py-5 mt-5">
      <div class="container">
        <hr class="my-5 border-secondary opacity-25">
        <div class="row">
          <div class="col-12">
            <h5 class="fw-bold mb-4 text-white">Contato</h5>
            <p class="mb-2 fs-5">
              <a href="mailto:contato.lssf.inc@gmail.com" class="text-secondary text-decoration-none hover-white transition-all">contato.lssf.inc@gmail.com</a>
            </p>
            <p class="mb-0 fs-5">
              <a href="https://www.linkedin.com/in/lucas-dos-santos-francisco/" target="_blank" rel="noopener noreferrer" class="text-secondary text-decoration-none hover-white transition-all">LinkedIn: LSSF Studios</a>
            </p>
          </div>
        </div>
        <hr class="my-5 border-secondary opacity-25">
        <p class="small mb-0 text-secondary">&copy; 2024 LSSF Studios. Todos os direitos reservados.</p>
      </div>
    </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KitTaskprivacy',
};
</script>

<style scoped>
.site-dark-theme {
  background-color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}

.glass-nav {
  background: rgba(0, 0, 0, 0.65) !important;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.glass-dropdown {
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.text-gradient {
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-cyan {
  background: linear-gradient(90deg, #00ffff, #3b3bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>