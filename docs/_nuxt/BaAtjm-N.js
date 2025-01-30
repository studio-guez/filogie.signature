import{d as g,_ as m,v as d,x as n,J as o,K as a,y as l,B as r,L as f,t as p}from"./j_wokI0W.js";const y=g({data(){return{firstname:"",name:"",activity:"",email:"",showCode:!1}},methods:{copySignatureInClipBoard(){const e=this.$refs.htmlContent;if(!(e instanceof HTMLElement))return;const t=window.getSelection(),s=document.createRange();s.selectNodeContents(e),t&&(t.removeAllRanges(),t.addRange(s))},getCleanedEmptyString(e,t){return e.length>0?e:t+" doit être rempli"}}}),u={class:"v-mail-signature-generator fp-page"},h={class:"fp-grid-coll-container fp-grid-coll-container--center"},c={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},b={class:"v-mail-signature-generator__content fp-ui-form"},v={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},x={cellpadding:"0",cellspacing:"0",border:"0",role:"presentation",style:{"border-collapse":"collapse !important",width:"auto"}},C={style:{"vertical-align":"top"}},w={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#000",padding:"0",margin:"0","font-size":"15px","font-weight":"bold"}},E={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#000",padding:"0",margin:"0","font-size":"15px","line-height":"18px"}},z={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#000",padding:"0",margin:"0","font-size":"15px","line-height":"18px"}},S=["href"],k={class:"v-mail-signature-generator__code-viewer"},A={key:0,style:{"font-size":"12px","line-height":"14px"},readonly:""};function H(e,t,s,B,F,V){return p(),d("main",u,[n("div",h,[n("div",c,[t[14]||(t[14]=n("h1",null,"Générateur de signature mail Filogie",-1)),n("form",b,[o(n("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":t[0]||(t[0]=i=>e.firstname=i)},null,512),[[a,e.firstname]]),o(n("input",{type:"text",placeholder:"nom","onUpdate:modelValue":t[1]||(t[1]=i=>e.name=i)},null,512),[[a,e.name]]),o(n("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":t[2]||(t[2]=i=>e.activity=i)},null,512),[[a,e.activity]]),o(n("input",{type:"text",placeholder:"email","onUpdate:modelValue":t[3]||(t[3]=i=>e.email=i)},null,512),[[a,e.email]])]),n("div",{onClick:t[4]||(t[4]=(...i)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...i)),class:"v-mail-signature-generator__container"},[n("div",v,[n("table",x,[n("tr",null,[t[13]||(t[13]=n("td",{style:{"vertical-align":"top"}},[n("table",{cellpadding:"0",cellspacing:"0",border:"0",role:"presentation"})],-1)),n("td",C,[t[9]||(t[9]=n("p",{style:{"text-align":"left",margin:"0","margin-bottom":"10px"}},[n("img",{alt:"logo Filogie",height:"39",width:"122",style:{height:"39px",width:"122px",display:"block"},src:"https://studio-guez.github.io/filogie.signature/logo.png"})],-1)),n("p",w,l(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+l(e.getCleanedEmptyString(e.name,"/ nom")),1),n("p",E,[r(l(e.getCleanedEmptyString(e.activity,"fonction"))+" ",1),t[7]||(t[7]=n("br",null,null,-1)),t[8]||(t[8]=n("br",null,null,-1))]),t[10]||(t[10]=n("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#000",padding:"0",margin:"0","font-size":"15px","line-height":"18px","font-weight":"bold"}},[r(" Fondation Filogie "),n("br")],-1)),t[11]||(t[11]=n("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#000",padding:"0",margin:"0","font-size":"15px","line-height":"18px"}},[r(" Route de la Galaise 17 "),n("br"),r("1003 Plan-les-Ouates "),n("br"),n("br")],-1)),n("p",z,[n("a",{href:"mailto:"+e.email,target:"_blank",style:{color:"#000","text-decoration":"underline"}},l(e.getCleanedEmptyString(e.email,"email")),9,S)]),t[12]||(t[12]=n("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#000",padding:"0",margin:"0","font-size":"15px","line-height":"18px"}},[n("a",{id:"websiteLink",target:"_blank",style:{color:"#000","text-decoration":"underline"},href:"https://filogie.ch/"},"filogie.ch")],-1))])])])],512)]),n("button",{onClick:t[5]||(t[5]=(...i)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...i)),class:"fc-button"},"Selectionner le texte de signature"),t[15]||(t[15]=n("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1)),n("div",k,[n("button",{onClick:t[6]||(t[6]=i=>e.showCode=!e.showCode),class:"fc-button--small",style:{background:"black","margin-bottom":"1rem"}},"voir le code"),e.showCode?(p(),d("textarea",A,`            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
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
                    `+l(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+l(e.getCleanedEmptyString(e.name,"/ nom"))+`
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #000; padding: 0; margin: 0; font-size: 15px; line-height: 18px;"
                  >
                    `+l(e.getCleanedEmptyString(e.activity,"fonction"))+`
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
                       `+l(e.getCleanedEmptyString(e.email,"email"))+`
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
          `,1)):f("",!0)])])])])}const $=m(y,[["render",H],["__scopeId","data-v-88d6ab4f"]]);export{$ as default};
