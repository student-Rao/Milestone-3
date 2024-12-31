var _a;
(_a = document.getElementById('resumemaincont')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var skillElement = document.getElementById('skill');
    var educationElement = document.getElementById('education');
    var experiencsElement = document.getElementById('experience');
    if (nameElement && emailElement && skillElement && educationElement && experiencsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var skill = skillElement.value;
        var education = educationElement.value;
        var experience = experiencsElement.value;
        var resumeOutput = "\n           <h2>Resume</h2>\n           <p><strong>Name:</strong> ".concat(name_1, " </p>\n           <p><strong>email:</strong> ").concat(email, " </p>\n           <h3>Skill:</h3>\n           <p>").concat(skill, "</p>\n           <h3>Experience:</h3>\n           <p>").concat(experience, "</p>\n           <h3>Education:</h3>\n           <p>").concat(education, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("some element are misssing in your resume");
        }
    }
    else {
        console.error("lot of element are misssing in your resume");
    }
});
// const form=document.getElementsByClassName('createresumepage') as HTMLFormElement;
