package operations

import (
"openapi/pkg/models/shared")

type DevelopersListQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type DevelopersListRequest struct {
    QueryParams DevelopersListQueryParams 
    
}

type DevelopersList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Developer `json:"results"`
    
}

type DevelopersListResponse struct {
    ContentType string 
    StatusCode int64 
    DevelopersList200ApplicationJSONObject *DevelopersList200ApplicationJSON 
    
}

