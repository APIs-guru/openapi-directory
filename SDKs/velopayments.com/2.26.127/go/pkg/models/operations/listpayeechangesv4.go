package operations

import (
"time"
"openapi/pkg/models/shared")

type ListPayeeChangesV4QueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID string `queryParam:"style=form,explode=true,name=payorId"`
    UpdatedSince time.Time `queryParam:"style=form,explode=true,name=updatedSince"`
    
}

type ListPayeeChangesV4Request struct {
    QueryParams ListPayeeChangesV4QueryParams 
    
}

type ListPayeeChangesV4Response struct {
    ContentType string 
    PayeeDeltaResponse2 *shared.PayeeDeltaResponse2 
    StatusCode int64 
    
}

