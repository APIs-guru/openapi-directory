package operations

import (
	"openapi/pkg/models/shared"
)

type PlatformsListsParentsListQueryParams struct {
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type PlatformsListsParentsListRequest struct {
	QueryParams PlatformsListsParentsListQueryParams
}

type PlatformsListsParentsList200ApplicationJSON struct {
	Count    int64                         `json:"count"`
	Next     *string                       `json:"next"`
	Previous *string                       `json:"previous"`
	Results  []shared.PlatformParentSingle `json:"results"`
}

type PlatformsListsParentsListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PlatformsListsParentsList200ApplicationJSONObject *PlatformsListsParentsList200ApplicationJSON
}
