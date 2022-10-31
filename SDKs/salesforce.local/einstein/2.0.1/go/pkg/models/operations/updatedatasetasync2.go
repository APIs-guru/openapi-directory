package operations

import (
"openapi/pkg/models/shared")

type UpdateDatasetAsync2PathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    
}

type UpdateDatasetAsync2RequestBody struct {
    Data *string `multipartForm:"name=data"`
    Path *string `multipartForm:"name=path"`
    
}

type UpdateDatasetAsync2Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateDatasetAsync2Request struct {
    PathParams UpdateDatasetAsync2PathParams 
    Request *UpdateDatasetAsync2RequestBody `request:"mediaType=multipart/form-data"`
    Security UpdateDatasetAsync2Security 
    
}

type UpdateDatasetAsync2Response struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

