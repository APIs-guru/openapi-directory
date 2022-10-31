package operations

import (
"openapi/pkg/models/shared")

type ListBankAccountsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
    
}

type ListBankAccountsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListBankAccountsRequest struct {
    QueryParams ListBankAccountsQueryParams 
    Security ListBankAccountsSecurity 
    
}

type ListBankAccountsResponse struct {
    ContentType string 
    ListBankAccountsResponse *shared.ListBankAccountsResponse 
    StatusCode int64 
    
}

