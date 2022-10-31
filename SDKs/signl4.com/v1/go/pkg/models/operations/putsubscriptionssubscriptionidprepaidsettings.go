package operations

import (
	"openapi/pkg/models/shared"
)

type PutSubscriptionsSubscriptionIDPrepaidSettingsPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PutSubscriptionsSubscriptionIDPrepaidSettingsRequests struct {
	PrepaidSettingsInfo  *shared.PrepaidSettingsInfo `request:"mediaType=application/*+json"`
	PrepaidSettingsInfo1 *shared.PrepaidSettingsInfo `request:"mediaType=application/json"`
	PrepaidSettingsInfo2 *shared.PrepaidSettingsInfo `request:"mediaType=application/json-patch+json"`
	PrepaidSettingsInfo3 *shared.PrepaidSettingsInfo `request:"mediaType=text/json"`
}

type PutSubscriptionsSubscriptionIDPrepaidSettingsRequest struct {
	PathParams PutSubscriptionsSubscriptionIDPrepaidSettingsPathParams
	Request    *PutSubscriptionsSubscriptionIDPrepaidSettingsRequests
}

type PutSubscriptionsSubscriptionIDPrepaidSettingsResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	PrepaidSettingsInfo  *shared.PrepaidSettingsInfo
	StatusCode           int64
}
