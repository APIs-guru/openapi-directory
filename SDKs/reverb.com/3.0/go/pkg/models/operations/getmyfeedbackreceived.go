package operations

import (
"openapi/pkg/models/shared")

type GetMyFeedbackReceivedSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFeedbackReceivedRequest struct {
    Security GetMyFeedbackReceivedSecurity 
    
}

type GetMyFeedbackReceivedResponse struct {
    ContentType string 
    StatusCode int64 
    
}

