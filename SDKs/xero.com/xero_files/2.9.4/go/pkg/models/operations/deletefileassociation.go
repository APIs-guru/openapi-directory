package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFileAssociationPathParams struct {
	FileID   string `pathParam:"style=simple,explode=false,name=FileId"`
	ObjectID string `pathParam:"style=simple,explode=false,name=ObjectId"`
}

type DeleteFileAssociationHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type DeleteFileAssociationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteFileAssociationRequest struct {
	PathParams DeleteFileAssociationPathParams
	Headers    DeleteFileAssociationHeaders
	Security   DeleteFileAssociationSecurity
}

type DeleteFileAssociationResponse struct {
	ContentType string
	StatusCode  int64
}
