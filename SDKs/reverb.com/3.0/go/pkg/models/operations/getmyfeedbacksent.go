package operations

import (
"openapi/pkg/models/shared")

type GetMyFeedbackSentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFeedbackSentRequest struct {
    Security GetMyFeedbackSentSecurity 
    
}

type GetMyFeedbackSentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

