package operations

import (
"time"
"openapi/pkg/models/shared")

type GetUserPostsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetUserPostsQueryParams struct {
    DateMax *time.Time `queryParam:"style=form,explode=true,name=date_max"`
    DateMin *time.Time `queryParam:"style=form,explode=true,name=date_min"`
    DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
    GroupIds *string `queryParam:"style=form,explode=true,name=group_ids"`
    Latitude *float64 `queryParam:"style=form,explode=true,name=latitude"`
    Longitude *float64 `queryParam:"style=form,explode=true,name=longitude"`
    Outcomes *string `queryParam:"style=form,explode=true,name=outcomes"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Radius *float64 `queryParam:"style=form,explode=true,name=radius"`
    SortBy *string `queryParam:"style=form,explode=true,name=sort_by"`
    Sources string `queryParam:"style=form,explode=true,name=sources"`
    Types string `queryParam:"style=form,explode=true,name=types"`
    
}

type GetUserPostsSecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type GetUserPostsSecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type GetUserPostsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetUserPostsSecurity struct {
    Option1 *GetUserPostsSecurityOption1 `security:"option"`
    Option2 *GetUserPostsSecurityOption2 `security:"option"`
    Option3 *GetUserPostsSecurityOption3 `security:"option"`
    
}

type GetUserPostsRequest struct {
    PathParams GetUserPostsPathParams 
    QueryParams GetUserPostsQueryParams 
    Security GetUserPostsSecurity 
    
}

type GetUserPosts200ApplicationJSON struct {
    EndIndex *int64 `json:"end_index,omitempty"`
    GroupIds []string `json:"group_ids,omitempty"`
    LastListingsView *time.Time `json:"last_listings_view,omitempty"`
    NumPages *int64 `json:"num_pages,omitempty"`
    NumPosts *int64 `json:"num_posts,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PerPage *int64 `json:"per_page,omitempty"`
    Posts []shared.Post `json:"posts,omitempty"`
    StartIndex *int64 `json:"start_index,omitempty"`
    
}

type GetUserPostsResponse struct {
    ContentType string 
    StatusCode int64 
    GetUserPosts200ApplicationJSONObject *GetUserPosts200ApplicationJSON 
    
}

