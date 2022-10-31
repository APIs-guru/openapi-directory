package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAllPostsQueryParams struct {
    DateMax time.Time `queryParam:"style=form,explode=true,name=date_max"`
    DateMin time.Time `queryParam:"style=form,explode=true,name=date_min"`
    DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Types string `queryParam:"style=form,explode=true,name=types"`
    
}

type GetAllPostsSecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type GetAllPostsSecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type GetAllPostsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAllPostsSecurity struct {
    Option1 *GetAllPostsSecurityOption1 `security:"option"`
    Option2 *GetAllPostsSecurityOption2 `security:"option"`
    Option3 *GetAllPostsSecurityOption3 `security:"option"`
    
}

type GetAllPostsRequest struct {
    QueryParams GetAllPostsQueryParams 
    Security GetAllPostsSecurity 
    
}

type GetAllPosts200ApplicationJSON struct {
    Posts []shared.Post `json:"posts,omitempty"`
    
}

type GetAllPostsResponse struct {
    ContentType string 
    StatusCode int64 
    GetAllPosts200ApplicationJSONObject *GetAllPosts200ApplicationJSON 
    
}

