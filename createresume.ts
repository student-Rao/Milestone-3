



document.getElementById('resumemaincont')?.addEventListener('submit',function(event){
        event.preventDefault();
        const nameElement= document.getElementById('name') as HTMLInputElement ;
        const emailElement= document.getElementById('email') as HTMLInputElement;
        const skillElement= document.getElementById('skill') as HTMLInputElement;
        const educationElement= document.getElementById('education') as HTMLInputElement;
        const experiencsElement= document.getElementById('experience') as HTMLInputElement;

        if(nameElement && emailElement && skillElement && educationElement && experiencsElement){
           const name=nameElement.value;
           const email=emailElement.value;
           const skill=skillElement.value;
           const education=educationElement.value;
           const experience=experiencsElement.value;

           const resumeOutput=`
           <h2>Resume</h2>
           <p><strong>Name:</strong> ${name} </p>
           <p><strong>email:</strong> ${email} </p>
           <h3>Skill:</h3>
           <p>${skill}</p>
           <h3>Experience:</h3>
           <p>${experience}</p>
           <h3>Education:</h3>
           <p>${education}</p>`
  const resumeOutputElement=document.getElementById('resumeOutput')
           if(resumeOutputElement){
            resumeOutputElement.innerHTML=resumeOutput
           }else{
            console.error("some element are misssing in your resume")
           }
           
           
        }else{
            console.error("lot of element are misssing in your resume")

        }
    })
    
// const form=document.getElementsByClassName('createresumepage') as HTMLFormElement;

