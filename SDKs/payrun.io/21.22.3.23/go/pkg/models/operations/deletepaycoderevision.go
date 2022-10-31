package operations

import (
"time"
"openapi/pkg/models/shared")

type DeletePayCodeRevisionPathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayCodeID string `pathParam:"style=simple,explode=false,name=PayCodeId"`
    
}

type DeletePayCodeRevisionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeletePayCodeRevisionRequest struct {
    PathParams DeletePayCodeRevisionPathParams 
    Headers DeletePayCodeRevisionHeaders 
    
}

type DeletePayCodeRevisionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

