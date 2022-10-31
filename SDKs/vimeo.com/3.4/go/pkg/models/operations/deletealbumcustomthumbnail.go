package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAlbumCustomThumbnailPathParams struct {
	AlbumID     float64 `pathParam:"style=simple,explode=false,name=album_id"`
	ThumbnailID float64 `pathParam:"style=simple,explode=false,name=thumbnail_id"`
	UserID      float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type DeleteAlbumCustomThumbnailSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteAlbumCustomThumbnailRequest struct {
	PathParams DeleteAlbumCustomThumbnailPathParams
	Security   DeleteAlbumCustomThumbnailSecurity
}

type DeleteAlbumCustomThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
