package operations

import (
	"openapi/pkg/models/shared"
)

type GetDpsJobsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetDpsJobsRequest struct {
	Headers GetDpsJobsHeaders
}

type GetDpsJobsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
