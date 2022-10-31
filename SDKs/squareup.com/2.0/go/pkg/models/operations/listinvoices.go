package operations

import (
"openapi/pkg/models/shared")

type ListInvoicesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocationID string `queryParam:"style=form,explode=true,name=location_id"`
    
}

type ListInvoicesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListInvoicesRequest struct {
    QueryParams ListInvoicesQueryParams 
    Security ListInvoicesSecurity 
    
}

type ListInvoicesResponse struct {
    ContentType string 
    ListInvoicesResponse *shared.ListInvoicesResponse 
    StatusCode int64 
    
}

