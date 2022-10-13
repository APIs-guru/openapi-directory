package operations

import (
	"openapi/pkg/models/shared"
)

type ReplaceAlbumLogoPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	LogoID  float64 `pathParam:"style=simple,explode=false,name=logo_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type ReplaceAlbumLogoRequestBody struct {
	Active *bool `json:"active"`
}

type ReplaceAlbumLogoSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ReplaceAlbumLogoRequest struct {
	PathParams ReplaceAlbumLogoPathParams
	Request    *ReplaceAlbumLogoRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   ReplaceAlbumLogoSecurity
}

type ReplaceAlbumLogoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
