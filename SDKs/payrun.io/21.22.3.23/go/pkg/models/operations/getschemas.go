package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemasHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetSchemasRequest struct {
	Headers GetSchemasHeaders
}

type GetSchemasResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
