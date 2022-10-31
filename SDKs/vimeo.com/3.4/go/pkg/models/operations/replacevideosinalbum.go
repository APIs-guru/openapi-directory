package operations

import (
	"openapi/pkg/models/shared"
)

type ReplaceVideosInAlbumPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type ReplaceVideosInAlbumRequestBody struct {
	Videos string `json:"videos"`
}

type ReplaceVideosInAlbumSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ReplaceVideosInAlbumRequest struct {
	PathParams ReplaceVideosInAlbumPathParams
	Request    ReplaceVideosInAlbumRequestBody `request:"mediaType=application/json"`
	Security   ReplaceVideosInAlbumSecurity
}

type ReplaceVideosInAlbumResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
