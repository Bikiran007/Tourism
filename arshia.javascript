<p id="greeting"></p>
<script>
  const greetingEl = document.getElementById('greeting');
  const hour = new Date().getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning! Explore the beauty of Kashmir.";
  } else if (hour < 18) {
    greeting = "Good afternoon! Discover Kashmir’s natural wonders.";
  } else {
    greeting = "Good evening! Unwind in the serenity of Kashmir.";
  }

  greetingEl.textContent = greeting;
</script>
<div class="slider">
  <img id="slider-img" src="kashmir1.jpg" alt="Kashmir View" width="100%" height="400">
</div>

<script>
  const images = ["kashmir1.jpg", "kashmir2.jpg", "kashmir3.jpg"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slider-img").src = images[index];
  }, 3000);
</script>
<nav>
  <a href="#about" class="nav-link">About</a>
  <a href="#places" class="nav-link">Places</a>
  <a href="#contact" class="nav-link">Contact</a>
</nav>

<script>
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
</script>
<section class="hidden-section">...Your Content...</section>

<style>
  .hidden-section {
    opacity: 0;
    transform: translateY(50px);
    transition: 1s ease;
  }
  .show {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<script>
  const sections = document.querySelectorAll('.hidden-section');
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.classList.add('show');
      }
    });
  });
</script>
<p id="today-date"></p>

<script>
  const dateEl = document.getElementById("today-date");
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString("en-IN", options);
  dateEl.textContent = `Today in Kashmir: ${today}`;
</script>



