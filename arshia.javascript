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

