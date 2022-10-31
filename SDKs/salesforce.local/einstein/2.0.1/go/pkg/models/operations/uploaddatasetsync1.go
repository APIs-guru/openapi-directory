package operations

import (
"openapi/pkg/models/shared")


type UploadDatasetSync1RequestBodyTypeEnum string

const (
    UploadDatasetSync1RequestBodyTypeEnumImage UploadDatasetSync1RequestBodyTypeEnum = "image"
UploadDatasetSync1RequestBodyTypeEnumImageDetection UploadDatasetSync1RequestBodyTypeEnum = "image-detection"
UploadDatasetSync1RequestBodyTypeEnumImageMultiLabel UploadDatasetSync1RequestBodyTypeEnum = "image-multi-label"
)


type UploadDatasetSync1RequestBody struct {
    Data *string `multipartForm:"name=data"`
    Name *string `multipartForm:"name=name"`
    Path *string `multipartForm:"name=path"`
    Type *UploadDatasetSync1RequestBodyTypeEnum `multipartForm:"name=type"`
    
}

type UploadDatasetSync1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UploadDatasetSync1Request struct {
    Request *UploadDatasetSync1RequestBody `request:"mediaType=multipart/form-data"`
    Security UploadDatasetSync1Security 
    
}

type UploadDatasetSync1Response struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

