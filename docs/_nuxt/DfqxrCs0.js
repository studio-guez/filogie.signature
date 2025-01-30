import{d as g,_ as m,v as d,x as t,J as l,K as a,y as r,B as o,L as f,t as p}from"./CpyciYaW.js";const u=g({data(){return{firstname:"",name:"",activity:"",email:"",showCode:!1}},methods:{copySignatureInClipBoard(){const n=this.$refs.htmlContent;if(!(n instanceof HTMLElement))return;const e=window.getSelection(),s=document.createRange();s.selectNodeContents(n),e&&(e.removeAllRanges(),e.addRange(s))},getCleanedEmptyString(n,e){return n.length>0?n:e+" doit être rempli"}}}),y={class:"v-mail-signature-generator fp-page"},v={class:"fp-grid-coll-container fp-grid-coll-container--center"},h={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},b={class:"v-mail-signature-generator__content fp-ui-form"},c={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},C={cellpadding:"0",cellspacing:"0",border:"0",role:"presentation",style:{"border-collapse":"collapse !important",width:"auto"}},x={style:{"vertical-align":"top"}},E={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"20px","font-weight":"bold"}},w={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},S={style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},k=["href"],A={class:"v-mail-signature-generator__code-viewer"},z={key:0,style:{"font-size":"12px","line-height":"14px"},readonly:""};function B(n,e,s,H,V,I){return p(),d("main",y,[t("div",v,[t("div",h,[e[14]||(e[14]=t("h1",null,"Générateur de signature mail Filogie",-1)),t("form",b,[l(t("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":e[0]||(e[0]=i=>n.firstname=i)},null,512),[[a,n.firstname]]),l(t("input",{type:"text",placeholder:"nom","onUpdate:modelValue":e[1]||(e[1]=i=>n.name=i)},null,512),[[a,n.name]]),l(t("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":e[2]||(e[2]=i=>n.activity=i)},null,512),[[a,n.activity]]),l(t("input",{type:"text",placeholder:"email","onUpdate:modelValue":e[3]||(e[3]=i=>n.email=i)},null,512),[[a,n.email]])]),t("div",{onClick:e[4]||(e[4]=(...i)=>n.copySignatureInClipBoard&&n.copySignatureInClipBoard(...i)),class:"v-mail-signature-generator__container"},[t("div",c,[t("table",C,[t("tr",null,[e[13]||(e[13]=t("td",{style:{"vertical-align":"top"}},[t("table",{cellpadding:"0",cellspacing:"0",border:"0",role:"presentation"})],-1)),t("td",x,[e[9]||(e[9]=t("td",{style:{"vertical-align":"top","padding-right":"0px","border-right":"2px dotted #000","padding-bottom":"30px","padding-top":"30px"}},[t("p",{style:{"text-align":"center",margin:"0"}},[t("img",{alt:"logo Filogie",height:"151",style:{height:"151px"},src:"https://villa1203.github.io/lecinematographe.signature/logo.png"})])],-1)),t("p",E,r(n.getCleanedEmptyString(n.firstname,"prénom"))+" "+r(n.getCleanedEmptyString(n.name,"/ nom")),1),t("p",w,[o(r(n.getCleanedEmptyString(n.activity,"fonction"))+" ",1),e[7]||(e[7]=t("br",null,null,-1)),e[8]||(e[8]=t("br",null,null,-1))]),e[10]||(e[10]=t("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},[o(" Le Cinématographe "),t("br")],-1)),e[11]||(e[11]=t("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},[o(" Casino de Montbenon, "),t("br"),o("All. Ernest-Ansermet 3, "),t("br"),o("1003 Lausanne "),t("br")],-1)),t("p",S,[t("a",{href:"mailto:"+n.email,target:"_blank",style:{color:"#444444"}},r(n.getCleanedEmptyString(n.email,"email")),9,k)]),e[12]||(e[12]=t("p",{style:{"font-family":"Helvetica, Arial, sans-serif",color:"#444444",padding:"0",margin:"0","font-size":"12px","line-height":"15px"}},[t("a",{id:"websiteLink",target:"_blank",style:{color:"#444444","text-decoration":"underline"},href:"https://filogie.ch/"},"filogie.ch")],-1))])])])],512)]),t("button",{onClick:e[5]||(e[5]=(...i)=>n.copySignatureInClipBoard&&n.copySignatureInClipBoard(...i)),class:"fc-button"},"Selectionner le texte de signature"),e[15]||(e[15]=t("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1)),t("div",A,[t("button",{onClick:e[6]||(e[6]=i=>n.showCode=!n.showCode),class:"fc-button--small",style:{background:"black","margin-bottom":"1rem"}},"voir le code"),n.showCode?(p(),d("textarea",z)):f("",!0)])])])])}const L=m(u,[["render",B],["__scopeId","data-v-eb4bb7d6"]]);export{L as default};
