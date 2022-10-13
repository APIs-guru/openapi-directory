package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=FileId"`
}

type GetFileHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type GetFileSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetFileRequest struct {
	PathParams GetFilePathParams
	Headers    GetFileHeaders
	Security   GetFileSecurity
}

type GetFileResponse struct {
	ContentType string
	FileObject  *shared.FileObject
	StatusCode  int64
}
