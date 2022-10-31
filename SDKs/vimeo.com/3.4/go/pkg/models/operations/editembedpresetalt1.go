package operations

import (
"openapi/pkg/models/shared")

type EditEmbedPresetAlt1PathParams struct {
    PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
    
}


type EditEmbedPresetAlt1RequestBodyOutroEnum string

const (
    EditEmbedPresetAlt1RequestBodyOutroEnumNothing EditEmbedPresetAlt1RequestBodyOutroEnum = "nothing"
)


type EditEmbedPresetAlt1RequestBody struct {
    Outro *EditEmbedPresetAlt1RequestBodyOutroEnum `json:"outro,omitempty"`
    
}

type EditEmbedPresetAlt1Request struct {
    PathParams EditEmbedPresetAlt1PathParams 
    Request *EditEmbedPresetAlt1RequestBody `request:"mediaType=application/vnd.vimeo.preset+json"`
    
}

type EditEmbedPresetAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Presets *shared.Presets 
    
}

