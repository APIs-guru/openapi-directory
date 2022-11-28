package operations

import (
	"openapi/pkg/models/shared"
)

type PlatformsListsParentsListQueryParams struct {
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type PlatformsListsParentsList200ApplicationJSON struct {
	Count    int64                         `json:"count"`
	Next     *string                       `json:"next,omitempty"`
	Previous *string                       `json:"previous,omitempty"`
	Results  []shared.PlatformParentSingle `json:"results"`
}

type PlatformsListsParentsListRequest struct {
	QueryParams PlatformsListsParentsListQueryParams
}

type PlatformsListsParentsListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PlatformsListsParentsList200ApplicationJSONObject *PlatformsListsParentsList200ApplicationJSON
}
