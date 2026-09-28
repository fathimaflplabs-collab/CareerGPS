/* =========================================================
   CAREERGPS - RESULTS PAGE
   ========================================================= */


/* =========================================================
   LOAD SAVED PROFILE
   ========================================================= */

const savedProfile =
    localStorage.getItem("careerGPSProfile");


if (!savedProfile) {

    alert(
        "No CareerGPS profile was found. " +
        "Please create your profile first."
    );

    window.location.href = "profile.html";

}


/* Convert saved profile into JavaScript object */

const profile =
    JSON.parse(savedProfile);



/* =========================================================
   CAREER DATABASE
   ========================================================= */

const careers = [

    {
        name: "Robotics Program Coordinator",

        icon: "🤖",

        description:
            "Coordinates robotics programs, workshops, student projects, and technology-based learning activities.",

        skills: [
            "Robotics",
            "Communication",
            "Project Management",
            "Teaching",
            "Problem Solving"
        ],

        interests: [
            "Robotics",
            "Technology",
            "Education"
        ],

        education: [
            "diploma",
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "STEM Education Specialist",

        icon: "🎓",

        description:
            "Designs and delivers STEM learning experiences using science, technology, engineering, and mathematics.",

        skills: [
            "Teaching",
            "Communication",
            "Robotics",
            "Programming",
            "Problem Solving"
        ],

        interests: [
            "Education",
            "Technology",
            "Robotics",
            "Science"
        ],

        education: [
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Technical Training Manager",

        icon: "📚",

        description:
            "Plans and manages technical training programs while helping learners and employees develop practical technology skills.",

        skills: [
            "Communication",
            "Teaching",
            "Leadership",
            "Project Management",
            "Technology"
        ],

        interests: [
            "Technology",
            "Education",
            "Leadership"
        ],

        education: [
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Academic Program Manager",

        icon: "🏫",

        description:
            "Manages educational programs, coordinates institutions and teams, and supports the successful delivery of academic initiatives.",

        skills: [
            "Communication",
            "Leadership",
            "Project Management",
            "Teaching",
            "Organization"
        ],

        interests: [
            "Education",
            "Leadership",
            "Management"
        ],

        education: [
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "EdTech Specialist",

        icon: "💻",

        description:
            "Combines education and technology to develop, implement, and support digital learning solutions.",

        skills: [
            "Technology",
            "Programming",
            "Communication",
            "Teaching",
            "Problem Solving"
        ],

        interests: [
            "Technology",
            "Education",
            "Programming"
        ],

        education: [
            "diploma",
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Embedded Systems Developer",

        icon: "⚙️",

        description:
            "Designs and develops software and hardware systems for microcontrollers, electronic devices, and smart products.",

        skills: [
            "Programming",
            "Electronics",
            "Embedded Systems",
            "Problem Solving",
            "Robotics"
        ],

        interests: [
            "Technology",
            "Electronics",
            "Robotics",
            "Programming"
        ],

        education: [
            "diploma",
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Electronics Engineer",

        icon: "🔌",

        description:
            "Works with electronic circuits, hardware systems, embedded devices, and electronic product development.",

        skills: [
            "Electronics",
            "Circuit Design",
            "Problem Solving",
            "Programming",
            "Embedded Systems"
        ],

        interests: [
            "Electronics",
            "Technology",
            "Robotics"
        ],

        education: [
            "diploma",
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Data Analyst",

        icon: "📊",

        description:
            "Collects, processes, analyzes, and communicates data to help organizations make informed decisions.",

        skills: [
            "Data Analysis",
            "Python",
            "Problem Solving",
            "Communication",
            "Technology"
        ],

        interests: [
            "Data",
            "Technology",
            "Programming",
            "Analytics"
        ],

        education: [
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Research Professional",

        icon: "🔬",

        description:
            "Conducts research, analyzes information, develops solutions, and contributes to innovation in technical or academic fields.",

        skills: [
            "Research",
            "Problem Solving",
            "Data Analysis",
            "Communication",
            "Technology"
        ],

        interests: [
            "Research",
            "Science",
            "Technology",
            "Innovation"
        ],

        education: [
            "postgraduate",
            "phd",
            "working"
        ]
    },


    {
        name: "Healthcare Technology Specialist",

        icon: "🏥",

        description:
            "Works with technology, digital systems, and technical solutions used in healthcare environments.",

        skills: [
            "Technology",
            "Programming",
            "Problem Solving",
            "Electronics",
            "Data Analysis"
        ],

        interests: [
            "Healthcare",
            "Technology",
            "Science"
        ],

        education: [
            "undergraduate",
            "postgraduate",
            "working"
        ]
    },


    {
        name: "Biotechnology Professional",

        icon: "🧬",

        description:
            "Applies biological science and technology to research, development, healthcare, agriculture, and industrial applications.",

        skills: [
            "Research",
            "Biology",
            "Data Analysis",
            "Problem Solving",
            "Science"
        ],

        interests: [
            "Biology",
            "Science",
            "Research",
            "Healthcare"
        ],

        education: [
            "undergraduate",
            "postgraduate",
            "phd",
            "working"
        ]
    }

];



/* =========================================================
   FIND MATCHING CAREERS
   ========================================================= */

function calculateCareerMatches() {

    const results = [];


    careers.forEach(career => {

        let score = 0;

        let reasons = [];


        /* -----------------------------------------
           STREAM MATCH
        ----------------------------------------- */

        if (
            profile.stream &&
            careerMatchesStream(
                profile.stream,
                career
            )
        ) {

            score += 4;

            reasons.push(
                "your educational background"
            );

        }


        /* -----------------------------------------
           EDUCATION MATCH
        ----------------------------------------- */

        if (
            profile.educationLevel &&
            career.education.includes(
                profile.educationLevel
            )
        ) {

            score += 2;

            reasons.push(
                "your education level"
            );

        }


        /* -----------------------------------------
           SKILL MATCH
        ----------------------------------------- */

        const matchingSkills =
            (profile.skills || []).filter(
                skill =>
                    career.skills.some(
                        careerSkill =>
                            normalize(skill) ===
                            normalize(careerSkill)
                    )
            );


        if (matchingSkills.length > 0) {

            score +=
                matchingSkills.length * 2;

            reasons.push(
                `${matchingSkills.length} matching skill${
                    matchingSkills.length > 1
                        ? "s"
                        : ""
                }`
            );

        }


        /* -----------------------------------------
           INTEREST MATCH
        ----------------------------------------- */

        const matchingInterests =
            (profile.interests || []).filter(
                interest =>
                    career.interests.some(
                        careerInterest =>
                            normalize(interest) ===
                            normalize(careerInterest)
                    )
            );


        if (matchingInterests.length > 0) {

            score +=
                matchingInterests.length * 2;

            reasons.push(
                `${matchingInterests.length} matching interest${
                    matchingInterests.length > 1
                        ? "s"
                        : ""
                }`
            );

        }


        /* -----------------------------------------
           WORK EXPERIENCE MATCH
        ----------------------------------------- */

        if (
            profile.workingStatus === "working" &&
            profile.currentJob
        ) {

            const currentJob =
                profile.currentJob.toLowerCase();


            if (
                (
                    currentJob.includes("robot") ||
                    currentJob.includes("teacher") ||
                    currentJob.includes("trainer") ||
                    currentJob.includes("academic")
                ) &&
                (
                    career.name.includes("Education") ||
                    career.name.includes("Training") ||
                    career.name.includes("Academic") ||
                    career.name.includes("Robotics")
                )
            ) {

                score += 3;

                reasons.push(
                    "your current work experience"
                );

            }

        }


        /* -----------------------------------------
           CREATE REASON
        ----------------------------------------- */

        let reason;


        if (reasons.length > 0) {

            reason =
                "This pathway matches " +
                formatReasons(reasons) +
                ".";

        } else {

            reason =
                "This pathway may be worth exploring based on your overall profile.";

        }


        results.push({

            career: career,

            score: score,

            reason: reason,

            matchingSkills: matchingSkills,

            matchingInterests: matchingInterests

        });

    });


    /* -----------------------------------------
       SORT BY SCORE
    ----------------------------------------- */

    results.sort(
        (a, b) =>
            b.score - a.score
    );


    return results;

}



/* =========================================================
   NORMALIZE TEXT
   ========================================================= */

function normalize(value) {

    return String(value)
        .toLowerCase()
        .trim();

}



/* =========================================================
   STREAM MATCHING
   ========================================================= */

function careerMatchesStream(
    stream,
    career
) {

    const streamText =
        normalize(stream);


    const careerText =
        normalize(career.name);


    if (
        streamText.includes("computer") ||
        streamText.includes("it") ||
        streamText.includes("computer science")
    ) {

        return (
            careerText.includes("technology") ||
            careerText.includes("software") ||
            careerText.includes("data") ||
            careerText.includes("embedded") ||
            careerText.includes("edtech") ||
            careerText.includes("robotics")
        );

    }


    if (
        streamText.includes("science") ||
        streamText.includes("biology")
    ) {

        return (
            careerText.includes("biotechnology") ||
            careerText.includes("research") ||
            careerText.includes("healthcare")
        );

    }


    if (
        streamText.includes("electronics") ||
        streamText.includes("electrical")
    ) {

        return (
            careerText.includes("electronics") ||
            careerText.includes("embedded") ||
            careerText.includes("robotics")
        );

    }


    return false;

}



/* =========================================================
   FORMAT REASONS
   ========================================================= */

function formatReasons(
    reasons
) {

    if (reasons.length === 1) {

        return reasons[0];

    }


    if (reasons.length === 2) {

        return (
            reasons[0] +
            " and " +
            reasons[1]
        );

    }


    const last =
        reasons[reasons.length - 1];


    const first =
        reasons.slice(
            0,
            reasons.length - 1
        );


    return (
        first.join(", ") +
        ", and " +
        last
    );

}



/* =========================================================
   EDUCATION NAME
   ========================================================= */

function getEducationName(
    value
) {

    const educationNames = {

        "10th":
            "10th Standard",

        "plus-two":
            "Higher Secondary",

        "diploma":
            "Diploma",

        "undergraduate":
            "Undergraduate",

        "postgraduate":
            "Postgraduate",

        "phd":
            "PhD",

        "working":
            "Working Professional"

    };


    return (
        educationNames[value] ||
        value ||
        "Not specified"
    );

}



/* =========================================================
   LOCATION NAME
   ========================================================= */

function getLocationName(
    value
) {

    const locationNames = {

        "local":
            "Local Area",

        "kerala":
            "Kerala",

        "india":
            "India",

        "abroad":
            "Abroad",

        "anywhere":
            "Anywhere"

    };


    return (
        locationNames[value] ||
        value ||
        "Not specified"
    );

}



/* =========================================================
   DISPLAY PROFILE SUMMARY
   ========================================================= */

function displayProfileSummary() {

    const education =
        document.getElementById(
            "summaryEducation"
        );

    const role =
        document.getElementById(
            "summaryRole"
        );

    const skills =
        document.getElementById(
            "summarySkills"
        );

    const location =
        document.getElementById(
            "summaryLocation"
        );

    const welcome =
        document.getElementById(
            "welcomeText"
        );


    if (education) {

        education.textContent =
            getEducationName(
                profile.educationLevel
            );

    }


    if (role) {

        role.textContent =
            profile.currentJob ||
            "Student / Exploring";

    }


    if (skills) {

        skills.textContent =
            `${(profile.skills || []).length} Skills`;

    }


    if (location) {

        location.textContent =
            getLocationName(
                profile.location
            );

    }


    if (welcome) {

        welcome.textContent =
            "Based on your profile, CareerGPS has identified career pathways that may match your education, skills, interests, and experience.";

    }

}



/* =========================================================
   DISPLAY CAREER RESULTS
   ========================================================= */

function displayCareerResults() {

    const container =
        document.getElementById(
            "careerResults"
        );


    const countElement =
        document.getElementById(
            "careerCount"
        );


    if (!container) {

        return;

    }


    const matches =
        calculateCareerMatches();


    /* Show maximum 6 careers */

    const topMatches =
        matches.slice(0, 6);


    if (countElement) {

        countElement.textContent =
            `${topMatches.length} Pathways`;

    }


    container.innerHTML = "";


    topMatches.forEach(
        (match, index) => {

            const career =
                match.career;


            const reason =
                match.reason;


            const matchingSkills =
                match.matchingSkills;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "career-card";


            /* -----------------------------------------
               CREATE SKILL TAGS
            ----------------------------------------- */

            let tagsHTML = "";


            if (
                matchingSkills.length > 0
            ) {

                tagsHTML =
                    matchingSkills
                        .map(
                            skill =>
                                `
                                <span class="career-tag">
                                    ${skill}
                                </span>
                                `
                        )
                        .join("");

            } else {

                tagsHTML = `
                    <span class="career-tag">
                        Profile Match
                    </span>
                `;

            }


            /* -----------------------------------------
               CAREER CARD
            ----------------------------------------- */

            card.innerHTML = `

                <div class="career-card-top">

                    <div class="career-icon">
                        ${career.icon}
                    </div>

                    <span class="match-label">
                        Pathway ${index + 1}
                    </span>

                </div>


                <h3>
                    ${career.name}
                </h3>


                <p class="career-card-description">
                    ${career.description}
                </p>


                <div class="career-tags">

                    ${tagsHTML}

                </div>


                <div class="why-match">

                    <div class="why-match-title">
                        WHY THIS APPEARS FOR YOU
                    </div>

                    <p>
                        ${reason}
                    </p>

                </div>


                <button
                    class="explore-career-button"
                    onclick="exploreCareer('${career.name}')">

                    Explore This Career →

                </button>

            `;


            container.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   EXPLORE CAREER
   ========================================================= */

function exploreCareer(
    careerName
) {

    /* Save selected career */

    localStorage.setItem(
        "selectedCareer",
        careerName
    );


    /* Open career details page */

    window.location.href =
        "career-details.html";

}



/* =========================================================
   DISPLAY USER SKILLS
   ========================================================= */

function displaySkills() {

    const container =
        document.getElementById(
            "skillsContainer"
        );


    if (!container) {

        return;

    }


    const skills =
        profile.skills || [];


    if (skills.length === 0) {

        container.innerHTML = `
            <span class="skill-pill">
                No skills selected yet
            </span>
        `;

        return;

    }


    container.innerHTML =
        skills
            .map(
                skill =>
                    `
                    <span class="skill-pill">
                        ✓ ${skill}
                    </span>
                    `
            )
            .join("");

}



/* =========================================================
   GO BACK TO PROFILE
   ========================================================= */

function goBackToProfile() {

    window.location.href =
        "profile.html";

}



/* =========================================================
   START OVER
   ========================================================= */

function startOver() {

    const confirmed =
        confirm(
            "Are you sure you want to start a new career profile?"
        );


    if (confirmed) {

        localStorage.removeItem(
            "careerGPSProfile"
        );


        localStorage.removeItem(
            "selectedCareer"
        );


        window.location.href =
            "profile.html";

    }

}



/* =========================================================
   START RESULTS PAGE
   ========================================================= */

displayProfileSummary();

displayCareerResults();

displaySkills();