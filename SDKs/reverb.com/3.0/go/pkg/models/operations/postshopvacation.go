package operations

import (
	"openapi/pkg/models/shared"
)

type PostShopVacationSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostShopVacationRequest struct {
	Security PostShopVacationSecurity
}

type PostShopVacationResponse struct {
	ContentType string
	StatusCode  int64
}
