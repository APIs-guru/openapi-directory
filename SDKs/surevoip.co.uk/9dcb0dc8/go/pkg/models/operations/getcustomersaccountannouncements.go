package operations

import (
"openapi/pkg/models/shared")

type GetCustomersAccountAnnouncementsPathParams struct {
    Account int64 `pathParam:"style=simple,explode=false,name=account"`
    
}

type GetCustomersAccountAnnouncementsRequest struct {
    PathParams GetCustomersAccountAnnouncementsPathParams 
    
}

type GetCustomersAccountAnnouncements200ApplicationJSON struct {
    List []shared.OneannouncementsPostResponses201ContentApplication1jsonSchema `json:"list,omitempty"`
    
}

type GetCustomersAccountAnnouncementsResponse struct {
    ContentType string 
    GetCustomersAccountAnnouncements200ApplicationJSONObject *GetCustomersAccountAnnouncements200ApplicationJSON 
    StatusCode int64 
    OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema 
    
}

