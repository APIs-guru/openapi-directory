package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionsSubscriptionIDPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetSubscriptionsSubscriptionIDRequest struct {
	PathParams GetSubscriptionsSubscriptionIDPathParams
}

type GetSubscriptionsSubscriptionIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	SubscriptionInfo     *shared.SubscriptionInfo
}
