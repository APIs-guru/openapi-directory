package operations

import (
"time"
"openapi/pkg/models/shared")

type ListFundingAuditDeltasQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID string `queryParam:"style=form,explode=true,name=payorId"`
    UpdatedSince time.Time `queryParam:"style=form,explode=true,name=updatedSince"`
    
}

type ListFundingAuditDeltasRequest struct {
    QueryParams ListFundingAuditDeltasQueryParams 
    
}

type ListFundingAuditDeltasResponse struct {
    ContentType string 
    PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse *shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

