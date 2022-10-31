package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionsSubscriptionIDPrepaidBalancePathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetSubscriptionsSubscriptionIDPrepaidBalanceRequest struct {
	PathParams GetSubscriptionsSubscriptionIDPrepaidBalancePathParams
}

type GetSubscriptionsSubscriptionIDPrepaidBalanceResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	PrepaidBalanceInfo   *shared.PrepaidBalanceInfo
	StatusCode           int64
}
