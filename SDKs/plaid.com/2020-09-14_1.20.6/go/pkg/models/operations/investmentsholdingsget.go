package operations

import (
	"openapi/pkg/models/shared"
)

type InvestmentsHoldingsGetRequest struct {
	Request shared.InvestmentsHoldingsGetRequest `request:"mediaType=application/json"`
}

type InvestmentsHoldingsGetResponse struct {
	ContentType                    string
	InvestmentsHoldingsGetResponse map[string]interface{}
	StatusCode                     int64
}
