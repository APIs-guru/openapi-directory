package operations

import (
"openapi/pkg/models/shared")

type DeleteCustomerPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
    
}

type DeleteCustomerQueryParams struct {
    Version *int64 `queryParam:"style=form,explode=true,name=version"`
    
}

type DeleteCustomerSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteCustomerRequest struct {
    PathParams DeleteCustomerPathParams 
    QueryParams DeleteCustomerQueryParams 
    Security DeleteCustomerSecurity 
    
}

type DeleteCustomerResponse struct {
    ContentType string 
    DeleteCustomerResponse *shared.DeleteCustomerResponse 
    StatusCode int64 
    
}

