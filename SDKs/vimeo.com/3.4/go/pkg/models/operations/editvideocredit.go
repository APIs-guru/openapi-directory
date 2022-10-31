package operations

import (
"openapi/pkg/models/shared")

type EditVideoCreditPathParams struct {
    CreditID float64 `pathParam:"style=simple,explode=false,name=credit_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type EditVideoCreditRequestBody struct {
    Name *string `json:"name,omitempty"`
    Role *string `json:"role,omitempty"`
    
}

type EditVideoCreditSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type EditVideoCreditRequest struct {
    PathParams EditVideoCreditPathParams 
    Request *EditVideoCreditRequestBody `request:"mediaType=application/vnd.vimeo.credit+json"`
    Security EditVideoCreditSecurity 
    
}

type EditVideoCreditResponse struct {
    ContentType string 
    StatusCode int64 
    Credit *shared.Credit 
    LegacyError *shared.LegacyError 
    
}

