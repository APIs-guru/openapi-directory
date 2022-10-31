package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAllPostsChangesQueryParams struct {
    DateMax time.Time `queryParam:"style=form,explode=true,name=date_max"`
    DateMin time.Time `queryParam:"style=form,explode=true,name=date_min"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetAllPostsChangesSecurityOption1 struct {
    Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type GetAllPostsChangesSecurityOption2 struct {
    Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type GetAllPostsChangesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAllPostsChangesSecurity struct {
    Option1 *GetAllPostsChangesSecurityOption1 `security:"option"`
    Option2 *GetAllPostsChangesSecurityOption2 `security:"option"`
    Option3 *GetAllPostsChangesSecurityOption3 `security:"option"`
    
}

type GetAllPostsChangesRequest struct {
    QueryParams GetAllPostsChangesQueryParams 
    Security GetAllPostsChangesSecurity 
    
}

type GetAllPostsChanges200ApplicationJSONChanges struct {
    Date *time.Time `json:"date,omitempty"`
    PostID *string `json:"post_id,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type GetAllPostsChanges200ApplicationJSON struct {
    Changes []GetAllPostsChanges200ApplicationJSONChanges `json:"changes,omitempty"`
    
}

type GetAllPostsChangesResponse struct {
    ContentType string 
    StatusCode int64 
    GetAllPostsChanges200ApplicationJSONObject *GetAllPostsChanges200ApplicationJSON 
    
}

