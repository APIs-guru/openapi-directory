package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveVideoFromAlbumAlt1PathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type RemoveVideoFromAlbumAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RemoveVideoFromAlbumAlt1Request struct {
	PathParams RemoveVideoFromAlbumAlt1PathParams
	Security   RemoveVideoFromAlbumAlt1Security
}

type RemoveVideoFromAlbumAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
