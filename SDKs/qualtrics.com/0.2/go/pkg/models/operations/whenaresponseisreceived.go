package operations

import (
	"openapi/pkg/models/shared"
)

type WhenAResponseIsReceivedRequest struct {
	Request shared.SubscribeToEventBody `request:"mediaType=application/json"`
}

type WhenAResponseIsReceivedResponse struct {
	ContentType                string
	EventSubscriptionsResponse *shared.EventSubscriptionsResponse
	StatusCode                 int64
}
