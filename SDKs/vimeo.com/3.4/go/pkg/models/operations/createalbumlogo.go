package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlbumLogoPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type CreateAlbumLogoSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateAlbumLogoRequest struct {
	PathParams CreateAlbumLogoPathParams
	Security   CreateAlbumLogoSecurity
}

type CreateAlbumLogoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
