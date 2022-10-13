package operations

import (
	"openapi/pkg/models/shared"
)

type GetThirdPartyJobsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetThirdPartyJobsRequest struct {
	Headers GetThirdPartyJobsHeaders
}

type GetThirdPartyJobsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
