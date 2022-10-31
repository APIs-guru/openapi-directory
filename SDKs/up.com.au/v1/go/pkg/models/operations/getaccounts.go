package operations

import (
"openapi/pkg/models/shared")

type GetAccountsQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=page[size]"`
    
}

type GetAccountsRequest struct {
    QueryParams GetAccountsQueryParams 
    
}

type GetAccountsResponse struct {
    ContentType string 
    ListAccountsResponse *shared.ListAccountsResponse 
    StatusCode int64 
    
}

