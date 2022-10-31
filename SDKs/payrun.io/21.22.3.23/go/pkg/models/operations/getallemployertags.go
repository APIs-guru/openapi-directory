package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllEmployerTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
