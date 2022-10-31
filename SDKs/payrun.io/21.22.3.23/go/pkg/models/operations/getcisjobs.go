package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisJobsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
