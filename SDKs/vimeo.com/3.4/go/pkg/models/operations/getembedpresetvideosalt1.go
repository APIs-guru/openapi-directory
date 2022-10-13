package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmbedPresetVideosAlt1PathParams struct {
	PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
}

type GetEmbedPresetVideosAlt1QueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetEmbedPresetVideosAlt1Request struct {
	PathParams  GetEmbedPresetVideosAlt1PathParams
	QueryParams GetEmbedPresetVideosAlt1QueryParams
}

type GetEmbedPresetVideosAlt1Response struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}
