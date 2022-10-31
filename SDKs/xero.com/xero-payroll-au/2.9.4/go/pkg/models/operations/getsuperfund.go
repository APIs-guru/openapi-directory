package operations

import (
"openapi/pkg/models/shared")

type GetSuperfundPathParams struct {
    SuperFundID string `pathParam:"style=simple,explode=false,name=SuperFundID"`
    
}

type GetSuperfundHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetSuperfundSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetSuperfundRequest struct {
    PathParams GetSuperfundPathParams 
    Headers GetSuperfundHeaders 
    Security GetSuperfundSecurity 
    
}

type GetSuperfundResponse struct {
    ContentType string 
    StatusCode int64 
    SuperFunds *shared.SuperFunds 
    
}

