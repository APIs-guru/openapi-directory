package operations

import (
	"openapi/pkg/models/shared"
)

type AddExamplePathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type AddExampleRequestBody struct {
	Data    *string `multipartForm:"name=data"`
	LabelID *int64  `multipartForm:"name=labelId"`
	Name    *string `multipartForm:"name=name"`
}

type AddExampleSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type AddExampleRequest struct {
	PathParams AddExamplePathParams
	Request    *AddExampleRequestBody `request:"mediaType=multipart/form-data"`
	Security   AddExampleSecurity
}

type AddExampleResponse struct {
	ContentType string
	Example     *shared.Example
	StatusCode  int64
}
