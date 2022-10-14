package operations

import (
	"openapi/pkg/models/shared"
)

type EditVodBackgroundPathParams struct {
	BackgroundID float64 `pathParam:"style=simple,explode=false,name=background_id"`
	OndemandID   float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type EditVodBackgroundRequestBody struct {
	Active *bool `json:"active,omitempty"`
}

type EditVodBackgroundSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditVodBackgroundRequest struct {
	PathParams EditVodBackgroundPathParams
	Request    *EditVodBackgroundRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   EditVodBackgroundSecurity
}

type EditVodBackgroundResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
