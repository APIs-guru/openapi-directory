package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumVideoPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetAlbumVideoQueryParams struct {
	Password *string `queryParam:"style=form,explode=true,name=password"`
}

type GetAlbumVideoRequest struct {
	PathParams  GetAlbumVideoPathParams
	QueryParams GetAlbumVideoQueryParams
}

type GetAlbumVideoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
