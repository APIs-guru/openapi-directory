package operations

import (
"openapi/pkg/models/shared")

type AddVideoPrivacyDomainPathParams struct {
    Domain string `pathParam:"style=simple,explode=false,name=domain"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoPrivacyDomainSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoPrivacyDomainRequest struct {
    PathParams AddVideoPrivacyDomainPathParams 
    Security AddVideoPrivacyDomainSecurity 
    
}

type AddVideoPrivacyDomainResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

