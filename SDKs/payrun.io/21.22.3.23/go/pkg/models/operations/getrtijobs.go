package operations

import (
	"openapi/pkg/models/shared"
)

type GetRtiJobsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetRtiJobsRequest struct {
	Headers GetRtiJobsHeaders
}

type GetRtiJobsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
