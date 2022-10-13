package operations

import (
	"openapi/pkg/models/shared"
)

type EditEmbedPresetPathParams struct {
	PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
	UserID   float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type EditEmbedPresetRequestBodyOutroEnum string

const (
	EditEmbedPresetRequestBodyOutroEnumNothing EditEmbedPresetRequestBodyOutroEnum = "nothing"
)

type EditEmbedPresetRequestBody struct {
	Outro *EditEmbedPresetRequestBodyOutroEnum `json:"outro"`
}

type EditEmbedPresetRequest struct {
	PathParams EditEmbedPresetPathParams
	Request    *EditEmbedPresetRequestBody `request:"mediaType=application/vnd.vimeo.preset+json"`
}

type EditEmbedPresetResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Presets     *shared.Presets
}
