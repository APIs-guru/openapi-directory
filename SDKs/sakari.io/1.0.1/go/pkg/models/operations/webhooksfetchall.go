package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksFetchAllPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type WebhooksFetchAllSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type WebhooksFetchAllRequest struct {
	PathParams WebhooksFetchAllPathParams
	Security   WebhooksFetchAllSecurity
}

type WebhooksFetchAllResponse struct {
	ContentType      string
	StatusCode       int64
	WebhooksResponse *shared.WebhooksResponse
}
