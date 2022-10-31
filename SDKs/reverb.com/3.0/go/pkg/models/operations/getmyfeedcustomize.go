package operations

import (
"openapi/pkg/models/shared")

type GetMyFeedCustomizeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFeedCustomizeRequest struct {
    Security GetMyFeedCustomizeSecurity 
    
}

type GetMyFeedCustomizeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

