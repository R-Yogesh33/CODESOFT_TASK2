const jobs = [

    {
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Chennai",
        salary: "₹4 - ₹6 LPA",
        type: "Full Time"
    },

    {
        title: "Python Developer",
        company: "CodeWorks",
        location: "Bangalore",
        salary: "₹5 - ₹8 LPA",
        type: "Full Time"
    },

    {
        title: "Cyber Security Intern",
        company: "SecureNet",
        location: "Chennai",
        salary: "₹15,000 / Month",
        type: "Internship"
    },

    {
        title: "Web Developer",
        company: "Digital World",
        location: "Hyderabad",
        salary: "₹3 - ₹5 LPA",
        type: "Full Time"
    },

    {
        title: "Java Developer",
        company: "Software Hub",
        location: "Coimbatore",
        salary: "₹4 - ₹7 LPA",
        type: "Full Time"
    },

    {
        title: "UI/UX Designer",
        company: "Creative Studio",
        location: "Chennai",
        salary: "₹3 - ₹5 LPA",
        type: "Full Time"
    }

];


const jobList = document.getElementById("jobList");

const noJobs = document.getElementById("noJobs");


// Display all jobs when the page opens

displayJobs(jobs);


function displayJobs(jobArray) {

    jobList.innerHTML = "";


    if (jobArray.length === 0) {

        noJobs.style.display = "block";

        return;
    }


    noJobs.style.display = "none";


    jobArray.forEach(function(job) {

        const jobCard = document.createElement("div");

        jobCard.classList.add("job-card");


        jobCard.innerHTML = `

            <h3>${job.title}</h3>

            <p class="company">
                ${job.company}
            </p>

            <p class="job-info">
                📍 ${job.location}
            </p>

            <p class="job-info">
                💰 ${job.salary}
            </p>

            <span class="job-type">
                ${job.type}
            </span>

            <button
                class="apply-btn"
                onclick="applyJob('${job.title}')"
            >
                Apply Now
            </button>

        `;


        jobList.appendChild(jobCard);

    });

}


function searchJobs() {

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const locationText =
        document.getElementById("locationInput")
        .value
        .toLowerCase()
        .trim();


    const filteredJobs = jobs.filter(function(job) {

        const matchesSearch =
            job.title.toLowerCase().includes(searchText) ||
            job.company.toLowerCase().includes(searchText);


        const matchesLocation =
            job.location.toLowerCase().includes(locationText);


        return matchesSearch && matchesLocation;

    });


    displayJobs(filteredJobs);

}


function applyJob(jobTitle) {

    alert(
        "You selected the job: " + jobTitle
    );

}