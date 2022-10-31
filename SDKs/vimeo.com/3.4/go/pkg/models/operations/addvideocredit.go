package operations

import (
"openapi/pkg/models/shared")

type AddVideoCreditPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoCreditRequestBody struct {
    Email string `json:"email"`
    Name string `json:"name"`
    Role string `json:"role"`
    UserURI string `json:"user_uri"`
    
}

type AddVideoCreditRequest struct {
    PathParams AddVideoCreditPathParams 
    Request AddVideoCreditRequestBody `request:"mediaType=application/vnd.vimeo.credit+json"`
    
}

type AddVideoCreditResponse struct {
    ContentType string 
    StatusCode int64 
    Credit *shared.Credit 
    LegacyError *shared.LegacyError 
    
}

