package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVodBackgroundPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type CreateVodBackgroundSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateVodBackgroundRequest struct {
	PathParams CreateVodBackgroundPathParams
	Security   CreateVodBackgroundSecurity
}

type CreateVodBackgroundResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
