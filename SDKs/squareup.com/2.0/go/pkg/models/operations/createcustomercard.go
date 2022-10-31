package operations

import (
"openapi/pkg/models/shared")

type CreateCustomerCardPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
    
}

type CreateCustomerCardSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateCustomerCardRequest struct {
    PathParams CreateCustomerCardPathParams 
    Request shared.CreateCustomerCardRequest `request:"mediaType=application/json"`
    Security CreateCustomerCardSecurity 
    
}

type CreateCustomerCardResponse struct {
    ContentType string 
    CreateCustomerCardResponse *shared.CreateCustomerCardResponse 
    StatusCode int64 
    
}

