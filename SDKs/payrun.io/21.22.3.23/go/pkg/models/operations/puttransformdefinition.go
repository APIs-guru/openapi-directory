package operations

import (
"openapi/pkg/models/shared")

type PutTransformDefinitionPathParams struct {
    TransformDefinitionID string `pathParam:"style=simple,explode=false,name=TransformDefinitionId"`
    
}

type PutTransformDefinitionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutTransformDefinitionRequest struct {
    PathParams PutTransformDefinitionPathParams 
    Headers PutTransformDefinitionHeaders 
    Request shared.TransformDefinition `request:"mediaType=application/json"`
    
}

type PutTransformDefinitionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    TransformDefinition *shared.TransformDefinition 
    
}

