package operations

import (
"openapi/pkg/models/shared")

type GamesDevelopmentTeamListPathParams struct {
    GamePk string `pathParam:"style=simple,explode=false,name=game_pk"`
    
}

type GamesDevelopmentTeamListQueryParams struct {
    Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GamesDevelopmentTeamListRequest struct {
    PathParams GamesDevelopmentTeamListPathParams 
    QueryParams GamesDevelopmentTeamListQueryParams 
    
}

type GamesDevelopmentTeamList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.GamePersonList `json:"results"`
    
}

type GamesDevelopmentTeamListResponse struct {
    ContentType string 
    StatusCode int64 
    GamesDevelopmentTeamList200ApplicationJSONObject *GamesDevelopmentTeamList200ApplicationJSON 
    
}

