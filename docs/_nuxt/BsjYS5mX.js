import{d as m,_ as h,v as d,x as e,L as r,M as s,B as o,y as l,N as c,t as g,C as f,D as y}from"./Cts_qiD2.js";const u=m({data(){return{firstname:"",name:"",activity:"",tel:"",pronom:"",showCode:!1}},methods:{copySignatureInClipBoard(){const t=this.$refs.htmlContent;if(!(t instanceof HTMLElement))return;const n=window.getSelection(),p=document.createRange();p.selectNodeContents(t),n&&(n.removeAllRanges(),n.addRange(p))},getCleanedEmptyString(t,n){return t.length>0?t:n+" doit être rempli"}}}),a=t=>(f("data-v-d0ab8dad"),t=t(),y(),t),b={class:"v-mail-signature-generator fp-page"},x={class:"fp-grid-coll-container fp-grid-coll-container--center"},v={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},C=a(()=>e("h1",null,"Générateur de signature mail le cinematographe",-1)),E={class:"v-mail-signature-generator__content fp-ui-form"},w={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},A={cellpadding:"0",cellspacing:"0",border:"0",role:"presentation",style:{"border-collapse":"collapse !important",width:"auto"}},S=a(()=>e("td",{style:{"vertical-align":"top"}},[e("table",{cellpadding:"0",cellspacing:"0",border:"0",role:"presentation"},[e("tr",null,[e("td",{style:{"vertical-align":"top","padding-right":"0px","border-right":"2px dotted #000","padding-bottom":"10px"}},[e("p",{style:{"text-align":"center",margin:"0"}},[e("img",{alt:"logo lecinematographe",height:"151",style:{height:"151px"},src:"https://villa1203.github.io/lecinematographe.signature/logo.png"})]),e("p",{style:{padding:"10px",margin:"0","text-align":"center","font-size":"12px","line-height":"14px","font-weight":"normal"}},[e("a",{href:"https://www.instagram.com/lecinematographe_lausanne/",target:"_blank"}," @lecinematographe_lausanne ")])]),e("td",{style:{"padding-right":"15px"}})])])],-1)),_={style:{"vertical-align":"top"}},z={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"20px","font-weight":"bold"}},k=a(()=>e("br",null,null,-1)),H={style:{"font-size":"12px","font-family":"Helvetica, Arial, sans-serif"}},B=a(()=>e("table",{width:"100%",border:"0",cellspacing:"0",cellpadding:"0"},[e("tr",null,[e("td",{style:{"line-height":"10px"}}," ")]),e("tr",null,[e("td",{style:{border:"none","line-height":"1px",height:"1px","background-color":"#eeeeee"}})]),e("tr",null,[e("td",{style:{"line-height":"10px"}}," ")])],-1)),I={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"14px"}},L=a(()=>e("br",null,null,-1)),V=a(()=>e("br",null,null,-1)),U=a(()=>e("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"14px"}},[o(" Le Cinématographe "),e("br")],-1)),$=a(()=>e("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"14px"}},[o(" Casino de Montbenon, "),e("br"),o("All. Ernest-Ansermet 3, "),e("br"),o("1003 Lausanne "),e("br")],-1)),M={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"14px"}},N=["href"],T=a(()=>e("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"14px"}},[e("a",{id:"websiteLink",target:"_blank",style:{color:"#444444"},href:"https://lecinematographe.ch/"},"lecinematographe.ch")],-1)),D=a(()=>e("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1)),R={class:"v-mail-signature-generator__code-viewer"},q={key:0,style:{"font-size":"12px","line-height":"14px"},readonly:""};function G(t,n,p,j,F,J){return g(),d("main",b,[e("div",x,[e("div",v,[C,e("form",E,[r(e("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":n[0]||(n[0]=i=>t.firstname=i)},null,512),[[s,t.firstname]]),r(e("input",{type:"text",placeholder:"nom","onUpdate:modelValue":n[1]||(n[1]=i=>t.name=i)},null,512),[[s,t.name]]),r(e("input",{type:"text",placeholder:"pronom","onUpdate:modelValue":n[2]||(n[2]=i=>t.pronom=i)},null,512),[[s,t.pronom]]),r(e("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":n[3]||(n[3]=i=>t.activity=i)},null,512),[[s,t.activity]]),r(e("input",{type:"text",placeholder:"numéro","onUpdate:modelValue":n[4]||(n[4]=i=>t.tel=i)},null,512),[[s,t.tel]])]),e("div",{onClick:n[5]||(n[5]=(...i)=>t.copySignatureInClipBoard&&t.copySignatureInClipBoard(...i)),class:"v-mail-signature-generator__container"},[e("div",w,[e("table",A,[e("tr",null,[S,e("td",_,[e("p",z,[o(l(t.getCleanedEmptyString(t.firstname,"prénom"))+" "+l(t.getCleanedEmptyString(t.name,"/ nom"))+" ",1),k,e("span",H,"("+l(t.getCleanedEmptyString(t.pronom,"pronom"))+")",1)]),B,e("p",I,[o(l(t.getCleanedEmptyString(t.activity,"fonction"))+" ",1),L,V]),U,$,e("p",M,[e("a",{href:"tel:"+t.tel,target:"_blank",style:{color:"#444444"}},l(t.getCleanedEmptyString(t.tel,"numéro")),9,N)]),T])])])],512)]),e("button",{onClick:n[6]||(n[6]=(...i)=>t.copySignatureInClipBoard&&t.copySignatureInClipBoard(...i)),class:"fc-button"},"Selectionner le texte de signature"),D,e("div",R,[e("button",{onClick:n[7]||(n[7]=i=>t.showCode=!t.showCode),class:"fc-button--small",style:{background:"black","margin-bottom":"1rem"}},"voir le code"),t.showCode?(g(),d("textarea",q,`
            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
                   style="border-collapse: collapse !important; width: auto;">
              <tr>
                <td style="vertical-align: top;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="vertical-align: top;padding-right: 0px; border-right: 2px dotted #000; padding-bottom: 10px;">
                        <p style="text-align: center; margin: 0">
                          <img
                                alt="logo lecinematographe"
                                height="151"
                                style="height: 151px"
                                src="https://villa1203.github.io/lecinematographe.signature/logo.png"
                          />
                        </p>
                        <p style="padding: 10px;margin: 0; text-align: center; font-size: 12px; line-height: 14px; font-weight: normal;">
                          <a href="https://www.instagram.com/lecinematographe_lausanne/"
                             target="_blank"
                          >
                            @lecinematographe_lausanne
                          </a>
                        </p>
                      </td>
                      <td style="padding-right: 15px; "></td>
                    </tr>
                  </table>
                </td>
                <td style="vertical-align: top;">
                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 20px; font-weight: bold;"
                  >
                    `+l(t.getCleanedEmptyString(t.firstname,"prénom"))+" "+l(t.getCleanedEmptyString(t.name,"/ nom"))+`
                    <br><span style="font-size: 12px; font-family:Helvetica, Arial, sans-serif;">(`+l(t.getCleanedEmptyString(t.pronom,"pronom"))+`)</span>
                  </p>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="line-height: 10px"> </td>
                    </tr>
                    <tr>
                      <td style="border: none; line-height: 1px; height: 1px; background-color: #eeeeee;"></td>
                    </tr>
                    <tr>
                      <td style="line-height: 10px"> </td>
                    </tr>
                  </table>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 14px;"
                  >
                    `+l(t.getCleanedEmptyString(t.activity,"fonction"))+`
                    <br>
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 14px;"
                  >
                    Le Cinématographe
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 14px;"
                  >
                    Casino de Montbenon,
                    <br>All. Ernest-Ansermet 3,
                    <br>1003 Lausanne
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 14px;"
                  >
                    <a :href="'tel:' + tel"
                       target="_blank"
                       style="color: #444444"
                    >
                       `+l(t.getCleanedEmptyString(t.tel,"numéro"))+`
                    </a>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 14px;">
                    <a id="websiteLink"
                       target="_blank"
                       style="color: #444444"
                       href="https://lecinematographe.ch/"
                    >lecinematographe.ch</a></p>
                </td>
              </tr>
            </table>
          `,1)):c("",!0)])])])])}const O=h(u,[["render",G],["__scopeId","data-v-d0ab8dad"]]);export{O as default};
