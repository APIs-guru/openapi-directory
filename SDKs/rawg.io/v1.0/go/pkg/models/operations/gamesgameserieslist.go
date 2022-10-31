package operations

import (
"openapi/pkg/models/shared")

type GamesGameSeriesListPathParams struct {
    GamePk string `pathParam:"style=simple,explode=false,name=game_pk"`
    
}

type GamesGameSeriesListQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GamesGameSeriesListRequest struct {
    PathParams GamesGameSeriesListPathParams 
    QueryParams GamesGameSeriesListQueryParams 
    
}

type GamesGameSeriesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Game `json:"results"`
    
}

type GamesGameSeriesListResponse struct {
    ContentType string 
    StatusCode int64 
    GamesGameSeriesList200ApplicationJSONObject *GamesGameSeriesList200ApplicationJSON 
    
}

