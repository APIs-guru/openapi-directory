package operations

import (
"openapi/pkg/models/shared")

type DeleteEmployerSecretPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SecretID string `pathParam:"style=simple,explode=false,name=SecretId"`
    
}

type DeleteEmployerSecretHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteEmployerSecretRequest struct {
    PathParams DeleteEmployerSecretPathParams 
    Headers DeleteEmployerSecretHeaders 
    
}

type DeleteEmployerSecretResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

