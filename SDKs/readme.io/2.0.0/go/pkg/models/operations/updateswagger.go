package operations

import (
"openapi/pkg/models/shared")

type UpdateSwaggerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateSwaggerRequestBodySwagger struct {
    Content []byte `multipartForm:"content"`
    Swagger string `multipartForm:"name=swagger"`
    
}

type UpdateSwaggerRequestBody struct {
    Swagger *UpdateSwaggerRequestBodySwagger `multipartForm:"file"`
    
}

type UpdateSwaggerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSwaggerRequest struct {
    PathParams UpdateSwaggerPathParams 
    Request UpdateSwaggerRequestBody `request:"mediaType=multipart/form-data"`
    Security UpdateSwaggerSecurity 
    
}

type UpdateSwaggerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

