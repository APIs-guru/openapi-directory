package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSpinsQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    End *time.Time `queryParam:"style=form,explode=true,name=end"`
    Expand []string `queryParam:"style=form,explode=true,name=expand"`
    Fields []string `queryParam:"style=form,explode=true,name=fields"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PlaylistID *int64 `queryParam:"style=form,explode=true,name=playlist_id"`
    ShowID *int64 `queryParam:"style=form,explode=true,name=show_id"`
    Start *time.Time `queryParam:"style=form,explode=true,name=start"`
    
}

type GetSpinsRequest struct {
    QueryParams GetSpinsQueryParams 
    
}

type GetSpins200ApplicationJSONLinks struct {
    Self *shared.Link `json:"self,omitempty"`
    
}

type GetSpins200ApplicationJSON struct {
    Links *GetSpins200ApplicationJSONLinks `json:"_links,omitempty"`
    Meta *shared.Pagination `json:"_meta,omitempty"`
    Items []shared.Spin `json:"items,omitempty"`
    
}

type GetSpinsResponse struct {
    Body []byte 
    ContentType string 
    GetSpins200ApplicationJSONObject *GetSpins200ApplicationJSON 
    StatusCode int64 
    
}

