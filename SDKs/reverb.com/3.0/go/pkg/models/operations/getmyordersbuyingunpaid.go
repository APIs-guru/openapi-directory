package operations

import (
"openapi/pkg/models/shared")

type GetMyOrdersBuyingUnpaidSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyOrdersBuyingUnpaidRequest struct {
    Security GetMyOrdersBuyingUnpaidSecurity 
    
}

type GetMyOrdersBuyingUnpaidResponse struct {
    ContentType string 
    StatusCode int64 
    
}

