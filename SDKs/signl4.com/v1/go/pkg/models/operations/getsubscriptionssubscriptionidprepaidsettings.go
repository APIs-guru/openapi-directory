package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionsSubscriptionIDPrepaidSettingsPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetSubscriptionsSubscriptionIDPrepaidSettingsRequest struct {
	PathParams GetSubscriptionsSubscriptionIDPrepaidSettingsPathParams
}

type GetSubscriptionsSubscriptionIDPrepaidSettingsResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	PrepaidSettingsInfo  *shared.PrepaidSettingsInfo
	StatusCode           int64
}
