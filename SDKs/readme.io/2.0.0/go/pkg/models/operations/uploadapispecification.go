package operations

import (
	"openapi/pkg/models/shared"
)

type UploadAPISpecificationHeaders struct {
	XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
}

type UploadAPISpecificationRequestBodySpec struct {
	Content []byte `multipartForm:"content"`
	Spec    string `multipartForm:"name=spec"`
}

type UploadAPISpecificationRequestBody struct {
	Spec *UploadAPISpecificationRequestBodySpec `multipartForm:"file"`
}

type UploadAPISpecificationSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type UploadAPISpecificationRequest struct {
	Headers  UploadAPISpecificationHeaders
	Request  UploadAPISpecificationRequestBody `request:"mediaType=multipart/form-data"`
	Security UploadAPISpecificationSecurity
}

type UploadAPISpecificationResponse struct {
	ContentType string
	StatusCode  int64
}
