package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubscriptionPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type UpdateSubscriptionSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateSubscriptionRequest struct {
	PathParams UpdateSubscriptionPathParams
	Request    shared.UpdateSubscriptionRequest `request:"mediaType=application/json"`
	Security   UpdateSubscriptionSecurity
}

type UpdateSubscriptionResponse struct {
	ContentType                string
	StatusCode                 int64
	UpdateSubscriptionResponse *shared.UpdateSubscriptionResponse
}
