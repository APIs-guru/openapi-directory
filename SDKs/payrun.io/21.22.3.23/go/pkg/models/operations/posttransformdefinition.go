package operations

import (
"openapi/pkg/models/shared")

type PostTransformDefinitionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostTransformDefinitionRequest struct {
    Headers PostTransformDefinitionHeaders 
    Request shared.TransformDefinition `request:"mediaType=application/json"`
    
}

type PostTransformDefinitionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

