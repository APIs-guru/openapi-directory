package operations

import (
"time"
"openapi/pkg/models/shared")

type ListPaymentChangesV4QueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID string `queryParam:"style=form,explode=true,name=payorId"`
    UpdatedSince time.Time `queryParam:"style=form,explode=true,name=updatedSince"`
    
}

type ListPaymentChangesV4Request struct {
    QueryParams ListPaymentChangesV4QueryParams 
    
}

type ListPaymentChangesV4Response struct {
    ContentType string 
    PaymentDeltaResponse *shared.PaymentDeltaResponse 
    StatusCode int64 
    
}

