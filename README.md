# github_repository_web_scraping
Contains a project to scrape a github public repository to get total of lines and bytes group by extension


## API url

https://githubrepositorywebscraping.herokuapp.com


## Endpoints

### GET /scrape

**Postman Api Doc**: https://documenter.getpostman.com/view/4737860/T1LQg5Yu?version=latest

**query_parameter**:

key: repositoryName

value: "public repository name"


#### Example: 

**query_parameter**:

key: repositoryName

value: gmatozinho/github_repository_web_scraping



Response body:

```
{
    "js": {
        "lines": 324,
        "bytes": 7073
    },
    "json": {
        "lines": 1005,
        "bytes": 38354
    },
    "Dockerfile": {
        "lines": 19,
        "bytes": 384
    },
    "gitignore": {
        "lines": 104,
        "bytes": 1608
    },
    "md": {
        "lines": 77,
        "bytes": 1157
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



