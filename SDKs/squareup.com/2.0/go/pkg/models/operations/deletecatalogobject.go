package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCatalogObjectPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=object_id"`
}

type DeleteCatalogObjectSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteCatalogObjectRequest struct {
	PathParams DeleteCatalogObjectPathParams
	Security   DeleteCatalogObjectSecurity
}

type DeleteCatalogObjectResponse struct {
	ContentType                 string
	DeleteCatalogObjectResponse *shared.DeleteCatalogObjectResponse
	StatusCode                  int64
}
