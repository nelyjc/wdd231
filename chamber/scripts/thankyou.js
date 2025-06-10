<script>
  const params = new URLSearchParams(window.location.search);
  document.body.innerHTML += `
    <section class="submitted-data">
      <h2>Thanks for joining, ${params.get("firstName")} ${params.get("lastName")}!</h2>
      <p>We’ve received your application for the <strong>${params.get("membership")}</strong> membership.</p>
      <p>We will contact you at ${params.get("email")} or ${params.get("phone")}.</p>
    </section>
  `;
</script>
