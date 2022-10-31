package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoEmbedPresetPathParams struct {
	PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
	VideoID  float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoEmbedPresetSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoEmbedPresetRequest struct {
	PathParams AddVideoEmbedPresetPathParams
	Security   AddVideoEmbedPresetSecurity
}

type AddVideoEmbedPresetResponse struct {
	ContentType string
	StatusCode  int64
}
