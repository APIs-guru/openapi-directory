package operations

import (
	"openapi/pkg/models/shared"
)

type UploadDatasetSyncRequestBodyTypeEnum string

const (
	UploadDatasetSyncRequestBodyTypeEnumTextIntent    UploadDatasetSyncRequestBodyTypeEnum = "text-intent"
	UploadDatasetSyncRequestBodyTypeEnumTextSentiment UploadDatasetSyncRequestBodyTypeEnum = "text-sentiment"
)

type UploadDatasetSyncRequestBody struct {
	Data *string                               `multipartForm:"name=data"`
	Name *string                               `multipartForm:"name=name"`
	Path *string                               `multipartForm:"name=path"`
	Type *UploadDatasetSyncRequestBodyTypeEnum `multipartForm:"name=type"`
}

type UploadDatasetSyncSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type UploadDatasetSyncRequest struct {
	Request  *UploadDatasetSyncRequestBody `request:"mediaType=multipart/form-data"`
	Security UploadDatasetSyncSecurity
}

type UploadDatasetSyncResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
