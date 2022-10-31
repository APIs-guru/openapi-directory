package operations

import (
"openapi/pkg/models/shared")

type GetMyPaymentsSellingIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMyPaymentsSellingIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyPaymentsSellingIDRequest struct {
    PathParams GetMyPaymentsSellingIDPathParams 
    Security GetMyPaymentsSellingIDSecurity 
    
}

type GetMyPaymentsSellingIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

