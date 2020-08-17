# github_repository_web_scraping
Contains a project to scrape a github public repository to get total of lines and bytes group by extension


## API url

https://githubrepositorywebscraping.herokuapp.com


## Endpoints

### GET /scrape

**query_parameter**:

key: repositoryName

value: "public repository name"


#### Example: 

**query_parameter**:

key: repositoryName

value: gmatozinho/airline-routes



Response body:

```
{
    "csv": {
        "lines": 7,
        "bytes": 74
    },
    "js": {
        "lines": 509,
        "bytes": 12479
    },
    "json": {
        "lines": 27,
        "bytes": 531
    },
    "md": {
        "lines": 87,
        "bytes": 2662
    },
    "gitignore": {
        "lines": 108,
        "bytes": 1649
    }
}
```

## How to Run

```sh
docker build -t githubrepositorywebscraping .
docker run -d -p 3000:3000 githubrepositorywebscraping
```

## How to publish

```sh
heroku login
heroku container:login 
heroku create githubrepositorywebscraping
heroku git:remote -a githubrepositorywebscraping
heroku container:push web -a githubrepositorywebscraping
heroku container:release web -a githubrepositorywebscraping
```



