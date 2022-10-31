package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionsSubscriptionIDUserLicensesPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetSubscriptionsSubscriptionIDUserLicensesRequest struct {
	PathParams GetSubscriptionsSubscriptionIDUserLicensesPathParams
}

type GetSubscriptionsSubscriptionIDUserLicensesResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserLicenseInfo      *shared.UserLicenseInfo
}
