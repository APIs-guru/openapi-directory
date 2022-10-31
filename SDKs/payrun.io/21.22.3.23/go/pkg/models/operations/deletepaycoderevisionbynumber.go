package operations

import (
"openapi/pkg/models/shared")

type DeletePayCodeRevisionByNumberPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayCodeID string `pathParam:"style=simple,explode=false,name=PayCodeId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
    
}

type DeletePayCodeRevisionByNumberHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeletePayCodeRevisionByNumberRequest struct {
    PathParams DeletePayCodeRevisionByNumberPathParams 
    Headers DeletePayCodeRevisionByNumberHeaders 
    
}

type DeletePayCodeRevisionByNumberResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

