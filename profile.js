/* =====================================================
   CAREERGPS - PROFILE FORM
===================================================== */


/* =====================================================
   GET FORM
===================================================== */

const careerForm = document.getElementById("careerForm");


/* =====================================================
   FORM SUBMIT
===================================================== */

careerForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();


    /* =================================================
       GET BASIC INFORMATION
    ================================================= */

    const educationLevel =
        document.getElementById("educationLevel").value;

    const stream =
        document.getElementById("stream").value;

    const workingStatus =
        document.getElementById("workingStatus").value;

    const currentJob =
        document.getElementById("currentJob").value;

    const experienceYears =
        document.getElementById("experienceYears").value;

    const responsibilities =
        document.getElementById("responsibilities").value;

    const location =
        document.getElementById("location").value;

    const budget =
        document.getElementById("budget").value;

    const duration =
        document.getElementById("duration").value;

    const careerGoal =
        document.getElementById("careerGoal").value;

    const careerDream =
        document.getElementById("careerDream").value;


    /* =================================================
       GET CHECKBOX VALUES
    ================================================= */

    const skills =
        Array.from(
            document.querySelectorAll(
                'input[name="skills"]:checked'
            )
        ).map(
            checkbox => checkbox.value
        );


    const interests =
        Array.from(
            document.querySelectorAll(
                'input[name="interests"]:checked'
            )
        ).map(
            checkbox => checkbox.value
        );


    const subjects =
        Array.from(
            document.querySelectorAll(
                'input[name="subjects"]:checked'
            )
        ).map(
            checkbox => checkbox.value
        );


    const careerPreferences =
        Array.from(
            document.querySelectorAll(
                'input[name="careerPreferences"]:checked'
            )
        ).map(
            checkbox => checkbox.value
        );


    /* =================================================
       CREATE PROFILE OBJECT
    ================================================= */

    const profile = {

        educationLevel: educationLevel,

        stream: stream,

        subjects: subjects,

        skills: skills,

        interests: interests,

        workingStatus: workingStatus,

        currentJob: currentJob,

        experienceYears: experienceYears,

        responsibilities: responsibilities,

        location: location,

        budget: budget,

        duration: duration,

        careerPreferences: careerPreferences,

        careerGoal: careerGoal,

        careerDream: careerDream

    };


    /* =================================================
       SAVE PROFILE
    ================================================= */

    localStorage.setItem(
        "careerGPSProfile",
        JSON.stringify(profile)
    );


    /* =================================================
       GO TO RESULTS PAGE
    ================================================= */

    window.location.href = "results.html";

});