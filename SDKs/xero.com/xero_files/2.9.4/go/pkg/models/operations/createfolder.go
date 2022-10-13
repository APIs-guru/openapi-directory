package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFolderHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type CreateFolderSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateFolderRequest struct {
	Headers  CreateFolderHeaders
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreateFolderSecurity
}

type CreateFolderResponse struct {
	ContentType string
	Folder      *interface{}
	StatusCode  int64
}
