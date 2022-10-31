package operations

import (
"openapi/pkg/models/shared")

type UploadSwaggerRequestBodySwagger struct {
    Content []byte `multipartForm:"content"`
    Swagger string `multipartForm:"name=swagger"`
    
}

type UploadSwaggerRequestBody struct {
    Swagger *UploadSwaggerRequestBodySwagger `multipartForm:"file"`
    
}

type UploadSwaggerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type UploadSwaggerRequest struct {
    Request UploadSwaggerRequestBody `request:"mediaType=multipart/form-data"`
    Security UploadSwaggerSecurity 
    
}

type UploadSwaggerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

