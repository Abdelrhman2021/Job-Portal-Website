var btngan = document.getElementById('va');
btngan.onclick = getJobs();

async function getJobs() {
    // Make a GET request to the API endpoint
    fetch('job_data.json')
        .then(response => response.json())
        .then(data => {
            // Extract the information from each job
            const jobs = data;

            // Get the container element in which to replace the job data
            const container = document.getElementById('jobs-Container');

            // Remove existing job elements
            while (container.firstChild) {
                container.firstChild.remove();
            }

            // Loop through the jobs and create HTML elements for each job
            for (const job of jobs) {
                // Extract the job information
                const categoryLabel = job.Category;
                const companyDisplayName = job['Company Display Name'];
                const companyCreated = job['Company Created'];
                const companyDescription = job['Company Description'];
                const locationArea = job['Location Area'];
                const salaryMax = job['Salary Max'];
                const title = job['Title'];

                // Create HTML elements for the job data
                const jobElement = document.createElement('div');
                jobElement.classList.add('box');
                jobElement.innerHTML = `
                <div class="company">
                  <img src="imgs/logo-placeholder.jpg" alt="">
                  <div>
                    <h3>${companyDisplayName}</h3>
                    <p>${companyCreated}</p>
                  </div>
                </div>
                <h3 class="job-title">${title}</h3>
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
            }

        })

        .catch(error => {
            // Handle error if the JSON file cannot be fetched
            console.error('Error:', error);
        });

}

var btngana = document.getElementById('searchJob');
btngana.onclick = searchJobs();

var jobTitle = document.getElementById('jtitle');
var jobLocation = document.getElementById('jloc');

async function searchJobs() {
    const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1e17914584msh439b3ecd9b04e01p17ae16jsn15db0eb1f70e',
            'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        },
        body: {
            search_terms: jobTitle.value,
            location: jobLocation.value,
            page: '1'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}