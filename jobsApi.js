var myhttp1 = new XMLHttpRequest();
myhttp1.open('GET', 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=6', {
    headers: {
        'Accept': 'application/json'
    }
});
myhttp1.send();
myhttp1.addEventListener("readystatechange", function () {
    if (myhttp1.readyState == 4 && myhttp1.status == 200) {
        var data = JSON.parse(myhttp1.response);
        console.log(data)
    }
})

document.getElementById('va').addEventListener('click', function () {
    fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=6', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            const jobsContainer = document.getElementById('jobsContainer');

            // Iterate over each job and create HTML elements dynamically
            data.forEach(job => {
                const box = document.createElement('div');
                box.classList.add('box');

                // Create the job content
                const company = document.createElement('div');
                company.classList.add('company');
                // ... Create other job content elements ...

                // Append job content elements to the box
                box.appendChild(company);
                // ... Append other job content elements to the box ...

                // Append the box to the jobs container
                jobsContainer.appendChild(box);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

jtitle = document.getElementById('jtitle').value
jloc = document.getElementById('jloc').value

async function searchjobs() {
    const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1e17914584msh439b3ecd9b04e01p17ae16jsn15db0eb1f70e',
            'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        },
        body: {
            search_terms: 'python programmer',
            location: 'Chicago, IL',
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