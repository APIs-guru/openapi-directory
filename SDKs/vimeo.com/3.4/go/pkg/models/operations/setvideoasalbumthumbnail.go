package operations

import (
	"openapi/pkg/models/shared"
)

type SetVideoAsAlbumThumbnailPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type SetVideoAsAlbumThumbnailRequestBody struct {
	TimeCode *float64 `json:"time_code"`
}

type SetVideoAsAlbumThumbnailSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SetVideoAsAlbumThumbnailRequest struct {
	PathParams SetVideoAsAlbumThumbnailPathParams
	Request    *SetVideoAsAlbumThumbnailRequestBody `request:"mediaType=application/json"`
	Security   SetVideoAsAlbumThumbnailSecurity
}

type SetVideoAsAlbumThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	Album       *shared.Album
	Error       *shared.Error
}
