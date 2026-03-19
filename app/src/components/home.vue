<template>
  <div class="bg-dark text-white min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark lssf-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LSSF Studios</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Termos de Uso
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" to="/termos/kittask">KitTask</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Banner Section -->
    <div class="w-100 mb-5">
      <img src="../assets/LSSF banner.png" class="img-fluid w-100" alt="Banner LSSF Studios" style="max-height: 400px; object-fit: cover;">
    </div>

    <div class="container">
      <!-- Sobre a Empresa -->
      <div class="row mb-5 text-center">
        <div class="col-md-10 offset-md-1">
          <h2 class="mb-3 fw-bold">Sobre a LSSF Studios</h2>
          <p class="lead text-muted">
            A LSSF Studios é dedicada a criar aplicativos inovadores e práticos para o seu dia a dia. Nosso foco é desenvolver soluções tecnológicas que facilitem a vida dos nossos usuários, combinando design intuitivo com alta performance.
          </p>
        </div>
      </div>

      <!-- Carrossel de Apps -->
      <div class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2 class="fw-bold text-cyan">Nossos Aplicativos</h2>
        </div>
        <div class="col-md-10 offset-md-1">
          <div id="appsCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner rounded lssf-card p-4">
              <!-- Item 1: KitTask -->
              <div class="carousel-item active">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4 d-flex justify-content-center p-3">
                    <img src="../assets/KitTask Logo App.png" class="img-fluid rounded" alt="Ícone do KitTask" style="max-width: 180px;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-start">
                      <h4 class="card-title fw-bold mb-3 lssf-card-title">KitTask</h4>
                      <p class="card-text lssf-text-muted">O KitTask é o seu assistente pessoal para organização de tarefas. Crie, gerencie e priorize suas atividades diárias com uma interface simples e intuitiva. Perfeito para aumentar sua produtividade e nunca mais esquecer um compromisso.</p>
                      <a href="https://play.google.com/store/apps/details?id=com.lssf.kitTask" class="btn btn-lssf-primary mt-2" target="_blank" rel="noopener noreferrer">Ver na Google Play</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Mais itens podem ser adicionados aqui -->
            </div>
            
            <!-- Controles do Carrossel -->
            <button class="carousel-control-prev" type="button" data-bs-target="#appsCarousel" data-bs-slide="prev" style="width: 5%;">
              <span class="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#appsCarousel" data-bs-slide="next" style="width: 5%;">
              <span class="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              <span class="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Rodapé -->
    <footer class="lssf-footer text-white text-center py-4 mt-5 border-top border-secondary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5 class="fw-bold mb-3 text-cyan">Contato</h5>
            <p class="mb-2">
              <strong>Email:</strong> <a href="mailto:contato.lssf.inc@gmail.com" class="text-white text-decoration-none hover-magenta">contato.lssf.inc@gmail.com</a>
            </p>
            <p class="mb-0">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lucas-dos-santos-francisco/" target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none hover-magenta">LSSF Studios</a>
            </p>
          </div>
        </div>
        <hr class="my-4 bg-light opacity-25">
        <p class="small mb-0 text-white-50">&copy; 2024 LSSF Studios. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Cores da Marca LSSF Studios */
:root {
  --lssf-black: #000000;
  --lssf-blue: #3b3bfa;
  --lssf-cyan: #00ffff;
  --lssf-magenta: #ff00ff;
}

.lssf-navbar {
  background-color: #000000 !important;
  border-bottom: 2px solid #3b3bfa;
  box-shadow: 0 0 10px rgba(59, 59, 250, 0.5);
}

.lssf-footer {
  background-color: #000000 !important;
  border-top: 2px solid #3b3bfa !important;
}

.text-cyan {
  color: #00ffff !important;
}

.text-magenta {
  color: #ff00ff !important;
}

.hover-magenta:hover {
  color: #ff00ff !important;
  text-shadow: 0 0 5px #ff00ff;
}

.btn-lssf-primary {
  background-color: #3b3bfa;
  border-color: #3b3bfa;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-lssf-primary:hover {
  background-color: #00ffff;
  border-color: #00ffff;
  color: #000000;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
}

.lssf-card {
  background-color: #111111 !important;
  border: 1px solid #333 !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5) !important;
}

.lssf-card-title {
  color: #00ffff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
}

.lssf-text-muted {
  color: #aaaaaa !important;
}

/* Ajustes do Carrossel para o tema escuro */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #3b3bfa !important;
  border-radius: 50%;
}
</style>

<style scoped>
.card {
  border-radius: 15px;
}
</style>