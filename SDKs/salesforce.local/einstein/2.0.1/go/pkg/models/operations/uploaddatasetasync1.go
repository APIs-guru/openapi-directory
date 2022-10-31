package operations

import (
"openapi/pkg/models/shared")


type UploadDatasetAsync1RequestBodyTypeEnum string

const (
    UploadDatasetAsync1RequestBodyTypeEnumImage UploadDatasetAsync1RequestBodyTypeEnum = "image"
UploadDatasetAsync1RequestBodyTypeEnumImageDetection UploadDatasetAsync1RequestBodyTypeEnum = "image-detection"
UploadDatasetAsync1RequestBodyTypeEnumImageMultiLabel UploadDatasetAsync1RequestBodyTypeEnum = "image-multi-label"
)


type UploadDatasetAsync1RequestBody struct {
    Data *string `multipartForm:"name=data"`
    Name *string `multipartForm:"name=name"`
    Path *string `multipartForm:"name=path"`
    Type *UploadDatasetAsync1RequestBodyTypeEnum `multipartForm:"name=type"`
    
}

type UploadDatasetAsync1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UploadDatasetAsync1Request struct {
    Request *UploadDatasetAsync1RequestBody `request:"mediaType=multipart/form-data"`
    Security UploadDatasetAsync1Security 
    
}

type UploadDatasetAsync1Response struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

