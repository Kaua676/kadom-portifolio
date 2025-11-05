window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".course-link").forEach((button) => {
    button.addEventListener("click", () => {
      const certificatePath = button.dataset.certificate;
      if (!certificatePath) return;
      window.open(certificatePath, "_blank", "noopener");
    });
  });
});
