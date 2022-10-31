package operations

import (
"openapi/pkg/models/shared")

type SearchCustomersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchCustomersRequest struct {
    Request shared.SearchCustomersRequest `request:"mediaType=application/json"`
    Security SearchCustomersSecurity 
    
}

type SearchCustomersResponse struct {
    ContentType string 
    SearchCustomersResponse *shared.SearchCustomersResponse 
    StatusCode int64 
    
}

