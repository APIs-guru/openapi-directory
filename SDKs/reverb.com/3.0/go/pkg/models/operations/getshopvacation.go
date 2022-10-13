package operations

import (
	"openapi/pkg/models/shared"
)

type GetShopVacationSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetShopVacationRequest struct {
	Security GetShopVacationSecurity
}

type GetShopVacationResponse struct {
	ContentType string
	StatusCode  int64
}
