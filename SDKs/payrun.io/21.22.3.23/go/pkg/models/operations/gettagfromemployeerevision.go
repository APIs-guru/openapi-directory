package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTagFromEmployeeRevisionPathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetTagFromEmployeeRevisionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagFromEmployeeRevisionRequest struct {
    PathParams GetTagFromEmployeeRevisionPathParams 
    Headers GetTagFromEmployeeRevisionHeaders 
    
}

type GetTagFromEmployeeRevisionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

