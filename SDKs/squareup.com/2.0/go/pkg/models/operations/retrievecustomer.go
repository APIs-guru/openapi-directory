package operations

import (
"openapi/pkg/models/shared")

type RetrieveCustomerPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
    
}

type RetrieveCustomerSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveCustomerRequest struct {
    PathParams RetrieveCustomerPathParams 
    Security RetrieveCustomerSecurity 
    
}

type RetrieveCustomerResponse struct {
    ContentType string 
    RetrieveCustomerResponse *shared.RetrieveCustomerResponse 
    StatusCode int64 
    
}

