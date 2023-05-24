import requests

# Make a GET request to the API endpoint
response = requests.get('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cc3c6bd4&app_key=3fe3e17eff25c1091b93ff10a8f6a8f3&results_per_page=6')

# Parse the JSON response
data = response.json()

# Extract the information from each job
jobs = data['results']
for job in jobs:
    # Extract category information
    category_label = job['category']['label']
    
    # Extract company information
    company_display_name = job['company']['display_name']
    #company_contract_time = job['contract_time']
    company_created = job['created']
    company_description = job['description']
    
    # Extract location information
    location_area = job['location']['area']
    
    # Extract salary information
    salary_max = job['salary_max']

    title = job['title']
    
    # Print the extracted information
    print('Category:', category_label)
    print('Company Display Name:', company_display_name)
    print('Title:', title)
    print('Company Created:', company_created)
    print('Company Description:', company_description)
    print('Location Area:', location_area)
    print('Salary Max:', salary_max)
    print('\n')