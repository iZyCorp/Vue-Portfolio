<template>

  <section class="common-top-title">
    <p class="big_text">Me contacter</p>
  </section>

  <section class="common-section">

    <div id="contact-section">

      <div>
        <p class="common-section-paragraph">
          <strong>Téléphone:</strong> 06 48 06 96 47
        </p>

        <p class="common-section-paragraph">
          <strong>Email:</strong> arnaud.sapet@gmail.com
        </p>

      </div>


      <div>

        <form>
          <input type="email" placeholder="Adresse mail">
          <input type="text" placeholder="Objet">
          <textarea placeholder="Message"></textarea>
          <button type="submit" disabled="disabled">Envoyer</button>
        </form>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "Contact-Page"
}
</script>

<style scoped src="../css/contact.css"/>