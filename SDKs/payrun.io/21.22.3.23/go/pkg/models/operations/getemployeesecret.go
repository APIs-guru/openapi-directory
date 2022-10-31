package operations

import (
"openapi/pkg/models/shared")

type GetEmployeeSecretPathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SecretID string `pathParam:"style=simple,explode=false,name=SecretId"`
    
}

type GetEmployeeSecretHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployeeSecretRequest struct {
    PathParams GetEmployeeSecretPathParams 
    Headers GetEmployeeSecretHeaders 
    
}

type GetEmployeeSecretResponse struct {
    ContentType string 
    EmployeeSecret *shared.EmployeeSecret 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

