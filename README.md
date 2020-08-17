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
    "Dockerfile": {
        "lines": 19,
        "bytes": 384
    },
    "json": {
        "lines": 5471,
        "bytes": 208855
    },
    "gitignore": {
        "lines": 104,
        "bytes": 1608
    },
    "js": {
        "lines": 352,
        "bytes": 7843
    },
    "md": {
        "lines": 79,
        "bytes": 1280
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



