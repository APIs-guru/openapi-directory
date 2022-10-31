package operations

import (
"openapi/pkg/models/shared")

type GetEmbedPresetsPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetEmbedPresetsQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetEmbedPresetsRequest struct {
    PathParams GetEmbedPresetsPathParams 
    QueryParams GetEmbedPresetsQueryParams 
    
}

type GetEmbedPresetsResponse struct {
    ContentType string 
    StatusCode int64 
    Presets []shared.Presets 
    
}

