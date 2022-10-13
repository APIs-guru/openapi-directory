package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVideoCustomLogoPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateVideoCustomLogoSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateVideoCustomLogoRequest struct {
	PathParams CreateVideoCustomLogoPathParams
	Security   CreateVideoCustomLogoSecurity
}

type CreateVideoCustomLogoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
