package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptDisputePathParams struct {
	DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
}

type AcceptDisputeSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AcceptDisputeRequest struct {
	PathParams AcceptDisputePathParams
	Security   AcceptDisputeSecurity
}

type AcceptDisputeResponse struct {
	AcceptDisputeResponse *shared.AcceptDisputeResponse
	ContentType           string
	StatusCode            int64
}
