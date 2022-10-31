package operations

import (
"openapi/pkg/models/shared")

type GetPayCodeRevisionByNumberPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayCodeID string `pathParam:"style=simple,explode=false,name=PayCodeId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
    
}

type GetPayCodeRevisionByNumberHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayCodeRevisionByNumberRequest struct {
    PathParams GetPayCodeRevisionByNumberPathParams 
    Headers GetPayCodeRevisionByNumberHeaders 
    
}

type GetPayCodeRevisionByNumberResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    PayCode *shared.PayCode 
    StatusCode int64 
    
}

