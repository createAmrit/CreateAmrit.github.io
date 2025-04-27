document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById("hit-me");
  const heart = document.getElementById("heart");
  const message = document.getElementById("message");

  heart.addEventListener("click", () => {
    // Show the message with a smooth transition
    message.classList.remove("hidden");
    message.classList.add("visible");
  });

  button.addEventListener("click", () => {
    // Show the message with a smooth transition
    message.classList.remove("hidden");
    message.classList.add("visible");

    // Display an alert with a sweet message
    alert("Ab apko acha lagega, mujhe pata hai! ❤️");
  });

  // Add a hover effect for fun
  heart.addEventListener('mouseover', () => {
    heart.style.backgroundColor = 'pink';
  });

  heart.addEventListener('mouseout', () => {
    heart.style.backgroundColor = '#ff4e50'; // originally red tone
  });
});
