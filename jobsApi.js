var myhttp1 = new XMLHttpRequest();
myhttp1.open('GET','https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=6',{
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

document.getElementById('va').addEventListener('click', function() {
  fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=6',{
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