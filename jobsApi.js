/*var myhttp = new XMLHttpRequest();
myhttp.open('GET', 'job_data.json');
myhttp.send();
myhttp.addEventListener("readystatechange", function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
        var data = JSON.parse(myhttp.response);
        console.log(data)
    }
})*/

 async function getJobs() {
    // Make a GET request to the API endpoint
    fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=20')
        .then(response => response.json())
        .then(data => {
            /*// Extract the information from each job
            const jobs = data.results;

            // Get the container element in which to replace the job data
            const container = document.getElementById('jobsContainer');

            // Remove existing job elements
            while (container.firstChild) {
                container.firstChild.remove();
            }

            // Loop through the jobs and create HTML elements for each job
            for (const job of jobs) {
                // Extract the job information
                const categoryLabel = job.category.label;
                const companyDisplayName = job.company.display_name;
                const companyCreated = job.created;
                const companyDescription = job.description;
                const locationArea = job.location.area;
                const salaryMax = job.salary_max;

                // Create HTML elements for the job data
                const jobElement = document.createElement('div');
                jobElement.classList.add('box');
                jobElement.innerHTML = `
                <div class="company">
                  <img src="imgs/icon-1.png" alt="">
                  <div>
                    <h3>${companyDisplayName}</h3>
                    <p>${companyCreated}</p>
                  </div>
                </div>
                <h3 class="job-title">${categoryLabel}</h3>
                <p class="location"><i class="fas fa-map-market-alt"></i> <span>${locationArea}</span></p>
                <div class="tags">
                  <p><i class="fas fa-indian-rupee-sign"></i><span>${salaryMax}</span></p>
                  <p><i class="fas fa-briefase"></i><span>Full-time</span></p>
                  <p><i class="fas fa-clock"></i><span>Day Shift</span></p>
                </div>
                <div class="flex-btn">
                  <a href="view_job.html" class="btn">View Details</a>
                  <button type="submit" class="far fa-heart" name="save"></button>
                </div>
              `;

                // Append the job element to the container
                container.appendChild(jobElement);
                console.log(data)
            }*/
            console.log(data)
        })
        

}