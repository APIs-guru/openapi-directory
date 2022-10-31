package operations

import (
	"openapi/pkg/models/shared"
)

type SearchTerminalCheckoutsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SearchTerminalCheckoutsRequest struct {
	Request  shared.SearchTerminalCheckoutsRequest `request:"mediaType=application/json"`
	Security SearchTerminalCheckoutsSecurity
}

type SearchTerminalCheckoutsResponse struct {
	ContentType                     string
	SearchTerminalCheckoutsResponse *shared.SearchTerminalCheckoutsResponse
	StatusCode                      int64
}
