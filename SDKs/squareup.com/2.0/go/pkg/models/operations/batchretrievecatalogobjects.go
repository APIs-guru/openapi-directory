package operations

import (
	"openapi/pkg/models/shared"
)

type BatchRetrieveCatalogObjectsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type BatchRetrieveCatalogObjectsRequest struct {
	Request  shared.BatchRetrieveCatalogObjectsRequest `request:"mediaType=application/json"`
	Security BatchRetrieveCatalogObjectsSecurity
}

type BatchRetrieveCatalogObjectsResponse struct {
	BatchRetrieveCatalogObjectsResponse *shared.BatchRetrieveCatalogObjectsResponse
	ContentType                         string
	StatusCode                          int64
}
