
let para = ["Zoho Schools is an alternative to traditional college education. It was started in 2005 by Zoho Corporation. The program trains students in coding, design, and business skills. No degree is required to join. Students learn through hands-on projects. Zoho provides free education with a stipend. Many graduates get direct jobs at Zoho. The focus is on practical learning. It helps students build strong careers. Zoho Schools is a unique learning opportunity.","Zoho is a global technology company known for its cloud-based software. It offers business tools like CRM, email, and accounting. Founded in 1996, Zoho focuses on innovation and privacy. Its headquarters is in Chennai, India. The company follows a bootstrapped model without external funding. Zoho provides free and affordable plans for startups. It values employee growth and skill development. Zoho Schools train students without requiring a college degree. The company promotes a strong work culture. Many businesses rely on Zoho secure solutions.","Zoho Teachers are experienced professionals who train students at Zoho Schools. They focus on practical learning over theory. Many are industry experts with real-world experience. They guide students in coding, design, and business skills. Teaching is hands-on with live projects. Zoho Teachers mentor students personally. They help build problem-solving skills. Their goal is to shape industry-ready professionals. Passion for teaching drives them. Zoho values skilled teachers in shaping future talent.","Zoho Creator is a low-code platform for building applications. It helps businesses create apps without deep coding knowledge. Users can design workflows with a simple drag-and-drop interface. The platform supports automation and integrations. It ensures security and scalability. Zoho Creator works on web and mobile. It reduces development time. Businesses can customize apps easily. Many industries use it for automation. Zoho Creator simplifies software development.","Zoho is a leading software company that develops business applications. It provides over 50 products for different needs. Companies use Zoho for CRM, project management, and automation. Its software is known for security and reliability. Zoho promotes a privacy-first approach. It competes with global tech giants. Zoho Schools train students in real-world skills. Many Zoho employees come from this program. The company believes in self-sustained growth. Zoho continues to expand worldwide."]
let paralength = para.length-1
let randNumber = Math.round(Math.random()*paralength)
let content = para[randNumber]
let spanEachLetter = "";
let index = 0;
let wrongLetter = 0;
let totalWord = 0;
let accuracy;

for(let i=0;i<content.length;i++){
    spanEachLetter+=`<span class="word" id="word${i}">${content[i]}</span>`
}

let textContainer = document.getElementById("textContainer");
document.getElementById("textContainer").innerHTML = spanEachLetter;

document.querySelector("body").addEventListener('keypress',validateKeys);

_("word"+index).classList.add("correct")
function validateKeys(e){
    if(e.key==content[index]){
        if(e.key==" "){
            totalWord++;
        }

        if(index==content.length-1){
            document.querySelector("body").removeEventListener("keypress",validateKeys)
            clearInterval(setIntervelID);

            _("textContainer").style.display="none";
            _("result").style.display = "flex";

            let timeInMins = globalTime / 60;
            let wpm = totalWord /  timeInMins;
            _('wpm').innerText=Math.round(wpm);

            return;
        }

        _("word"+index).classList.add("pass");
        _("word"+(index+1)).classList.add("correct")

        index++;
    }

    else{
        wrongLetter++;
        _("word"+index).classList.add("wrong")
        _("word"+index).classList.remove("correct")
    }

    acc()
}

function acc(){
     accuracy = ((content.length -wrongLetter) / content.length) * 100;
     document.querySelector(".accuracy").innerText = 
     Math.round((accuracy + Number.EPSILON) * 100) / 100 + "%";
}

let globalTime = 0;
let setIntervelID;

setIntervelID = setInterval(function timer(){
 globalTime++;
 document.querySelector(".Timer").innerText = globalTime;
},1000)

function _(args){
  return document.getElementById(args)
}


