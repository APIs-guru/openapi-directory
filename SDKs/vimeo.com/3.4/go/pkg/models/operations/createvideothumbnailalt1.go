package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVideoThumbnailAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateVideoThumbnailAlt1RequestBody struct {
	Active *bool    `json:"active,omitempty"`
	Time   *float64 `json:"time,omitempty"`
}

type CreateVideoThumbnailAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateVideoThumbnailAlt1Request struct {
	PathParams CreateVideoThumbnailAlt1PathParams
	Request    *CreateVideoThumbnailAlt1RequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   CreateVideoThumbnailAlt1Security
}

type CreateVideoThumbnailAlt1Response struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
