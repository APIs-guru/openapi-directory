package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventSubscriptionsPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=SubscriptionId"`
}

type GetEventSubscriptionsRequest struct {
	PathParams GetEventSubscriptionsPathParams
}

type GetEventSubscriptionsResponse struct {
	ContentType                string
	EventSubscriptionsResponse *shared.EventSubscriptionsResponse
	StatusCode                 int64
}
