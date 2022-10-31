package operations

import (
"openapi/pkg/models/shared")

type GetChartFavoriteStatusQueryParams struct {
    Q []int64 `queryParam:"serialization=json,name=q"`
    
}

type GetChartFavoriteStatusSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetChartFavoriteStatusRequest struct {
    QueryParams GetChartFavoriteStatusQueryParams 
    Security GetChartFavoriteStatusSecurity 
    
}

type GetChartFavoriteStatus400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartFavoriteStatus401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartFavoriteStatus404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartFavoriteStatus500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartFavoriteStatusResponse struct {
    ContentType string 
    GetChartFavoriteStatus400ApplicationJSONObject *GetChartFavoriteStatus400ApplicationJSON 
    GetChartFavoriteStatus401ApplicationJSONObject *GetChartFavoriteStatus401ApplicationJSON 
    GetChartFavoriteStatus404ApplicationJSONObject *GetChartFavoriteStatus404ApplicationJSON 
    GetChartFavoriteStatus500ApplicationJSONObject *GetChartFavoriteStatus500ApplicationJSON 
    GetFavStarIdsSchema *shared.GetFavStarIdsSchema 
    StatusCode int64 
    
}

