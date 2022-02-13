<template>
  <div class="contact mt-16">
    <v-row no-gutters justify="center">
      <h1 class="contact__header">Contact Spencer Krips</h1>
    </v-row>
    <form class="contact__form my-6 mx-auto" @submit.prevent="sendEmail">
      <v-row no-gutters class="mb-5">
        <input
          placeholder="Name *"
          required
          name="form_name"
          type="text"
          class="contact__form--input px-2"
        />
      </v-row>
      <v-row no-gutters class="mb-5">
        <input
          placeholder="Email *"
          required
          name="form_email"
          type="email"
          class="contact__form--input px-2"
        />
      </v-row>
      <v-row no-gutters class="mb-5">
        <input
          placeholder="Subject"
          name="form_subject"
          type="text"
          class="contact__form--input px-2"
        />
      </v-row>
      <v-row no-gutters class="mb-5">
        <textarea
          placeholder="Message *"
          name="form_message"
          rows="6"
          required
          class="contact__form--message pa-2"
        />
      </v-row>
      <v-row no-gutters>
        <button type="submit" class="contact__form--button">Send message</button>
      </v-row>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import emailjs from "emailjs-com";

export default Vue.extend({
  name: "Contact",
  data() {
    const defaultForm = Object.freeze({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.name &&
        this.form.email &&
        /.+@.+/.test(this.form.email) &&
        this.form.message
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    sendEmail(e) {
      emailjs.sendForm("service", "template", e.target, "user").then(
        (result) => {
          alert("Message Sent!");
          this.resetForm();
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          alert("There was a problem sending your message, please try again");
          console.log("FAILED...", error);
        }
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.contact {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;

  &__header {
    color: white;
    font: normal normal normal 60px raleway, sans-serif;
  }

  &__form {
    width: 100%;
    max-width: 600px;

    &--input,
    &--message,
    &--button {
      background: transparent;
      border: 2px solid #8a4d58;
      color: white;
      font-size: 16px;

      &::placeholder {
        color: white;
        font-size: 16px;
        font-family: "Roboto", serif;
      }
    }

    &--input {
      height: 50px;
      width: 600px;
    }

    &--message {
      width: 600px;
    }

    &--button {
      width: 600px;
      height: 50px;
      text-transform: uppercase;
      cursor: pointer;
      background-color: #8a4d58;

      &:active {
        background: #8a4d58 radial-gradient(circle, transparent 40%, #a86b76 1%)
          center/15000%;
      }
    }
  }
}
</style>
