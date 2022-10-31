package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumLogoPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	LogoID  float64 `pathParam:"style=simple,explode=false,name=logo_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetAlbumLogoRequest struct {
	PathParams GetAlbumLogoPathParams
}

type GetAlbumLogoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
