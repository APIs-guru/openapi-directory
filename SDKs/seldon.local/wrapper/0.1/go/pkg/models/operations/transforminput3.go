package operations

import (
"openapi/pkg/models/shared")

type TransformInput3RequestBody struct {
    JSON *shared.SeldonMessage `form:"name=json,json"`
    
}

type TransformInput3Request struct {
    Request TransformInput3RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type TransformInput3Response struct {
    ContentType string 
    SeldonMessage *shared.SeldonMessage 
    StatusCode int64 
    
}

