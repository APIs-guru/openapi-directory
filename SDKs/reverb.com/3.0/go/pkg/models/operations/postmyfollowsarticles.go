package operations

import (
"openapi/pkg/models/shared")

type PostMyFollowsArticlesRequestBody struct {
    CategoryUuids string `json:"category_uuids"`
    
}

type PostMyFollowsArticlesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyFollowsArticlesRequest struct {
    Request *PostMyFollowsArticlesRequestBody `request:"mediaType=application/json"`
    Security PostMyFollowsArticlesSecurity 
    
}

type PostMyFollowsArticlesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

