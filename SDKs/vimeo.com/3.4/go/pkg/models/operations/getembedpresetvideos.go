package operations

import (
"openapi/pkg/models/shared")

type GetEmbedPresetVideosPathParams struct {
    PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetEmbedPresetVideosQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetEmbedPresetVideosRequest struct {
    PathParams GetEmbedPresetVideosPathParams 
    QueryParams GetEmbedPresetVideosQueryParams 
    
}

type GetEmbedPresetVideosResponse struct {
    ContentType string 
    StatusCode int64 
    Videos []shared.Video 
    
}

