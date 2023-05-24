import requests
import json

# Make a GET request to the API endpoint
response = requests.get('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=20')

# Parse the JSON response
data = response.json()

# Extract the information from each job
jobs = data['results']

# Create a list to store the extracted job data
job_data = []

for job in jobs:
    # Extract category information
    category_label = job['category']['label']
    
    # Extract company information
    company_display_name = job['company']['display_name']
    company_created = job['created']
    company_description = job['description']
    
    # Extract location information
    location_area = job['location']['area']
    
    # Extract salary information
    salary_max = job['salary_max']

    title = job['title']
    
    # Create a dictionary with the extracted job data
    job_dict = {
        'Category': category_label,
        'Company Display Name': company_display_name,
        'Company Created': company_created,
        'Company Description': company_description,
        'Title': title,
        'Location Area': location_area,
        'Salary Max': salary_max
    }
    
    # Add the job dictionary to the job data list
    job_data.append(job_dict)

# Save the job data to a JSON file
with open('job_data.json', 'w') as outfile:
    json.dump(job_data, outfile)

print('Job data saved to job_data.json file.')
