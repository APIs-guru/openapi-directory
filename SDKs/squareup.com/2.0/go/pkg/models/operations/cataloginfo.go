package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogInfoSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CatalogInfoRequest struct {
	Security CatalogInfoSecurity
}

type CatalogInfoResponse struct {
	CatalogInfoResponse *shared.CatalogInfoResponse
	ContentType         string
	StatusCode          int64
}
