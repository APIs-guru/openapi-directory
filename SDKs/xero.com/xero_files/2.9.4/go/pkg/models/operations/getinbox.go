package operations

import (
	"openapi/pkg/models/shared"
)

type GetInboxHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
}

type GetInboxSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetInboxRequest struct {
	Headers  GetInboxHeaders
	Security GetInboxSecurity
}

type GetInboxResponse struct {
	ContentType string
	Folder      *interface{}
	StatusCode  int64
}
