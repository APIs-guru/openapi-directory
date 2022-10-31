package operations

import (
	"openapi/pkg/models/shared"
)

type ListSubscriptionEventsPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type ListSubscriptionEventsQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type ListSubscriptionEventsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListSubscriptionEventsRequest struct {
	PathParams  ListSubscriptionEventsPathParams
	QueryParams ListSubscriptionEventsQueryParams
	Security    ListSubscriptionEventsSecurity
}

type ListSubscriptionEventsResponse struct {
	ContentType                    string
	ListSubscriptionEventsResponse *shared.ListSubscriptionEventsResponse
	StatusCode                     int64
}
