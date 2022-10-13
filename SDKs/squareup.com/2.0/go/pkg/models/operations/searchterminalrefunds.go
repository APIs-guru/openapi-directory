package operations

import (
	"openapi/pkg/models/shared"
)

type SearchTerminalRefundsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SearchTerminalRefundsRequest struct {
	Request  shared.SearchTerminalRefundsRequest `request:"mediaType=application/json"`
	Security SearchTerminalRefundsSecurity
}

type SearchTerminalRefundsResponse struct {
	ContentType                   string
	SearchTerminalRefundsResponse *shared.SearchTerminalRefundsResponse
	StatusCode                    int64
}
