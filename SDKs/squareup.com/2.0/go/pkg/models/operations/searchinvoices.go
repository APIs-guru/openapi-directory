package operations

import (
"openapi/pkg/models/shared")

type SearchInvoicesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchInvoicesRequest struct {
    Request shared.SearchInvoicesRequest `request:"mediaType=application/json"`
    Security SearchInvoicesSecurity 
    
}

type SearchInvoicesResponse struct {
    ContentType string 
    SearchInvoicesResponse *shared.SearchInvoicesResponse 
    StatusCode int64 
    
}

