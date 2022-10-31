package operations

import (
"openapi/pkg/models/shared")

type GetStoriesQueryParams struct {
    DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
    Latitude *float64 `queryParam:"style=form,explode=true,name=latitude"`
    Longitude *float64 `queryParam:"style=form,explode=true,name=longitude"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    SortBy *string `queryParam:"style=form,explode=true,name=sort_by"`
    
}

type GetStoriesSecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type GetStoriesSecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type GetStoriesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetStoriesSecurity struct {
    Option1 *GetStoriesSecurityOption1 `security:"option"`
    Option2 *GetStoriesSecurityOption2 `security:"option"`
    Option3 *GetStoriesSecurityOption3 `security:"option"`
    
}

type GetStoriesRequest struct {
    QueryParams GetStoriesQueryParams 
    Security GetStoriesSecurity 
    
}

type GetStories200ApplicationJSON struct {
    Stories []shared.Story `json:"stories,omitempty"`
    
}

type GetStoriesResponse struct {
    ContentType string 
    StatusCode int64 
    GetStories200ApplicationJSONObject *GetStories200ApplicationJSON 
    
}

