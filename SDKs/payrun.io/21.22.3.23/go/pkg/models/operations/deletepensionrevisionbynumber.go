package operations

import (
"openapi/pkg/models/shared")

type DeletePensionRevisionByNumberPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PensionID string `pathParam:"style=simple,explode=false,name=PensionId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
    
}

type DeletePensionRevisionByNumberHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeletePensionRevisionByNumberRequest struct {
    PathParams DeletePensionRevisionByNumberPathParams 
    Headers DeletePensionRevisionByNumberHeaders 
    
}

type DeletePensionRevisionByNumberResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

