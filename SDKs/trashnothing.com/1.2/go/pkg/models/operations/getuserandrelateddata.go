package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserAndRelatedDataPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUserAndRelatedDataRequest struct {
	PathParams GetUserAndRelatedDataPathParams
}

type GetUserAndRelatedData200ApplicationJSON struct {
	Feedback    []shared.Feedback `json:"feedback"`
	OfferCount  *int64            `json:"offer_count"`
	Posts       []shared.Post     `json:"posts"`
	User        *shared.User      `json:"user"`
	WantedCount *int64            `json:"wanted_count"`
}

type GetUserAndRelatedDataResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetUserAndRelatedData200ApplicationJSONObject *GetUserAndRelatedData200ApplicationJSON
}
