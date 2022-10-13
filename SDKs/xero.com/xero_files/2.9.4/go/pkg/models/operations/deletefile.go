package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFilePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=FileId"`
}

type DeleteFileHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type DeleteFileSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteFileRequest struct {
	PathParams DeleteFilePathParams
	Headers    DeleteFileHeaders
	Security   DeleteFileSecurity
}

type DeleteFileResponse struct {
	ContentType string
	StatusCode  int64
}
