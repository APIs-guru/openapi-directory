package operations

import (
"openapi/pkg/models/shared")

type GetTerminalRefundPathParams struct {
    TerminalRefundID string `pathParam:"style=simple,explode=false,name=terminal_refund_id"`
    
}

type GetTerminalRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTerminalRefundRequest struct {
    PathParams GetTerminalRefundPathParams 
    Security GetTerminalRefundSecurity 
    
}

type GetTerminalRefundResponse struct {
    ContentType string 
    GetTerminalRefundResponse *shared.GetTerminalRefundResponse 
    StatusCode int64 
    
}

