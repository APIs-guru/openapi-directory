package operations

import (
"openapi/pkg/models/shared")

type UnsubscribeFromCategoryAlt1PathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    
}

type UnsubscribeFromCategoryAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UnsubscribeFromCategoryAlt1Request struct {
    PathParams UnsubscribeFromCategoryAlt1PathParams 
    Security UnsubscribeFromCategoryAlt1Security 
    
}

type UnsubscribeFromCategoryAlt1Response struct {
    ContentType string 
    StatusCode int64 
    
}

