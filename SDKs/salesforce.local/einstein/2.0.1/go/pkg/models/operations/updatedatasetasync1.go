package operations

import (
"openapi/pkg/models/shared")

type UpdateDatasetAsync1RequestBody struct {
    Data *string `multipartForm:"name=data"`
    ModelID *string `multipartForm:"name=modelId"`
    
}

type UpdateDatasetAsync1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateDatasetAsync1Request struct {
    Request *UpdateDatasetAsync1RequestBody `request:"mediaType=multipart/form-data"`
    Security UpdateDatasetAsync1Security 
    
}

type UpdateDatasetAsync1Response struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

