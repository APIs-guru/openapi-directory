package operations

import (
"openapi/pkg/models/shared")

type CheckIfUserSubscribedToCategoryPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CheckIfUserSubscribedToCategorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CheckIfUserSubscribedToCategoryRequest struct {
    PathParams CheckIfUserSubscribedToCategoryPathParams 
    Security CheckIfUserSubscribedToCategorySecurity 
    
}

type CheckIfUserSubscribedToCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

