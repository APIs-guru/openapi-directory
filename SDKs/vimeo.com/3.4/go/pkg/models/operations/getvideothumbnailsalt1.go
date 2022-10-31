package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoThumbnailsAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetVideoThumbnailsAlt1QueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVideoThumbnailsAlt1Request struct {
	PathParams  GetVideoThumbnailsAlt1PathParams
	QueryParams GetVideoThumbnailsAlt1QueryParams
}

type GetVideoThumbnailsAlt1Response struct {
	ContentType string
	StatusCode  int64
	Pictures    []shared.Picture
}
