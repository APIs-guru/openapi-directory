package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoThumbnailsPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetVideoThumbnailsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVideoThumbnailsRequest struct {
	PathParams  GetVideoThumbnailsPathParams
	QueryParams GetVideoThumbnailsQueryParams
}

type GetVideoThumbnailsResponse struct {
	ContentType string
	StatusCode  int64
	Pictures    []shared.Picture
}
