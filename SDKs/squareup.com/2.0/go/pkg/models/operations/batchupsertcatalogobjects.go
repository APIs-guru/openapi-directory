package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpsertCatalogObjectsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type BatchUpsertCatalogObjectsRequest struct {
	Request  shared.BatchUpsertCatalogObjectsRequest `request:"mediaType=application/json"`
	Security BatchUpsertCatalogObjectsSecurity
}

type BatchUpsertCatalogObjectsResponse struct {
	BatchUpsertCatalogObjectsResponse *shared.BatchUpsertCatalogObjectsResponse
	ContentType                       string
	StatusCode                        int64
}
