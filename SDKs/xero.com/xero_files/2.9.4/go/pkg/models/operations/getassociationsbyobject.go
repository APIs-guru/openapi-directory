package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationsByObjectPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=ObjectId"`
}

type GetAssociationsByObjectHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
}

type GetAssociationsByObjectSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAssociationsByObjectRequest struct {
	PathParams GetAssociationsByObjectPathParams
	Headers    GetAssociationsByObjectHeaders
	Security   GetAssociationsByObjectSecurity
}

type GetAssociationsByObjectResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
