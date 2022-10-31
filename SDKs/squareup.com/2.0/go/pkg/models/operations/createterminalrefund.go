package operations

import (
"openapi/pkg/models/shared")

type CreateTerminalRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateTerminalRefundRequest struct {
    Request shared.CreateTerminalRefundRequest `request:"mediaType=application/json"`
    Security CreateTerminalRefundSecurity 
    
}

type CreateTerminalRefundResponse struct {
    ContentType string 
    CreateTerminalRefundResponse *shared.CreateTerminalRefundResponse 
    StatusCode int64 
    
}

