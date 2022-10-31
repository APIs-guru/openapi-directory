package operations

import (
	"openapi/pkg/models/shared"
)

type GetTemplatesHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTemplatesRequest struct {
	Headers GetTemplatesHeaders
}

type GetTemplatesResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
