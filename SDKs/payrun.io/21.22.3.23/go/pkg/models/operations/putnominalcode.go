package operations

import (
"openapi/pkg/models/shared")

type PutNominalCodePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    NominalCodeID string `pathParam:"style=simple,explode=false,name=NominalCodeId"`
    
}

type PutNominalCodeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutNominalCodeRequest struct {
    PathParams PutNominalCodePathParams 
    Headers PutNominalCodeHeaders 
    Request shared.NominalCode `request:"mediaType=application/json"`
    
}

type PutNominalCodeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    NominalCode *shared.NominalCode 
    StatusCode int64 
    
}

