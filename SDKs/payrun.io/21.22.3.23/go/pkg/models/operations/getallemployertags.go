package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllEmployerTagsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllEmployerTagsRequest struct {
	Headers GetAllEmployerTagsHeaders
}

type GetAllEmployerTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
