package operations

import (
"openapi/pkg/models/shared")

type GetSourceAccountsQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID *string `queryParam:"style=form,explode=true,name=payorId"`
    PhysicalAccountName *string `queryParam:"style=form,explode=true,name=physicalAccountName"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetSourceAccountsRequest struct {
    QueryParams GetSourceAccountsQueryParams 
    
}

type GetSourceAccountsResponse struct {
    ContentType string 
    ListSourceAccountResponse *shared.ListSourceAccountResponse 
    StatusCode int64 
    InlineResponse401 *interface{} 
    
}

