package operations

import (
	"openapi/pkg/models/shared"
)

type GetFileAssociationsPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=FileId"`
}

type GetFileAssociationsHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
}

type GetFileAssociationsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetFileAssociationsRequest struct {
	PathParams GetFileAssociationsPathParams
	Headers    GetFileAssociationsHeaders
	Security   GetFileAssociationsSecurity
}

type GetFileAssociationsResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
