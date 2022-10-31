package operations

import (
"openapi/pkg/models/shared")

type CreatorsListQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type CreatorsListRequest struct {
    QueryParams CreatorsListQueryParams 
    
}

type CreatorsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Person `json:"results"`
    
}

type CreatorsListResponse struct {
    ContentType string 
    StatusCode int64 
    CreatorsList200ApplicationJSONObject *CreatorsList200ApplicationJSON 
    
}

