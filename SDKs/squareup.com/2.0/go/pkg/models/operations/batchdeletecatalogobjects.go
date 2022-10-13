package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteCatalogObjectsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type BatchDeleteCatalogObjectsRequest struct {
	Request  shared.BatchDeleteCatalogObjectsRequest `request:"mediaType=application/json"`
	Security BatchDeleteCatalogObjectsSecurity
}

type BatchDeleteCatalogObjectsResponse struct {
	BatchDeleteCatalogObjectsResponse *shared.BatchDeleteCatalogObjectsResponse
	ContentType                       string
	StatusCode                        int64
}
