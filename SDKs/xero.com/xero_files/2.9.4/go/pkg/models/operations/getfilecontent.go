package operations

import (
	"openapi/pkg/models/shared"
)

type GetFileContentPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=FileId"`
}

type GetFileContentHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type GetFileContentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetFileContentRequest struct {
	PathParams GetFileContentPathParams
	Headers    GetFileContentHeaders
	Security   GetFileContentSecurity
}

type GetFileContentResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetFileContent200ApplicationOctetStreamBinaryString []byte
}
