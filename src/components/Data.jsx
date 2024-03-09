import img from '../images/Project1(Quick_Ui).png'
import img2 from '../images/Schooldata.png'
import img3 from '../images/Nike_Project.png'
import tailwindlogo from '../images/tailwindlogo.png'
import reactlogo from '../images/reactlogo.png'
import bootstraplogo from '../images/bootstraplogo.png'
import github from '../images/gitlogo.png'
import flogo from '../images/frontendlogo.png'
export const edu_data=[
    {
        name:"Parul University",
        location:"Vadodara, Gujarat",
        Duration:"2020-2024",
        course:"Btech",
        cgpa:"8",
        des:"Im Currently studying Btech Final year in Parul University in Robotics and Automation"
    },
    {
        name:"Aditya Junior College",
        location:"Srikakulam Andhrapradesh",
        Duration:"2018-2020",
        course:"intermediate",
        cgpa:"9.3",
        des:"I finished my 12th in Aditya Junior College in Srikakulam , with 93% result"
    },
    {
        name:"New Central School",
        location:"Srikakulam Andhrapradesh",
        Duration:"2018",
        course:"10th",
        cgpa:"9.8",
        des:"I finished my 10th in NCS (New Central School) in Srikakulam , with 98% result"
    },
]

export const skillsdata = [
   {
    logo:flogo,
    lagunage:"Frontend Development"
}, {
    logo:reactlogo,
    lagunage:"React"
},
{
    logo:"https://static.vecteezy.com/system/resources/previews/012/697/298/original/3d-javascript-logo-design-free-png.png",
    lagunage:"JavaScript"
},
{
    logo:bootstraplogo,
    lagunage:"Bootstrap"
},{
    logo:"https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png",
    lagunage:"HTML"
},
{
    logo:"https://cdn3d.iconscout.com/3d/free/thumb/free-css-logo-6563485-5453030.png",
    lagunage:"CSS"
},
{
    logo:tailwindlogo,
    lagunage:"TailWind Css"
},
{
    logo:github,
    lagunage:"Git/Github"
},
]
export const projectsdata =[
    {
        id:"01",
  project_img:img,
   project_name:"Quick Ui Landing Page(React JS)",
   project_des:"Worked with react- router-dom ,Fully responsive, Used Javascript, HTML, CSS and React JS",
   project_demo:"https://kumarraj21.github.io/Quick_Ui/"
},
{
    id:"02",
    project_img:img2,
    project_name:"School Data (CRUD App With React JS)",
    project_des:" Created CRUD App using React JS and in this Project I Worked with react- router-dom ,Fully responsive, Used Javascript, HTML, CSS and React JS",
    project_demo:"https://kumarraj21.github.io/schooldata/#/"
 },
 {
    id:"03",
    project_img:img3,
    project_name:"Nike Landing Page(Vite And Tailwind Css)",
    project_des:"A single Page Apllication by using Tailwind Css and Vite annd also Worked with react- router-dom ,Fully responsive, Used Javascript, HTML, CSS and Vite JS",
    project_demo:"https://65acea9f0c77514c04244820--stunning-eclair-730f7b.netlify.app/"
 }
]