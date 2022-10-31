package operations

import (
"openapi/pkg/models/shared")

type GetEmbedPresetsAlt1QueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetEmbedPresetsAlt1Request struct {
    QueryParams GetEmbedPresetsAlt1QueryParams 
    
}

type GetEmbedPresetsAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Presets []shared.Presets 
    
}

