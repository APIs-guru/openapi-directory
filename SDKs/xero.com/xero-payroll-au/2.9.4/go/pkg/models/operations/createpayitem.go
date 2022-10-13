package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePayItemHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type CreatePayItemSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreatePayItemRequest struct {
	Headers  CreatePayItemHeaders
	Request  shared.PayItem `request:"mediaType=application/json"`
	Security CreatePayItemSecurity
}

type CreatePayItemResponse struct {
	ContentType string
	PayItems    *shared.PayItems
	StatusCode  int64
}
