package operations

import (
	"openapi/pkg/models/shared"
)

type EditVodPosterPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	PosterID   float64 `pathParam:"style=simple,explode=false,name=poster_id"`
}

type EditVodPosterRequestBody struct {
	Active *bool `json:"active,omitempty"`
}

type EditVodPosterSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditVodPosterRequest struct {
	PathParams EditVodPosterPathParams
	Request    *EditVodPosterRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   EditVodPosterSecurity
}

type EditVodPosterResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
