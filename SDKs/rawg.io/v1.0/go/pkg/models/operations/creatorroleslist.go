package operations

import (
	"openapi/pkg/models/shared"
)

type CreatorRolesListQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type CreatorRolesListRequest struct {
	QueryParams CreatorRolesListQueryParams
}

type CreatorRolesList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
	Results  []shared.Position `json:"results"`
}

type CreatorRolesListResponse struct {
	ContentType                              string
	StatusCode                               int64
	CreatorRolesList200ApplicationJSONObject *CreatorRolesList200ApplicationJSON
}
