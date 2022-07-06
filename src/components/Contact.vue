<template>
  <form action="inc/traitContact.php" method="post" name="contact" class="contact-form">

    <label for="name">Nom :</label>
    <input type="text" name="name" value="" class="input-form">

    <br>

    <label for="surname">Prénom :</label>
    <input type="text" name="surname" value="" class="input-form">

    <br>

    <label for="email">Email :</label>
    <input type="text" name="email" value="" class="input-form">

    <input type="text" name="content" value="" class="input-form" id="textbox">

    <br>

    <input type="submit" value="Envoyer" class="input-form"/>

  </form>
</template>

<script>
export default {
  name: "Contact-Page"
}
</script>

<style scoped src="../css/contact.css"></style>