package operations

import (
	"openapi/pkg/models/shared"
)

type ReplaceAlbumCustomThumbPathParams struct {
	AlbumID     float64 `pathParam:"style=simple,explode=false,name=album_id"`
	ThumbnailID float64 `pathParam:"style=simple,explode=false,name=thumbnail_id"`
	UserID      float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type ReplaceAlbumCustomThumbRequestBody struct {
	Active *bool `json:"active,omitempty"`
}

type ReplaceAlbumCustomThumbSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ReplaceAlbumCustomThumbRequest struct {
	PathParams ReplaceAlbumCustomThumbPathParams
	Request    *ReplaceAlbumCustomThumbRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   ReplaceAlbumCustomThumbSecurity
}

type ReplaceAlbumCustomThumbResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
