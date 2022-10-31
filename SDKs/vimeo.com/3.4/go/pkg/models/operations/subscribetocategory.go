package operations

import (
"openapi/pkg/models/shared")

type SubscribeToCategoryPathParams struct {
    Category float64 `pathParam:"style=simple,explode=false,name=category"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type SubscribeToCategorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SubscribeToCategoryRequest struct {
    PathParams SubscribeToCategoryPathParams 
    Security SubscribeToCategorySecurity 
    
}

type SubscribeToCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

