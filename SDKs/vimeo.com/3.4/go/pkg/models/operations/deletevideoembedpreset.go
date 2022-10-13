package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoEmbedPresetPathParams struct {
	PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
	VideoID  float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoEmbedPresetSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoEmbedPresetRequest struct {
	PathParams DeleteVideoEmbedPresetPathParams
	Security   DeleteVideoEmbedPresetSecurity
}

type DeleteVideoEmbedPresetResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
