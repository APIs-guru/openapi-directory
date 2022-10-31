package operations

import (
"openapi/pkg/models/shared")

type TransformOutputRequestBody struct {
    JSON *shared.SeldonMessage `form:"name=json,json"`
    
}

type TransformOutputRequest struct {
    Request TransformOutputRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type TransformOutputResponse struct {
    ContentType string 
    SeldonMessage *shared.SeldonMessage 
    StatusCode int64 
    
}

