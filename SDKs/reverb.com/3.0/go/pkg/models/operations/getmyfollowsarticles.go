package operations

import (
"openapi/pkg/models/shared")

type GetMyFollowsArticlesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFollowsArticlesRequest struct {
    Security GetMyFollowsArticlesSecurity 
    
}

type GetMyFollowsArticlesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

