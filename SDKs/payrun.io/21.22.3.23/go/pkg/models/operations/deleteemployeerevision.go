package operations

import (
"time"
"openapi/pkg/models/shared")

type DeleteEmployeeRevisionPathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type DeleteEmployeeRevisionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteEmployeeRevisionRequest struct {
    PathParams DeleteEmployeeRevisionPathParams 
    Headers DeleteEmployeeRevisionHeaders 
    
}

type DeleteEmployeeRevisionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

