package operations

import (
"openapi/pkg/models/shared")

type AccountCtrlGetAccountServicesByAccountIDPathParams struct {
    AccountID float64 `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type AccountCtrlGetAccountServicesByAccountIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type AccountCtrlGetAccountServicesByAccountIDRequest struct {
    PathParams AccountCtrlGetAccountServicesByAccountIDPathParams 
    Security AccountCtrlGetAccountServicesByAccountIDSecurity 
    
}

type AccountCtrlGetAccountServicesByAccountIDResponse struct {
    AccountHalResponse *shared.AccountHalResponse 
    ContentType string 
    StatusCode int64 
    
}

