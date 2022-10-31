package operations

import (
"openapi/pkg/models/shared")

type UnsubscribeFromCategoryPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UnsubscribeFromCategorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UnsubscribeFromCategoryRequest struct {
    PathParams UnsubscribeFromCategoryPathParams 
    Security UnsubscribeFromCategorySecurity 
    
}

type UnsubscribeFromCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

