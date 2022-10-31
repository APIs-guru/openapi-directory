package operations

import (
"openapi/pkg/models/shared")


type UploadDatasetAsyncRequestBodyTypeEnum string

const (
    UploadDatasetAsyncRequestBodyTypeEnumTextIntent UploadDatasetAsyncRequestBodyTypeEnum = "text-intent"
UploadDatasetAsyncRequestBodyTypeEnumTextSentiment UploadDatasetAsyncRequestBodyTypeEnum = "text-sentiment"
)


type UploadDatasetAsyncRequestBody struct {
    Data *string `multipartForm:"name=data"`
    Name *string `multipartForm:"name=name"`
    Path *string `multipartForm:"name=path"`
    Type *UploadDatasetAsyncRequestBodyTypeEnum `multipartForm:"name=type"`
    
}

type UploadDatasetAsyncSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UploadDatasetAsyncRequest struct {
    Request *UploadDatasetAsyncRequestBody `request:"mediaType=multipart/form-data"`
    Security UploadDatasetAsyncSecurity 
    
}

type UploadDatasetAsyncResponse struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

