package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryResponseHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetQueryResponseRequest struct {
	Headers GetQueryResponseHeaders
	Request shared.Query `request:"mediaType=application/json"`
}

type GetQueryResponseResponse struct {
	ContentType                                    string
	ErrorModel                                     *shared.ErrorModel
	GetQueryResponse200ApplicationJSONBinaryString []byte
	StatusCode                                     int64
}
