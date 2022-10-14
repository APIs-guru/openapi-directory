package operations

import (
	"openapi/pkg/models/shared"
)

type SetVideoAsAlbumThumbnailAlt1PathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type SetVideoAsAlbumThumbnailAlt1RequestBody struct {
	TimeCode *float64 `json:"time_code,omitempty"`
}

type SetVideoAsAlbumThumbnailAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SetVideoAsAlbumThumbnailAlt1Request struct {
	PathParams SetVideoAsAlbumThumbnailAlt1PathParams
	Request    *SetVideoAsAlbumThumbnailAlt1RequestBody `request:"mediaType=application/json"`
	Security   SetVideoAsAlbumThumbnailAlt1Security
}

type SetVideoAsAlbumThumbnailAlt1Response struct {
	ContentType string
	StatusCode  int64
	Album       *shared.Album
	Error       *shared.Error
}
