<template>
  <main class="v-mail-signature-generator fp-page">
    <div class="fp-grid-coll-container fp-grid-coll-container--center">
      <div class="fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter">
        <h1>Générateur de&nbsp;signature mail Filogie</h1>

        <form
            class="v-mail-signature-generator__content fp-ui-form"
        >
          <input type="text" placeholder="prénom"   v-model="firstname">
          <input type="text" placeholder="nom"      v-model="name">
          <input type="text" placeholder="fonction" v-model="activity" >
          <input type="text" placeholder="email"   v-model="email" >
        </form>

        <div
            @click="copySignatureInClipBoard"
            class="v-mail-signature-generator__container"
        >
          <div
              dir="ltr"
              ref="htmlContent"
              style="width: 100%"
          >
            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
                   style="border-collapse: collapse !important; width: auto;">
              <tr>
                <td style="vertical-align: top;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">

                  </table>
                </td>
                <td style="vertical-align: top;">

                    <p style="text-align: left; margin: 0; margin-bottom: 10px;">
                      <img
                              alt="logo Filogie"
                              height="39"
                              width="122"
                              style="height: 39px; width: 122px; display: block"
                              src="https://studio-guez.github.io/filogie.signature/logo.png"
                      />
                    </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; font-weight: bold;"
                  >
                    {{getCleanedEmptyString(firstname, 'prénom')}} {{getCleanedEmptyString(name, '/ nom')}}
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; line-height: 18px;"
                  >
                    {{getCleanedEmptyString(activity, 'fonction')}}
                    <br>
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; line-height: 18px; font-weight: bold;"
                  >
                    Fondation Filogie
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; line-height: 18px;"
                  >
                    Route de la Galaise 17
                    <br>1003 Plan-les-Ouates
                    <br>
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; line-height: 18px;"
                  >
                    <a :href="'mailto:' + email"
                       target="_blank"
                       style="color: #000; text-decoration: underline;"
                    >
                       {{getCleanedEmptyString(email, 'email')}}
                    </a>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; line-height: 18px;">
                    <a id="websiteLink"
                       target="_blank"
                       style="color: #000; text-decoration: underline;"
                       href="https://filogie.ch/"
                    >filogie.ch</a></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <button
            @click="copySignatureInClipBoard"
            class="fc-button"
        >Selectionner le texte de signature</button>

          <p
                  style="padding-top: 1rem"
                  class="fp-text-small" >
              Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre
              outil de messagerie mail, dans les paramètres de signatures automatiques.
          </p>

        <div class="v-mail-signature-generator__code-viewer"
        >
          <button @click="showCode = !showCode"
                  class="fc-button--small"
                  style="
                    background: black;
                    margin-bottom: 1rem;
                  "
          >voir le code</button>

          <textarea style="font-size: 12px; line-height: 14px"
                    readonly
                    v-if="showCode"
          ></textarea>
        </div>

      </div>

    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({

  data() {
    return {
      firstname: '',
      name: '',
      activity: '',
      email: '',
      showCode: false,
    }
  },

    methods: {
    copySignatureInClipBoard() {
      /* Get the text field */
      const htmlContentToCopy = this.$refs.htmlContent;

      if(!( htmlContentToCopy instanceof HTMLElement)) return

      const selection = window.getSelection()
      const range = document.createRange()

      range.selectNodeContents(htmlContentToCopy)

      if(! selection) return
      selection.removeAllRanges()
      selection.addRange(range)

      // todo: other methode to implement
      // function setClipboard(text) {
      //   const type = "text/html";
      //   const blob = new Blob(['<h1>'+text+'</h1>'], { type });
      //   const data = [new ClipboardItem({ [type]: blob })];
      //
      //   navigator.clipboard.write(data).then(
      //       function () {
      //         /* success */
      //         console.log('succcess')
      //       },
      //       function (e) {
      //         /* failure */
      //         console.log('failed')
      //         console.log(e)
      //       }
      //   );
      // }

    },

    getCleanedEmptyString(value: string, placeholder: string):string {
      if(value.length > 0) return value
      return placeholder + ' doit être rempli'
    }
  },

})</script>

<style lang="scss" scoped>

h1 {
  font-size: 3rem;
  line-height: 1em;
}

.v-mail-signature-generator {
  min-height: calc(100vh - 200px);
  padding-bottom: 1rem;

  *::selection {
    background-color: #83FFA0FF;
  }
}

.v-mail-signature-generator__container {
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;

  > table {
    pointer-events: none;
  }

}

.fp-ui-form {
  display: flex;
  flex-wrap: wrap;

  > input {
    all: unset;
    display: block;
    position: relative;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    background: var(--color-background);
    box-shadow: inset 0 0 0 2px currentColor;
    margin-bottom: 1rem;
    line-height: .5ex;
    padding: .5rem 1rem;
  }
}

.v-mail-signature-generator__code-viewer {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  textarea {
    display: block;
    width: 100%;
    height: 20rem;
    resize: none;
  }
}
</style>
