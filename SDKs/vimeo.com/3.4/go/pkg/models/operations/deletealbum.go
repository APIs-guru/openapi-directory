package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAlbumPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type DeleteAlbumSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteAlbumRequest struct {
	PathParams DeleteAlbumPathParams
	Security   DeleteAlbumSecurity
}

type DeleteAlbumResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
