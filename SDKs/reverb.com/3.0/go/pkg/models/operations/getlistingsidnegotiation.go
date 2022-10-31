package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingsIDNegotiationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingsIDNegotiationSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetListingsIDNegotiationRequest struct {
	PathParams GetListingsIDNegotiationPathParams
	Security   GetListingsIDNegotiationSecurity
}

type GetListingsIDNegotiationResponse struct {
	ContentType string
	StatusCode  int64
}
