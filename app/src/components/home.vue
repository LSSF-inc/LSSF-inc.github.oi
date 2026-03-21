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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Termos de Uso
              </a>
              <ul class="dropdown-menu dropdown-menu-dark glass-dropdown" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" to="/termos/kittask">KitTask</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="hero-section text-center d-flex align-items-center justify-content-center flex-column">
      <div class="container">
        <h1 class="display-2 fw-bolder mb-3 text-gradient">Inovação no seu dia a dia.</h1>
        <p class="lead text-secondary mb-5 fs-4" style="max-width: 700px; margin: 0 auto;">
          Soluções tecnológicas que combinam design intuitivo com alta performance.
        </p>
        <div class="hero-image-wrapper mx-auto shadow-lg">
          <img src="../assets/LSSF banner.png" class="img-fluid hero-img" alt="Banner LSSF Studios">
        </div>
      </div>
    </section>

    <div class="container py-5">
      <div class="row my-5 pt-5">
        <div class="col-12 text-center mb-5">
          <h2 class="display-5 fw-bold text-white">Nossos Aplicativos</h2>
        </div>
        <div class="col-md-10 offset-md-1">
          <div id="appsCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner site-card p-4 p-md-5">
              <div class="carousel-item active">
                <div class="row g-0 align-items-center">
                  <div class="col-md-5 d-flex justify-content-center p-4">
                    <img src="../assets/KitTask Logo App.png" class="img-fluid app-icon shadow" alt="Ícone do KitTask">
                  </div>
                  <div class="col-md-7 p-4">
                    <div class="text-start">
                      <h3 class="fw-bolder mb-3 text-gradient-cyan display-6">KitTask</h3>
                      <p class="fs-5 text-secondary mb-4 lh-base">
                        O seu assistente pessoal para organização de tarefas. Crie, gerencie e priorize suas atividades diárias com uma interface incrivelmente simples.
                      </p>
                      <a href="https://play.google.com/store/apps/details?id=com.lssf.kitTask" class="btn btn-site-primary rounded-pill px-4 py-2 fs-5" target="_blank" rel="noopener noreferrer">
                        Ver na Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer text-center py-5 mt-5">
      <div class="container">
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
</template>

<script>
export default {
  name: 'Home',
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

.hero-section {
  padding-top: 120px;
  padding-bottom: 60px;
}

.hero-image-wrapper {
  max-width: 900px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(59, 59, 250, 0.15) !important;
  transform: translateY(0);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.hero-image-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 255, 255, 0.2) !important;
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
}

.site-card {
  background: #0a0a0a;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
}

.site-card:hover {
  border-color: rgba(59, 59, 250, 0.3);
  box-shadow: 0 15px 40px rgba(59, 59, 250, 0.1);
}

.app-icon {
  max-width: 200px;
  border-radius: 22.5%;
  transition: transform 0.3s ease;
}

.app-icon:hover {
  transform: scale(1.05);
}

.btn-site-primary {
  background-color: #f5f5f7;
  color: #000000;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
}

.btn-site-primary:hover {
  background-color: #00ffff;
  color: #000000;
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.site-footer {
  background-color: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.transition-all {
  transition: all 0.3s ease;
}

.hover-white:hover {
  color: #ffffff !important;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>