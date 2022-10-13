package operations

import (
	"openapi/pkg/models/shared"
)

type GetBatchJobsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetBatchJobsRequest struct {
	Headers GetBatchJobsHeaders
}

type GetBatchJobsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
