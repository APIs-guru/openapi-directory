package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumCustomThumbsPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetAlbumCustomThumbsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetAlbumCustomThumbsRequest struct {
	PathParams  GetAlbumCustomThumbsPathParams
	QueryParams GetAlbumCustomThumbsQueryParams
}

type GetAlbumCustomThumbsResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Pictures    []shared.Picture
}
