// ==========================================
// CareerGPS - Career Details
// ==========================================

// Get saved profile and selected career
const savedProfile = localStorage.getItem("careerGPSProfile");
const selectedCareer = localStorage.getItem("selectedCareer");

// If no career is selected, go back to results
if (!selectedCareer) {
    window.location.href = "results.html";
}

// Convert saved profile into an object
const profile = savedProfile
    ? JSON.parse(savedProfile)
    : {};


// ==========================================
// CAREER DATABASE
// ==========================================

const careerDetails = {

    "Robotics Program Coordinator": {
        icon: "🤖",

        description:
            "A Robotics Program Coordinator plans, manages, and supports robotics and STEM education programs in schools, training centres, and educational organisations.",

        overview:
            "This career combines robotics knowledge, teaching, communication, coordination, and project management. You may work with students, teachers, schools, robotics trainers, and technical teams to successfully deliver robotics programs.",

        skills: [
            "Robotics",
            "Electronics",
            "Arduino",
            "Programming",
            "Communication",
            "Team Coordination",
            "Project Management",
            "Problem Solving"
        ],

        futureSkills: [
            "Advanced Robotics",
            "Python",
            "Arduino / ESP32",
            "IoT",
            "Leadership",
            "Program Management",
            "Technical Documentation"
        ],

        entryRoles: [
            "Robotics Trainer",
            "Robotics Mentor",
            "STEM Trainer",
            "Robotics Program Assistant",
            "Technical Program Coordinator"
        ],

        learningOptions: [
            "Robotics and Arduino courses",
            "Python programming",
            "IoT and ESP32 projects",
            "Project management",
            "Leadership and communication training"
        ],

        journey: [
            "Robotics Trainer / Mentor",
            "Robotics Program Coordinator",
            "Senior Program Coordinator",
            "Robotics Program Manager",
            "STEM / Robotics Education Manager"
        ]
    },


    "STEM Education Specialist": {
        icon: "🎓",

        description:
            "A STEM Education Specialist develops and supports science, technology, engineering, and mathematics learning programs.",

        overview:
            "This role combines technology knowledge with education. STEM specialists design activities, conduct workshops, support teachers, and help students develop practical technical skills.",

        skills: [
            "STEM",
            "Teaching",
            "Robotics",
            "Communication",
            "Problem Solving",
            "Programming",
            "Project Design"
        ],

        futureSkills: [
            "Curriculum Development",
            "Advanced Robotics",
            "Educational Technology",
            "Python",
            "AI",
            "Leadership"
        ],

        entryRoles: [
            "STEM Trainer",
            "STEM Educator",
            "Robotics Instructor",
            "STEM Program Assistant",
            "Educational Technology Assistant"
        ],

        learningOptions: [
            "STEM education",
            "Robotics",
            "Educational technology",
            "Python programming",
            "Curriculum design"
        ],

        journey: [
            "STEM Trainer",
            "STEM Education Specialist",
            "Senior STEM Specialist",
            "STEM Program Manager",
            "STEM Education Lead"
        ]
    },


    "Technical Training Manager": {
        icon: "👨‍🏫",

        description:
            "A Technical Training Manager plans and manages technical training programs for students, employees, or other learners.",

        overview:
            "Technical Training Managers coordinate trainers, develop training plans, monitor learning outcomes, and communicate with organisations and stakeholders.",

        skills: [
            "Training",
            "Communication",
            "Technical Knowledge",
            "Leadership",
            "Team Management",
            "Presentation",
            "Project Management"
        ],

        futureSkills: [
            "Leadership",
            "Training Management",
            "Project Management",
            "Learning Management Systems",
            "Data Analysis",
            "Strategic Planning"
        ],

        entryRoles: [
            "Technical Trainer",
            "Training Coordinator",
            "Technical Instructor",
            "Learning Coordinator",
            "Training Program Assistant"
        ],

        learningOptions: [
            "Technical training",
            "Leadership",
            "Project management",
            "Presentation skills",
            "Learning management systems"
        ],

        journey: [
            "Technical Trainer",
            "Training Coordinator",
            "Technical Training Manager",
            "Senior Training Manager",
            "Learning and Development Manager"
        ]
    },


    "Academic Program Manager": {
        icon: "📚",

        description:
            "An Academic Program Manager coordinates educational programs, schedules, people, resources, and academic activities.",

        overview:
            "This career is suitable for people who enjoy education, organisation, communication, and managing multiple activities. The role may involve coordinating institutions, trainers, students, and academic teams.",

        skills: [
            "Communication",
            "Coordination",
            "Education",
            "Leadership",
            "Planning",
            "Project Management",
            "Problem Solving"
        ],

        futureSkills: [
            "Academic Administration",
            "Leadership",
            "Project Management",
            "Data Analysis",
            "Strategic Planning",
            "Team Management"
        ],

        entryRoles: [
            "Academic Coordinator",
            "Program Coordinator",
            "Education Program Assistant",
            "Academic Operations Assistant",
            "Training Coordinator"
        ],

        learningOptions: [
            "Project management",
            "Education management",
            "Leadership",
            "Data analysis",
            "Communication"
        ],

        journey: [
            "Program Assistant",
            "Academic Coordinator",
            "Academic Program Manager",
            "Senior Program Manager",
            "Academic Operations Lead"
        ]
    },


    "EdTech Specialist": {
        icon: "💻",

        description:
            "An EdTech Specialist uses technology to improve teaching, learning, training, and educational experiences.",

        overview:
            "EdTech specialists work with digital learning platforms, educational software, technology-based activities, and digital content.",

        skills: [
            "Technology",
            "Education",
            "Communication",
            "Programming",
            "Problem Solving",
            "Digital Tools"
        ],

        futureSkills: [
            "Learning Management Systems",
            "AI in Education",
            "Data Analysis",
            "Web Development",
            "Instructional Design",
            "Educational Technology"
        ],

        entryRoles: [
            "EdTech Support Specialist",
            "Educational Technology Assistant",
            "Digital Learning Coordinator",
            "Technical Support Executive",
            "EdTech Trainer"
        ],

        learningOptions: [
            "Web development",
            "Educational technology",
            "AI tools",
            "Instructional design",
            "Learning management systems"
        ],

        journey: [
            "EdTech Support",
            "EdTech Specialist",
            "Senior EdTech Specialist",
            "EdTech Program Manager",
            "Educational Technology Lead"
        ]
    },


    "Embedded Systems Developer": {
        icon: "🔧",

        description:
            "An Embedded Systems Developer designs and programs software that runs inside electronic devices and hardware systems.",

        overview:
            "Embedded developers work with microcontrollers, sensors, electronics, communication protocols, and programming languages to create intelligent hardware systems.",

        skills: [
            "Programming",
            "C",
            "C++",
            "Electronics",
            "Microcontrollers",
            "Arduino",
            "Problem Solving"
        ],

        futureSkills: [
            "Embedded C",
            "C++",
            "ESP32",
            "STM32",
            "RTOS",
            "IoT",
            "PCB Design"
        ],

        entryRoles: [
            "Junior Embedded Developer",
            "Embedded Systems Trainee",
            "Firmware Developer",
            "IoT Developer",
            "Embedded Engineer"
        ],

        learningOptions: [
            "Embedded C",
            "Arduino",
            "ESP32",
            "STM32",
            "IoT",
            "RTOS"
        ],

        journey: [
            "Embedded Trainee",
            "Junior Embedded Developer",
            "Embedded Systems Developer",
            "Senior Embedded Engineer",
            "Embedded Systems Architect"
        ]
    },


    "Electronics Engineer": {
        icon: "⚡",

        description:
            "An Electronics Engineer designs, develops, tests, and maintains electronic circuits and systems.",

        overview:
            "Electronics engineers work with circuits, components, sensors, microcontrollers, communication systems, and electronic devices.",

        skills: [
            "Electronics",
            "Circuit Design",
            "Microcontrollers",
            "Sensors",
            "Problem Solving",
            "Programming"
        ],

        futureSkills: [
            "PCB Design",
            "Embedded Systems",
            "IoT",
            "Advanced Circuit Design",
            "Signal Processing",
            "Microcontrollers"
        ],

        entryRoles: [
            "Junior Electronics Engineer",
            "Electronics Technician",
            "Embedded Trainee",
            "Hardware Engineer Trainee",
            "Electronics Design Assistant"
        ],

        learningOptions: [
            "Circuit design",
            "PCB design",
            "Embedded systems",
            "Arduino",
            "ESP32",
            "IoT"
        ],

        journey: [
            "Electronics Trainee",
            "Junior Electronics Engineer",
            "Electronics Engineer",
            "Senior Electronics Engineer",
            "Hardware Design Lead"
        ]
    },


    "Data Analyst": {
        icon: "📊",

        description:
            "A Data Analyst collects, cleans, analyses, and visualises data to help organisations make informed decisions.",

        overview:
            "Data analysts work with datasets and use tools such as Excel, SQL, Python, and visualisation platforms to identify patterns and communicate insights.",

        skills: [
            "Data Analysis",
            "Excel",
            "Python",
            "Statistics",
            "Problem Solving",
            "Communication"
        ],

        futureSkills: [
            "SQL",
            "Python",
            "Power BI",
            "Tableau",
            "Statistics",
            "Machine Learning"
        ],

        entryRoles: [
            "Junior Data Analyst",
            "Data Analyst Intern",
            "Reporting Analyst",
            "Business Data Assistant",
            "Data Associate"
        ],

        learningOptions: [
            "Python",
            "SQL",
            "Excel",
            "Power BI",
            "Tableau",
            "Statistics"
        ],

        journey: [
            "Data Analyst Intern",
            "Junior Data Analyst",
            "Data Analyst",
            "Senior Data Analyst",
            "Data Analytics Lead"
        ]
    },


    "Research Professional": {
        icon: "🔬",

        description:
            "Research professionals investigate problems, analyse information, conduct experiments, and develop new knowledge or solutions.",

        overview:
            "Research careers can exist across technology, engineering, science, education, healthcare, and other fields. Strong analytical and problem-solving skills are important.",

        skills: [
            "Research",
            "Problem Solving",
            "Analysis",
            "Technical Knowledge",
            "Communication",
            "Documentation"
        ],

        futureSkills: [
            "Research Methodology",
            "Data Analysis",
            "Academic Writing",
            "Statistics",
            "Programming",
            "Scientific Communication"
        ],

        entryRoles: [
            "Research Assistant",
            "Research Intern",
            "Technical Research Assistant",
            "Project Assistant",
            "Research Associate"
        ],

        learningOptions: [
            "Research methodology",
            "Data analysis",
            "Academic writing",
            "Statistics",
            "Programming"
        ],

        journey: [
            "Research Intern",
            "Research Assistant",
            "Research Associate",
            "Senior Researcher",
            "Research Lead"
        ]
    },


    "Healthcare Technology Specialist": {
        icon: "🏥",

        description:
            "Healthcare Technology Specialists work with technology used in healthcare, medical devices, health software, and digital health systems.",

        overview:
            "This field combines technology with healthcare. Professionals may work with medical devices, healthcare software, data systems, or technology implementation.",

        skills: [
            "Technology",
            "Electronics",
            "Programming",
            "Problem Solving",
            "Communication",
            "Research"
        ],

        futureSkills: [
            "Medical Devices",
            "Biomedical Technology",
            "Healthcare Data",
            "IoT",
            "AI in Healthcare",
            "Regulatory Knowledge"
        ],

        entryRoles: [
            "Healthcare Technology Assistant",
            "Medical Device Trainee",
            "Biomedical Technology Assistant",
            "Health IT Support",
            "Healthcare Technology Associate"
        ],

        learningOptions: [
            "Biomedical technology",
            "Medical devices",
            "Healthcare IT",
            "IoT",
            "Data analysis"
        ],

        journey: [
            "Healthcare Technology Assistant",
            "Healthcare Technology Specialist",
            "Senior Specialist",
            "Healthcare Technology Manager",
            "Digital Health Lead"
        ]
    },


    "Biotechnology Professional": {
        icon: "🧬",

        description:
            "Biotechnology professionals apply biological science and technology to research, healthcare, agriculture, and industrial applications.",

        overview:
            "Biotechnology combines biology with technology and scientific research. Career opportunities exist in research, laboratories, healthcare, agriculture, and biotechnology companies.",

        skills: [
            "Biology",
            "Research",
            "Laboratory Skills",
            "Analysis",
            "Problem Solving",
            "Scientific Communication"
        ],

        futureSkills: [
            "Molecular Biology",
            "Bioinformatics",
            "Data Analysis",
            "Genetics",
            "Laboratory Techniques",
            "Scientific Research"
        ],

        entryRoles: [
            "Research Assistant",
            "Laboratory Assistant",
            "Biotechnology Trainee",
            "Research Intern",
            "Biotech Associate"
        ],

        learningOptions: [
            "Biotechnology",
            "Molecular biology",
            "Bioinformatics",
            "Data analysis",
            "Scientific research"
        ],

        journey: [
            "Research Intern",
            "Biotechnology Assistant",
            "Biotechnology Professional",
            "Senior Research Associate",
            "Biotechnology Research Lead"
        ]
    }
};


// ==========================================
// LEARNING ROADMAP DATABASE
// ==========================================

const learningRoadmaps = {

    "Robotics Program Coordinator": [
        {
            skill: "Robotics Fundamentals",
            description:
                "Strengthen your understanding of robotics concepts, sensors, actuators, and practical robot systems.",
            level: "Beginner"
        },
        {
            skill: "Python Programming",
            description:
                "Learn Python fundamentals and use programming to solve technical and automation problems.",
            level: "Beginner"
        },
        {
            skill: "IoT and ESP32",
            description:
                "Learn how connected devices communicate and build practical ESP32-based projects.",
            level: "Intermediate"
        },
        {
            skill: "Project Management",
            description:
                "Develop skills for planning, coordinating, monitoring, and completing technical programs.",
            level: "Intermediate"
        },
        {
            skill: "Leadership",
            description:
                "Build team coordination, communication, delegation, and decision-making skills.",
            level: "Development"
        }
    ],


    "STEM Education Specialist": [
        {
            skill: "STEM Education",
            description:
                "Learn how to design practical science, technology, engineering, and mathematics activities.",
            level: "Beginner"
        },
        {
            skill: "Robotics",
            description:
                "Strengthen robotics knowledge through hands-on projects and classroom activities.",
            level: "Beginner"
        },
        {
            skill: "Python Programming",
            description:
                "Develop programming fundamentals that can support STEM learning and technical projects.",
            level: "Beginner"
        },
        {
            skill: "Educational Technology",
            description:
                "Explore digital tools and technologies that improve teaching and learning experiences.",
            level: "Intermediate"
        },
        {
            skill: "Curriculum Development",
            description:
                "Learn how to plan structured learning activities, lessons, and educational programs.",
            level: "Intermediate"
        }
    ],


    "Technical Training Manager": [
        {
            skill: "Technical Training",
            description:
                "Learn how to design and deliver effective technical training sessions.",
            level: "Beginner"
        },
        {
            skill: "Communication and Presentation",
            description:
                "Improve professional communication, presentation, and explanation skills.",
            level: "Beginner"
        },
        {
            skill: "Project Management",
            description:
                "Learn how to plan training programs, schedules, resources, and deliverables.",
            level: "Intermediate"
        },
        {
            skill: "Leadership",
            description:
                "Develop skills for guiding trainers, coordinating teams, and handling responsibilities.",
            level: "Intermediate"
        },
        {
            skill: "Learning Management Systems",
            description:
                "Understand digital platforms used to manage courses, learners, assessments, and training content.",
            level: "Intermediate"
        }
    ],


    "Academic Program Manager": [
        {
            skill: "Communication",
            description:
                "Develop clear professional communication for working with students, teachers, and institutions.",
            level: "Beginner"
        },
        {
            skill: "Planning and Coordination",
            description:
                "Learn how to organise schedules, activities, resources, and people efficiently.",
            level: "Beginner"
        },
        {
            skill: "Project Management",
            description:
                "Build skills in project planning, execution, monitoring, and documentation.",
            level: "Intermediate"
        },
        {
            skill: "Leadership",
            description:
                "Develop team management, delegation, and decision-making abilities.",
            level: "Intermediate"
        },
        {
            skill: "Data Analysis",
            description:
                "Learn to use data to monitor academic programs and support informed decisions.",
            level: "Intermediate"
        }
    ],


    "EdTech Specialist": [
        {
            skill: "Digital Tools",
            description:
                "Become comfortable with educational software, digital platforms, and productivity tools.",
            level: "Beginner"
        },
        {
            skill: "Programming Fundamentals",
            description:
                "Build basic programming knowledge for working with educational technology.",
            level: "Beginner"
        },
        {
            skill: "Web Development",
            description:
                "Learn HTML, CSS, and JavaScript to create interactive educational applications.",
            level: "Intermediate"
        },
        {
            skill: "Instructional Design",
            description:
                "Learn how to design effective digital learning experiences and educational content.",
            level: "Intermediate"
        },
        {
            skill: "AI in Education",
            description:
                "Explore how artificial intelligence can support personalised and technology-enabled learning.",
            level: "Advanced"
        }
    ],


    "Embedded Systems Developer": [
        {
            skill: "Programming Fundamentals",
            description:
                "Strengthen programming logic and problem-solving skills before moving into embedded development.",
            level: "Beginner"
        },
        {
            skill: "Embedded C",
            description:
                "Learn C programming concepts used to develop firmware for microcontrollers.",
            level: "Intermediate"
        },
        {
            skill: "Arduino and Microcontrollers",
            description:
                "Build practical projects using Arduino, sensors, motors, and microcontrollers.",
            level: "Intermediate"
        },
        {
            skill: "ESP32 and IoT",
            description:
                "Learn wireless communication and connected-device development using ESP32.",
            level: "Intermediate"
        },
        {
            skill: "STM32 and RTOS",
            description:
                "Move toward professional embedded development using STM32 platforms and real-time operating systems.",
            level: "Advanced"
        }
    ],


    "Electronics Engineer": [
        {
            skill: "Circuit Design",
            description:
                "Strengthen your understanding of electronic circuits, components, voltage, current, and signals.",
            level: "Beginner"
        },
        {
            skill: "Microcontrollers",
            description:
                "Learn how microcontrollers interact with sensors, actuators, and electronic circuits.",
            level: "Intermediate"
        },
        {
            skill: "Arduino",
            description:
                "Build practical electronics projects using Arduino and common components.",
            level: "Beginner"
        },
        {
            skill: "PCB Design",
            description:
                "Learn how electronic circuits are converted into professional printed circuit boards.",
            level: "Intermediate"
        },
        {
            skill: "Embedded Systems and IoT",
            description:
                "Develop skills in intelligent connected electronic systems.",
            level: "Advanced"
        }
    ],


    "Data Analyst": [
        {
            skill: "Excel",
            description:
                "Learn spreadsheet formulas, data cleaning, sorting, filtering, and basic analysis.",
            level: "Beginner"
        },
        {
            skill: "Statistics",
            description:
                "Understand basic statistical concepts used to interpret and analyse datasets.",
            level: "Beginner"
        },
        {
            skill: "SQL",
            description:
                "Learn how to retrieve, filter, join, and analyse data stored in databases.",
            level: "Intermediate"
        },
        {
            skill: "Python for Data Analysis",
            description:
                "Use Python libraries and programming techniques to clean and analyse data.",
            level: "Intermediate"
        },
        {
            skill: "Power BI / Tableau",
            description:
                "Learn how to transform data into interactive dashboards and visual reports.",
            level: "Intermediate"
        }
    ],


    "Research Professional": [
        {
            skill: "Research Methodology",
            description:
                "Learn how to define research questions, collect information, and structure investigations.",
            level: "Beginner"
        },
        {
            skill: "Data Analysis",
            description:
                "Develop skills for interpreting experimental, survey, or research data.",
            level: "Intermediate"
        },
        {
            skill: "Statistics",
            description:
                "Learn statistical methods that support evidence-based research.",
            level: "Intermediate"
        },
        {
            skill: "Academic Writing",
            description:
                "Develop skills for writing reports, research papers, and technical documentation.",
            level: "Intermediate"
        },
        {
            skill: "Programming for Research",
            description:
                "Use programming tools to automate analysis and work with larger datasets.",
            level: "Advanced"
        }
    ],


    "Healthcare Technology Specialist": [
        {
            skill: "Healthcare Technology",
            description:
                "Understand how technology is applied to healthcare systems and services.",
            level: "Beginner"
        },
        {
            skill: "Medical Devices",
            description:
                "Learn the fundamentals of electronic and technology-based medical devices.",
            level: "Intermediate"
        },
        {
            skill: "Healthcare IT",
            description:
                "Explore software, information systems, and digital technologies used in healthcare.",
            level: "Intermediate"
        },
        {
            skill: "Healthcare Data",
            description:
                "Learn the fundamentals of working with healthcare-related information and datasets.",
            level: "Intermediate"
        },
        {
            skill: "AI and IoT in Healthcare",
            description:
                "Explore connected healthcare devices and artificial intelligence applications.",
            level: "Advanced"
        }
    ],


    "Biotechnology Professional": [
        {
            skill: "Biotechnology Fundamentals",
            description:
                "Build a foundation in biotechnology concepts and applications.",
            level: "Beginner"
        },
        {
            skill: "Molecular Biology",
            description:
                "Learn the fundamentals of DNA, RNA, proteins, and molecular processes.",
            level: "Intermediate"
        },
        {
            skill: "Laboratory Techniques",
            description:
                "Develop practical knowledge of common laboratory procedures and techniques.",
            level: "Intermediate"
        },
        {
            skill: "Data Analysis",
            description:
                "Learn to analyse biological and experimental datasets.",
            level: "Intermediate"
        },
        {
            skill: "Bioinformatics",
            description:
                "Explore the use of computing and data analysis in biological research.",
            level: "Advanced"
        }
    ]
};


// ==========================================
// HELPER FUNCTION
// Compare skills intelligently
// ==========================================

function skillMatches(userSkill, careerSkill) {

    const user =
        String(userSkill)
            .toLowerCase()
            .trim();

    const career =
        String(careerSkill)
            .toLowerCase()
            .trim();

    if (!user || !career) {
        return false;
    }

    // Exact match
    if (user === career) {
        return true;
    }

    // One contains the other
    if (
        user.includes(career) ||
        career.includes(user)
    ) {
        return true;
    }

    // Common skill variations
    const skillGroups = [

        ["programming", "python", "c", "c++", "javascript"],

        ["robotics", "advanced robotics"],

        ["electronics", "circuit design"],

        ["communication", "presentation"],

        ["project management", "project design", "planning"],

        ["team coordination", "team management", "leadership"],

        ["data analysis", "analysis"],

        ["research", "research methodology"],

        ["technology", "digital tools"],

        ["education", "teaching", "training"],

        ["arduino", "microcontrollers"],

        ["iot", "esp32"],

        ["biology", "molecular biology"],

        ["laboratory skills", "laboratory techniques"],

        ["scientific communication", "communication"]
    ];

    return skillGroups.some(group =>
        group.includes(user) &&
        group.includes(career)
    );
}


// ==========================================
// DISPLAY CAREER INFORMATION
// ==========================================

function displayCareerDetails() {

    const career =
        careerDetails[selectedCareer];

    // If career doesn't exist
    if (!career) {

        document.getElementById(
            "careerName"
        ).textContent =
            "Career Not Found";

        document.getElementById(
            "careerDescription"
        ).textContent =
            "The selected career could not be found.";

        return;
    }


    // ==========================================
    // BASIC CAREER INFORMATION
    // ==========================================

    document.getElementById(
        "careerIcon"
    ).textContent =
        career.icon;

    document.getElementById(
        "careerName"
    ).textContent =
        selectedCareer;

    document.getElementById(
        "careerDescription"
    ).textContent =
        career.description;

    document.getElementById(
        "careerOverview"
    ).textContent =
        career.overview;


    // ==========================================
    // USER SKILLS
    // ==========================================

    const userSkills =
        Array.isArray(profile.skills)
            ? profile.skills
            : [];


    // ==========================================
    // MATCHING SKILLS
    // ==========================================

    const matchingSkills =
        userSkills.filter(userSkill =>
            career.skills.some(careerSkill =>
                skillMatches(
                    userSkill,
                    careerSkill
                )
            )
        );


    // ==========================================
    // WHY THIS CAREER MATCHES YOU
    // ==========================================

    const reasonElement =
        document.getElementById(
            "careerReason"
        );

    let reasons = [];


    if (matchingSkills.length > 0) {

        reasons.push(
            `You already have relevant skills such as ${matchingSkills
                .slice(0, 3)
                .join(", ")}.`
        );
    }


    if (
        profile.interests &&
        profile.interests.length > 0
    ) {

        const interestMatches =
            profile.interests.filter(
                interest =>
                    career.skills.some(
                        careerSkill =>
                            skillMatches(
                                interest,
                                careerSkill
                            )
                    )
            );

        if (interestMatches.length > 0) {

            reasons.push(
                "Your interests also connect with this career pathway."
            );
        }
    }


    if (reasons.length === 0) {

        reasons.push(
            "This career was identified as one of the possible pathways based on your overall profile."
        );
    }


    reasonElement.textContent =
        reasons.join(" ");


    // ==========================================
    // CURRENT SKILLS
    // ==========================================

    const currentSkillsContainer =
        document.getElementById(
            "currentSkills"
        );


    if (matchingSkills.length === 0) {

        currentSkillsContainer.innerHTML =
            `<div class="skill-pill">
                Start developing the core skills for this career
            </div>`;

    } else {

        currentSkillsContainer.innerHTML =
            matchingSkills
                .map(
                    skill =>
                        `<div class="skill-pill">
                            ✓ ${skill}
                        </div>`
                )
                .join("");
    }


    // ==========================================
    // FUTURE SKILLS
    // ==========================================

    const futureSkillsContainer =
        document.getElementById(
            "futureSkills"
        );


    futureSkillsContainer.innerHTML =
        career.futureSkills
            .map(
                skill =>
                    `<div class="skill-pill">
                        + ${skill}
                    </div>`
            )
            .join("");


    // ==========================================
    // SKILL GAP ANALYSIS
    // ==========================================

    calculateSkillGap(
        career,
        userSkills,
        matchingSkills
    );


    // ==========================================
    // PERSONALIZED LEARNING ROADMAP
    // ==========================================

    generateLearningRoadmap(
        career,
        userSkills,
        matchingSkills
    );


    // ==========================================
    // ENTRY LEVEL ROLES
    // ==========================================

    const entryRolesContainer =
        document.getElementById(
            "entryRoles"
        );


    entryRolesContainer.innerHTML =
        career.entryRoles
            .map(
                role =>
                    `<div class="role-card">
                        <span>💼</span>
                        <p>${role}</p>
                    </div>`
            )
            .join("");


    // ==========================================
    // LEARNING OPTIONS
    // ==========================================

    const learningContainer =
        document.getElementById(
            "learningOptions"
        );


    learningContainer.innerHTML =
        career.learningOptions
            .map(
                option =>
                    `<div class="learning-card">
                        <span>📘</span>
                        <p>${option}</p>
                    </div>`
            )
            .join("");


    // ==========================================
    // CAREER JOURNEY
    // ==========================================

    const journeyContainer =
        document.getElementById(
            "careerJourney"
        );


    journeyContainer.innerHTML =
        career.journey
            .map(
                (step, index) =>
                    `<div class="journey-step">

                        <div class="journey-number">
                            ${index + 1}
                        </div>

                        <div class="journey-content">
                            <h4>${step}</h4>
                        </div>

                    </div>`
            )
            .join("");
}


// ==========================================
// CALCULATE SKILL GAP
// ==========================================

function calculateSkillGap(
    career,
    userSkills,
    matchingSkills
) {

    // Get HTML elements
    const percentageElement =
        document.getElementById(
            "skillMatchPercentage"
        );

    const messageElement =
        document.getElementById(
            "skillMatchMessage"
        );

    const progressBar =
        document.getElementById(
            "skillProgressBar"
        );

    const gapCurrentSkills =
        document.getElementById(
            "gapCurrentSkills"
        );

    const gapFutureSkills =
        document.getElementById(
            "gapFutureSkills"
        );


    // If the new HTML elements don't exist,
    // safely stop this function.
    if (
        !percentageElement ||
        !messageElement ||
        !progressBar ||
        !gapCurrentSkills ||
        !gapFutureSkills
    ) {
        return;
    }


    // ==========================================
    // CALCULATE MATCH PERCENTAGE
    // ==========================================

    const totalRequiredSkills =
        career.skills.length;

    const matchedSkillCount =
        matchingSkills.length;

    let percentage = 0;

    if (totalRequiredSkills > 0) {

        percentage =
            Math.round(
                (
                    matchedSkillCount /
                    totalRequiredSkills
                ) * 100
            );
    }


    // Keep percentage between 0 and 100
    percentage =
        Math.max(
            0,
            Math.min(
                100,
                percentage
            )
        );


    // ==========================================
    // DISPLAY PERCENTAGE
    // ==========================================

    percentageElement.textContent =
        `${percentage}%`;


    // ==========================================
    // PROGRESS BAR
    // ==========================================

    setTimeout(() => {

        progressBar.style.width =
            `${percentage}%`;

    }, 100);


    // ==========================================
    // DISPLAY MESSAGE
    // ==========================================

    if (percentage >= 80) {

        messageElement.textContent =
            "You already have a strong foundation for this pathway.";

    } else if (percentage >= 60) {

        messageElement.textContent =
            "You have a good foundation. A few additional skills can strengthen your pathway.";

    } else if (percentage >= 40) {

        messageElement.textContent =
            "You have some relevant skills. Focus on developing the missing skills next.";

    } else if (percentage > 0) {

        messageElement.textContent =
            "You have a starting foundation. Building the required skills can help you move toward this pathway.";

    } else {

        messageElement.textContent =
            "This pathway will require you to build several core skills.";
    }


    // ==========================================
    // DISPLAY EXISTING MATCHING SKILLS
    // ==========================================

    if (matchingSkills.length === 0) {

        gapCurrentSkills.innerHTML =
            `<div class="gap-skill-item empty">
                No direct skill matches yet
            </div>`;

    } else {

        gapCurrentSkills.innerHTML =
            matchingSkills
                .map(
                    skill =>
                        `<div class="gap-skill-item matched">
                            <span>✓</span>
                            ${skill}
                        </div>`
                )
                .join("");
    }


    // ==========================================
    // DETERMINE MISSING SKILLS
    // ==========================================

    const missingSkills =
        career.skills.filter(
            careerSkill =>
                !matchingSkills.some(
                    userSkill =>
                        skillMatches(
                            userSkill,
                            careerSkill
                        )
                )
        );


    // ==========================================
    // DISPLAY MISSING SKILLS
    // ==========================================

    if (missingSkills.length === 0) {

        gapFutureSkills.innerHTML =
            `<div class="gap-skill-item matched">
                <span>✓</span>
                You have matched all the core skills listed for this pathway.
            </div>`;

    } else {

        gapFutureSkills.innerHTML =
            missingSkills
                .map(
                    skill =>
                        `<div class="gap-skill-item needed">
                            <span>+</span>
                            ${skill}
                        </div>`
                )
                .join("");
    }
}


// ==========================================
// GENERATE PERSONALIZED LEARNING ROADMAP
// ==========================================

function generateLearningRoadmap(
    career,
    userSkills,
    matchingSkills
) {

    const roadmapContainer =
        document.getElementById(
            "learningRoadmap"
        );

    const nextSkillElement =
        document.getElementById(
            "recommendedNextSkill"
        );

    const nextDescriptionElement =
        document.getElementById(
            "recommendedNextDescription"
        );


    // If the new HTML section doesn't exist,
    // safely stop this function.
    if (
        !roadmapContainer ||
        !nextSkillElement ||
        !nextDescriptionElement
    ) {
        return;
    }


    // ==========================================
    // GET ROADMAP FOR SELECTED CAREER
    // ==========================================

    let roadmap =
        learningRoadmaps[selectedCareer];


    // If no roadmap is found,
    // create a basic roadmap from career data.
    if (!roadmap) {

        roadmap =
            career.futureSkills.map(
                skill => ({
                    skill: skill,

                    description:
                        `Develop your knowledge and practical ability in ${skill}.`,

                    level: "Development"
                })
            );
    }


    // ==========================================
    // FIND USER'S MISSING SKILLS
    // ==========================================

    const missingCareerSkills =
        career.skills.filter(
            careerSkill =>
                !matchingSkills.some(
                    userSkill =>
                        skillMatches(
                            userSkill,
                            careerSkill
                        )
                )
        );


    // ==========================================
    // CREATE PERSONALIZED ORDER
    // ==========================================

    let personalizedRoadmap =
        [...roadmap];


    /*
        If the user is missing a skill that appears
        in the roadmap, move that skill toward the
        beginning of the learning sequence.
    */

    personalizedRoadmap.sort(
        (a, b) => {

            const aMatchesMissing =
                missingCareerSkills.some(
                    missingSkill =>
                        skillMatches(
                            missingSkill,
                            a.skill
                        )
                );

            const bMatchesMissing =
                missingCareerSkills.some(
                    missingSkill =>
                        skillMatches(
                            missingSkill,
                            b.skill
                        )
                );


            if (
                aMatchesMissing &&
                !bMatchesMissing
            ) {
                return -1;
            }

            if (
                !aMatchesMissing &&
                bMatchesMissing
            ) {
                return 1;
            }

            return 0;
        }
    );


    // ==========================================
    // LIMIT ROADMAP
    // ==========================================

    /*
        Show a maximum of five learning steps
        so the page remains clean and readable.
    */

    personalizedRoadmap =
        personalizedRoadmap.slice(0, 5);


    // ==========================================
    // DISPLAY ROADMAP
    // ==========================================

    roadmapContainer.innerHTML =
        personalizedRoadmap
            .map(
                (item, index) => {

                    const isFirst =
                        index === 0;

                    return `
                        <div class="roadmap-step">

                            <div class="roadmap-number">
                                ${String(index + 1).padStart(2, "0")}
                            </div>

                            <div class="roadmap-line"></div>

                            <div class="roadmap-content">

                                <div class="roadmap-top">

                                    <h3>
                                        ${item.skill}
                                    </h3>

                                    <span class="roadmap-level">
                                        ${item.level}
                                    </span>

                                </div>

                                <p>
                                    ${item.description}
                                </p>

                                ${
                                    isFirst
                                        ? `
                                            <div class="roadmap-current">
                                                START HERE
                                            </div>
                                          `
                                        : ""
                                }

                            </div>

                        </div>
                    `;
                }
            )
            .join("");


    // ==========================================
    // RECOMMENDED NEXT STEP
    // ==========================================

    if (
        personalizedRoadmap.length > 0
    ) {

        const nextStep =
            personalizedRoadmap[0];


        nextSkillElement.textContent =
            nextStep.skill;


        nextDescriptionElement.textContent =
            nextStep.description;

    } else {

        nextSkillElement.textContent =
            "Continue strengthening your existing skills";


        nextDescriptionElement.textContent =
            "Your current profile already contains several relevant skills. Continue building practical experience and advanced knowledge.";
    }
}


// ==========================================
// BACK TO RESULTS
// ==========================================

function goBackToResults() {

    window.location.href =
        "results.html";
}


// ==========================================
// START OVER
// ==========================================

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


// ==========================================
// START PAGE
// ==========================================

displayCareerDetails();