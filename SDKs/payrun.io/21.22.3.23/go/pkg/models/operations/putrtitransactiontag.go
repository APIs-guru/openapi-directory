package operations

import (
"openapi/pkg/models/shared")

type PutRtiTransactionTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    RtiTransactionID string `pathParam:"style=simple,explode=false,name=RtiTransactionId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type PutRtiTransactionTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutRtiTransactionTagRequest struct {
    PathParams PutRtiTransactionTagPathParams 
    Headers PutRtiTransactionTagHeaders 
    
}

type PutRtiTransactionTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

