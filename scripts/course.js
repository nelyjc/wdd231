// scripts/course.js
const coursesData = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.querySelector(".course");
    const buttons = document.querySelectorAll(".filters button");
    const totalCreditsElement = document.querySelector("#total-credits");
    let selectedCourses = [];

    if (!courseList || !buttons || !totalCreditsElement) return;

    const renderCourses = (filter) => {
        courseList.innerHTML = "";
        const filteredCourses = filter === "All" ? coursesData : coursesData.filter(c => c.subject === filter);
        filteredCourses.forEach(course => {
            const div = document.createElement("div");
            div.textContent = course.title;
            div.classList.add("course-item");
            if (course.completed) {
                div.classList.add("completed");
                
            }

            div.addEventListener("click", () => {
                const isSelected = selectedCourses.some(c => c.title === course.title);
                if (isSelected) {
                    selectedCourses = selectedCourses.filter(c => c.title !== course.title);
                    div.classList.remove("selected");
                } else {
                    selectedCourses.push(course);
                    div.classList.add("selected");
                }
                updateTotalCredits();
            });

            const isCurrentlySelected = selectedCourses.some(c => c.title === course.title);
            if (isCurrentlySelected) {
                div.classList.add("selected");
            }

            courseList.appendChild(div);
        });
        updateTotalCredits();
    };

    const updateTotalCredits = () => {
        const totalCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
        let completedCredits = coursesData.filter(course => course.completed).reduce((sum,course) => sum + course.credits, 0);

        totalCreditsElement.textContent = `Total Credits: 12 Completed Credits: ${completedCredits}`;
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            renderCourses(button.textContent);
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    renderCourses("All");
    updateTotalCredits();

    const allButton = document.querySelector('.filters button:first-child');
    if (allButton) {
        allButton.classList.add('active');
    }
});
