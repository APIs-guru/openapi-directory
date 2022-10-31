package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPISpecificationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateAPISpecificationRequestBodySpec struct {
	Content []byte `multipartForm:"content"`
	Spec    string `multipartForm:"name=spec"`
}

type UpdateAPISpecificationRequestBody struct {
	Spec *UpdateAPISpecificationRequestBodySpec `multipartForm:"file"`
}

type UpdateAPISpecificationSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type UpdateAPISpecificationRequest struct {
	PathParams UpdateAPISpecificationPathParams
	Request    UpdateAPISpecificationRequestBody `request:"mediaType=multipart/form-data"`
	Security   UpdateAPISpecificationSecurity
}

type UpdateAPISpecificationResponse struct {
	ContentType string
	StatusCode  int64
}
