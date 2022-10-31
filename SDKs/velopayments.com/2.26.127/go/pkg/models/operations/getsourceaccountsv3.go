package operations

import (
"openapi/pkg/models/shared")

type GetSourceAccountsV3QueryParams struct {
    FundingAccountID *string `queryParam:"style=form,explode=true,name=fundingAccountId"`
    IncludeUserDeleted *string `queryParam:"style=form,explode=true,name=includeUserDeleted"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID *string `queryParam:"style=form,explode=true,name=payorId"`
    PhysicalAccountID *string `queryParam:"style=form,explode=true,name=physicalAccountId"`
    PhysicalAccountName *string `queryParam:"style=form,explode=true,name=physicalAccountName"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Type *shared.SourceAccountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetSourceAccountsV3Request struct {
    QueryParams GetSourceAccountsV3QueryParams 
    
}

type GetSourceAccountsV3Response struct {
    ContentType string 
    ListSourceAccountResponseV3 *shared.ListSourceAccountResponseV3 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

