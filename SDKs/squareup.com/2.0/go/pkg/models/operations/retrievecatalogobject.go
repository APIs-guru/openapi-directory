package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveCatalogObjectPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=object_id"`
}

type RetrieveCatalogObjectQueryParams struct {
	CatalogVersion        *int64 `queryParam:"style=form,explode=true,name=catalog_version"`
	IncludeRelatedObjects *bool  `queryParam:"style=form,explode=true,name=include_related_objects"`
}

type RetrieveCatalogObjectSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveCatalogObjectRequest struct {
	PathParams  RetrieveCatalogObjectPathParams
	QueryParams RetrieveCatalogObjectQueryParams
	Security    RetrieveCatalogObjectSecurity
}

type RetrieveCatalogObjectResponse struct {
	ContentType                   string
	RetrieveCatalogObjectResponse *shared.RetrieveCatalogObjectResponse
	StatusCode                    int64
}
