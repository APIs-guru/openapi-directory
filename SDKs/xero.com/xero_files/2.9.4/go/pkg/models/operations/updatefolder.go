package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFolderPathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=FolderId"`
}

type UpdateFolderHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type UpdateFolderSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateFolderRequest struct {
	PathParams UpdateFolderPathParams
	Headers    UpdateFolderHeaders
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdateFolderSecurity
}

type UpdateFolderResponse struct {
	ContentType string
	Folder      *interface{}
	StatusCode  int64
}
