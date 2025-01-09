import{d as m,_ as h,v as d,x as e,L as r,M as s,B as a,y as o,N as c,t as g,C as f,D as y}from"./BZM-qves.js";const u=m({data(){return{firstname:"",name:"",activity:"",tel:"",pronom:"",showCode:!1}},methods:{copySignatureInClipBoard(){const t=this.$refs.htmlContent;if(!(t instanceof HTMLElement))return;const n=window.getSelection(),p=document.createRange();p.selectNodeContents(t),n&&(n.removeAllRanges(),n.addRange(p))},getCleanedEmptyString(t,n){return t.length>0?t:n+" doit être rempli"}}}),l=t=>(f("data-v-d58cf833"),t=t(),y(),t),b={class:"v-mail-signature-generator fp-page"},x={class:"fp-grid-coll-container fp-grid-coll-container--center"},v={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},C=l(()=>e("h1",null,"Générateur de signature mail le cinematographe",-1)),E={class:"v-mail-signature-generator__content fp-ui-form"},w={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},A={cellpadding:"0",cellspacing:"0",border:"0",role:"presentation",style:{"border-collapse":"collapse !important",width:"auto"}},_=l(()=>e("td",{style:{"vertical-align":"top"}},[e("table",{cellpadding:"0",cellspacing:"0",border:"0",role:"presentation"},[e("tr",null,[e("td",{style:{"vertical-align":"top","padding-right":"0px","border-right":"2px dotted #000","padding-bottom":"30px","padding-top":"30px"}},[e("p",{style:{"text-align":"center",margin:"0"}},[e("img",{alt:"logo lecinematographe",height:"151",style:{height:"151px"},src:"https://villa1203.github.io/lecinematographe.signature/logo.png"})])]),e("td",{style:{"padding-right":"15px"}})])])],-1)),S={style:{"vertical-align":"top"}},z={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"20px","font-weight":"bold"}},k=l(()=>e("br",null,null,-1)),H={style:{"font-size":"12px","font-family":"Helvetica, Arial, sans-serif"}},B=l(()=>e("table",{width:"100%",border:"0",cellspacing:"0",cellpadding:"0"},[e("tr",null,[e("td",{style:{"line-height":"10px"}}," ")]),e("tr",null,[e("td",{style:{border:"none","line-height":"1px",height:"1px","background-color":"#eeeeee"}})]),e("tr",null,[e("td",{style:{"line-height":"10px"}}," ")])],-1)),I={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},L=l(()=>e("br",null,null,-1)),V=l(()=>e("br",null,null,-1)),U=l(()=>e("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},[a(" Le Cinématographe "),e("br")],-1)),$=l(()=>e("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},[a(" Casino de Montbenon, "),e("br"),a("All. Ernest-Ansermet 3, "),e("br"),a("1003 Lausanne "),e("br")],-1)),M={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},N=["href"],T=l(()=>e("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},[e("a",{id:"websiteLink",target:"_blank",style:{color:"#444444","text-decoration":"underline"},href:"https://lecinematographe.ch/"},"lecinematographe.ch")],-1)),D=l(()=>e("p",{style:{padding:"0",margin:"0","text-align":"left","font-size":"12px","line-height":"15px","font-weight":"normal"}},[e("a",{href:"https://www.instagram.com/lecinematographe_lausanne/",style:{color:"#444444","text-decoration":"underline"},target:"_blank"}," @lecinematographe_lausanne ")],-1)),R=l(()=>e("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1)),q={class:"v-mail-signature-generator__code-viewer"},G={key:0,style:{"font-size":"12px","line-height":"14px"},readonly:""};function j(t,n,p,F,J,K){return g(),d("main",b,[e("div",x,[e("div",v,[C,e("form",E,[r(e("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":n[0]||(n[0]=i=>t.firstname=i)},null,512),[[s,t.firstname]]),r(e("input",{type:"text",placeholder:"nom","onUpdate:modelValue":n[1]||(n[1]=i=>t.name=i)},null,512),[[s,t.name]]),r(e("input",{type:"text",placeholder:"pronom","onUpdate:modelValue":n[2]||(n[2]=i=>t.pronom=i)},null,512),[[s,t.pronom]]),r(e("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":n[3]||(n[3]=i=>t.activity=i)},null,512),[[s,t.activity]]),r(e("input",{type:"text",placeholder:"numéro","onUpdate:modelValue":n[4]||(n[4]=i=>t.tel=i)},null,512),[[s,t.tel]])]),e("div",{onClick:n[5]||(n[5]=(...i)=>t.copySignatureInClipBoard&&t.copySignatureInClipBoard(...i)),class:"v-mail-signature-generator__container"},[e("div",w,[e("table",A,[e("tr",null,[_,e("td",S,[e("p",z,[a(o(t.getCleanedEmptyString(t.firstname,"prénom"))+" "+o(t.getCleanedEmptyString(t.name,"/ nom"))+" ",1),k,e("span",H,"("+o(t.getCleanedEmptyString(t.pronom,"pronom"))+")",1)]),B,e("p",I,[a(o(t.getCleanedEmptyString(t.activity,"fonction"))+" ",1),L,V]),U,$,e("p",M,[e("a",{href:"tel:"+t.tel,target:"_blank",style:{color:"#444444"}},o(t.getCleanedEmptyString(t.tel,"numéro")),9,N)]),T,D])])])],512)]),e("button",{onClick:n[6]||(n[6]=(...i)=>t.copySignatureInClipBoard&&t.copySignatureInClipBoard(...i)),class:"fc-button"},"Selectionner le texte de signature"),R,e("div",q,[e("button",{onClick:n[7]||(n[7]=i=>t.showCode=!t.showCode),class:"fc-button--small",style:{background:"black","margin-bottom":"1rem"}},"voir le code"),t.showCode?(g(),d("textarea",G,`
            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
                   style="border-collapse: collapse !important; width: auto;">
              <tr>
                <td style="vertical-align: top;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="vertical-align: top;padding-right: 0px; border-right: 2px dotted #000; padding-bottom: 30px; padding-top: 30px;">
                        <p style="text-align: center; margin: 0">
                          <img
                                alt="logo lecinematographe"
                                height="151"
                                style="height: 151px"
                                src="https://villa1203.github.io/lecinematographe.signature/logo.png"
                          />
                        </p>
                      </td>
                      <td style="padding-right: 15px; "></td>
                    </tr>
                  </table>
                </td>
                <td style="vertical-align: top;">
                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 20px; font-weight: bold;"
                  >
                    `+o(t.getCleanedEmptyString(t.firstname,"prénom"))+" "+o(t.getCleanedEmptyString(t.name,"/ nom"))+`
                    <br><span style="font-size: 12px; font-family:Helvetica, Arial, sans-serif;">(`+o(t.getCleanedEmptyString(t.pronom,"pronom"))+`)</span>
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

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 15px;"
                  >
                    `+o(t.getCleanedEmptyString(t.activity,"fonction"))+`
                    <br>
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 15px;"
                  >
                    Le Cinématographe
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 15px;"
                  >
                    Casino de Montbenon,
                    <br>All. Ernest-Ansermet 3,
                    <br>1003 Lausanne
                    <br>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 15px;"
                  >
                    <a :href="'tel:' + tel"
                       target="_blank"
                       style="color: #444444"
                    >
                       `+o(t.getCleanedEmptyString(t.tel,"numéro"))+`
                    </a>
                  </p>

                  <p style="font-family:Helvetica, Arial, sans-serif; color: #444444; padding: 0; margin: 0; font-size: 12px; line-height: 15px;">
                    <a id="websiteLink"
                       target="_blank"
                       style="color: #444444; text-decoration: underline;"
                       href="https://lecinematographe.ch/"
                    >lecinematographe.ch</a></p>
                  <p style="padding: 0;margin: 0; text-align: left; font-size: 12px; line-height: 15px; font-weight: normal;">
                    <a href="https://www.instagram.com/lecinematographe_lausanne/"
                       style="color: #444444; text-decoration: underline;"
                       target="_blank"
                    >
                      @lecinematographe_lausanne
                    </a>
                  </p>
                </td>
              </tr>
            </table>
          `,1)):c("",!0)])])])])}const P=h(u,[["render",j],["__scopeId","data-v-d58cf833"]]);export{P as default};
