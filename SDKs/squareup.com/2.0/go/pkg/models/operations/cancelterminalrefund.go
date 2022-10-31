package operations

import (
"openapi/pkg/models/shared")

type CancelTerminalRefundPathParams struct {
    TerminalRefundID string `pathParam:"style=simple,explode=false,name=terminal_refund_id"`
    
}

type CancelTerminalRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CancelTerminalRefundRequest struct {
    PathParams CancelTerminalRefundPathParams 
    Security CancelTerminalRefundSecurity 
    
}

type CancelTerminalRefundResponse struct {
    CancelTerminalRefundResponse *shared.CancelTerminalRefundResponse 
    ContentType string 
    StatusCode int64 
    
}

