package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToAlbumAlt1PathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToAlbumAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToAlbumAlt1Request struct {
	PathParams AddVideoToAlbumAlt1PathParams
	Security   AddVideoToAlbumAlt1Security
}

type AddVideoToAlbumAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
