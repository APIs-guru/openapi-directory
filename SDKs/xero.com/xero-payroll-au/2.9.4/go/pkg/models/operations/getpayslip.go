package operations

import (
"openapi/pkg/models/shared")

type GetPayslipPathParams struct {
    PayslipID string `pathParam:"style=simple,explode=false,name=PayslipID"`
    
}

type GetPayslipHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetPayslipSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetPayslipRequest struct {
    PathParams GetPayslipPathParams 
    Headers GetPayslipHeaders 
    Security GetPayslipSecurity 
    
}

type GetPayslipResponse struct {
    ContentType string 
    PayslipObject *shared.PayslipObject 
    StatusCode int64 
    
}

