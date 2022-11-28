package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomersAccountAnnouncementsAnnouncementIDPathParams struct {
	Account        int64  `pathParam:"style=simple,explode=false,name=account"`
	AnnouncementID string `pathParam:"style=simple,explode=false,name=announcement_id"`
}

type GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type GetCustomersAccountAnnouncementsAnnouncementIDRequest struct {
	PathParams GetCustomersAccountAnnouncementsAnnouncementIDPathParams
}

type GetCustomersAccountAnnouncementsAnnouncementIDResponse struct {
	ContentType                                                            string
	GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSONObject *GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON
	StatusCode                                                             int64
	OneannouncementsPostResponses201ContentApplication1jsonSchema          *shared.OneannouncementsPostResponses201ContentApplication1jsonSchema
}
