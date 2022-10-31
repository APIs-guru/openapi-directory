package operations

import (
"openapi/pkg/models/shared")

type UpdateDatasetAsyncPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    
}

type UpdateDatasetAsyncRequestBody struct {
    Data *string `multipartForm:"name=data"`
    Type *string `multipartForm:"name=type"`
    
}

type UpdateDatasetAsyncSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateDatasetAsyncRequest struct {
    PathParams UpdateDatasetAsyncPathParams 
    Request *UpdateDatasetAsyncRequestBody `request:"mediaType=multipart/form-data"`
    Security UpdateDatasetAsyncSecurity 
    
}

type UpdateDatasetAsyncResponse struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

