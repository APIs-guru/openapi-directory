package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveVideoFromAlbumPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type RemoveVideoFromAlbumSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RemoveVideoFromAlbumRequest struct {
	PathParams RemoveVideoFromAlbumPathParams
	Security   RemoveVideoFromAlbumSecurity
}

type RemoveVideoFromAlbumResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
