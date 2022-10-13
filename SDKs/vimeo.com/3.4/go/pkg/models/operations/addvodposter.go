package operations

import (
	"openapi/pkg/models/shared"
)

type AddVodPosterPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type AddVodPosterSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVodPosterRequest struct {
	PathParams AddVodPosterPathParams
	Security   AddVodPosterSecurity
}

type AddVodPosterResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
