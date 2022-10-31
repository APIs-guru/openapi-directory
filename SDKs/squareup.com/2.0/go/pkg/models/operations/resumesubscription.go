package operations

import (
	"openapi/pkg/models/shared"
)

type ResumeSubscriptionPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type ResumeSubscriptionSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ResumeSubscriptionRequest struct {
	PathParams ResumeSubscriptionPathParams
	Security   ResumeSubscriptionSecurity
}

type ResumeSubscriptionResponse struct {
	ContentType                string
	ResumeSubscriptionResponse *shared.ResumeSubscriptionResponse
	StatusCode                 int64
}
