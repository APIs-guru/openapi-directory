package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetRequestBodyTypeEnum string

const (
	CreateDatasetRequestBodyTypeEnumImage           CreateDatasetRequestBodyTypeEnum = "image"
	CreateDatasetRequestBodyTypeEnumImageMultiLabel CreateDatasetRequestBodyTypeEnum = "image-multi-label"
)

type CreateDatasetRequestBody struct {
	Labels *string                           `multipartForm:"name=labels"`
	Name   *string                           `multipartForm:"name=name"`
	Type   *CreateDatasetRequestBodyTypeEnum `multipartForm:"name=type"`
}

type CreateDatasetSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateDatasetRequest struct {
	Request  *CreateDatasetRequestBody `request:"mediaType=multipart/form-data"`
	Security CreateDatasetSecurity
}

type CreateDatasetResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
