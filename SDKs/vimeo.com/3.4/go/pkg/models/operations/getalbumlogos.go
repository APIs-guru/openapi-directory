package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumLogosPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetAlbumLogosQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetAlbumLogosRequest struct {
	PathParams  GetAlbumLogosPathParams
	QueryParams GetAlbumLogosQueryParams
}

type GetAlbumLogosResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Pictures    []shared.Picture
}
