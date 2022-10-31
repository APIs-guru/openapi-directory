package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveInventoryChangesPathParams struct {
	CatalogObjectID string `pathParam:"style=simple,explode=false,name=catalog_object_id"`
}

type RetrieveInventoryChangesQueryParams struct {
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	LocationIds *string `queryParam:"style=form,explode=true,name=location_ids"`
}

type RetrieveInventoryChangesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveInventoryChangesRequest struct {
	PathParams  RetrieveInventoryChangesPathParams
	QueryParams RetrieveInventoryChangesQueryParams
	Security    RetrieveInventoryChangesSecurity
}

type RetrieveInventoryChangesResponse struct {
	ContentType                      string
	RetrieveInventoryChangesResponse *shared.RetrieveInventoryChangesResponse
	StatusCode                       int64
}
