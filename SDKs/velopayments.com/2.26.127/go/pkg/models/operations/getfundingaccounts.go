package operations

import (
"openapi/pkg/models/shared")

type GetFundingAccountsQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID *string `queryParam:"style=form,explode=true,name=payorId"`
    Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SourceAccountID *string `queryParam:"style=form,explode=true,name=sourceAccountId"`
    
}

type GetFundingAccountsRequest struct {
    QueryParams GetFundingAccountsQueryParams 
    
}

type GetFundingAccountsResponse struct {
    ContentType string 
    ListFundingAccountsResponse *shared.ListFundingAccountsResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse403 *interface{} 
    
}

