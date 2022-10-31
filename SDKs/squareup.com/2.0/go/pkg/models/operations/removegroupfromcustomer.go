package operations

import (
"openapi/pkg/models/shared")

type RemoveGroupFromCustomerPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
    GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type RemoveGroupFromCustomerSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RemoveGroupFromCustomerRequest struct {
    PathParams RemoveGroupFromCustomerPathParams 
    Security RemoveGroupFromCustomerSecurity 
    
}

type RemoveGroupFromCustomerResponse struct {
    ContentType string 
    RemoveGroupFromCustomerResponse *shared.RemoveGroupFromCustomerResponse 
    StatusCode int64 
    
}

