package operations

import (
"openapi/pkg/models/shared")

type GetTagFromRtiTransactionPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    RtiTransactionID string `pathParam:"style=simple,explode=false,name=RtiTransactionId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetTagFromRtiTransactionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagFromRtiTransactionRequest struct {
    PathParams GetTagFromRtiTransactionPathParams 
    Headers GetTagFromRtiTransactionHeaders 
    
}

type GetTagFromRtiTransactionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

