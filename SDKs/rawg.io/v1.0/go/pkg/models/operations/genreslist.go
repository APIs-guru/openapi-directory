package operations

import (
"openapi/pkg/models/shared")

type GenresListQueryParams struct {
    Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GenresListRequest struct {
    QueryParams GenresListQueryParams 
    
}

type GenresList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Genre `json:"results"`
    
}

type GenresListResponse struct {
    ContentType string 
    StatusCode int64 
    GenresList200ApplicationJSONObject *GenresList200ApplicationJSON 
    
}

