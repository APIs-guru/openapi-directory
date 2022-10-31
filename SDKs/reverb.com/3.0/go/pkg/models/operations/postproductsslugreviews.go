package operations

import (
"openapi/pkg/models/shared")

type PostProductsSlugReviewsPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type PostProductsSlugReviewsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostProductsSlugReviewsRequest struct {
    PathParams PostProductsSlugReviewsPathParams 
    Security PostProductsSlugReviewsSecurity 
    
}

type PostProductsSlugReviewsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

