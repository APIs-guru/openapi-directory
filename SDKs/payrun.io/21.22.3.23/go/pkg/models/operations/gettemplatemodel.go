package operations

import (
	"openapi/pkg/models/shared"
)

type GetTemplateModelPathParams struct {
	DtoDataType string `pathParam:"style=simple,explode=false,name=DtoDataType"`
}

type GetTemplateModelHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTemplateModelRequest struct {
	PathParams GetTemplateModelPathParams
	Headers    GetTemplateModelHeaders
}

type GetTemplateModelResponse struct {
	ContentType                                    string
	ErrorModel                                     *shared.ErrorModel
	GetTemplateModel200ApplicationJSONBinaryString []byte
	StatusCode                                     int64
}
