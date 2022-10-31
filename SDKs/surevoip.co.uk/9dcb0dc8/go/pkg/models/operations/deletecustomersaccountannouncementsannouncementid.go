package operations

import (
"openapi/pkg/models/shared")

type DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams struct {
    Account int64 `pathParam:"style=simple,explode=false,name=account"`
    AnnouncementID string `pathParam:"style=simple,explode=false,name=announcement_id"`
    
}

type DeleteCustomersAccountAnnouncementsAnnouncementIDRequest struct {
    PathParams DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams 
    
}

type DeleteCustomersAccountAnnouncementsAnnouncementIDResponse struct {
    ContentType string 
    StatusCode int64 
    OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema 
    
}

