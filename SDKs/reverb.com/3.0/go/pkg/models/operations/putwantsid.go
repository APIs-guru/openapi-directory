package operations

import (
	"openapi/pkg/models/shared"
)

type PutWantsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutWantsIDSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutWantsIDRequest struct {
	PathParams PutWantsIDPathParams
	Security   PutWantsIDSecurity
}

type PutWantsIDResponse struct {
	ContentType string
	StatusCode  int64
}
