package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFilePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=FileId"`
}

type UpdateFileHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type UpdateFileSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateFileRequest struct {
	PathParams UpdateFilePathParams
	Headers    UpdateFileHeaders
	Request    *shared.FileObject `request:"mediaType=application/json"`
	Security   UpdateFileSecurity
}

type UpdateFileResponse struct {
	ContentType string
	FileObject  *shared.FileObject
	StatusCode  int64
}
