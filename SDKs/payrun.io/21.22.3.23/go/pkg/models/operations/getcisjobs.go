package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisJobsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisJobsRequest struct {
	Headers GetCisJobsHeaders
}

type GetCisJobsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
