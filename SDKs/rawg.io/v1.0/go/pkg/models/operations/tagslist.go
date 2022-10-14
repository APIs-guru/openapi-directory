package operations

import (
	"openapi/pkg/models/shared"
)

type TagsListQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type TagsListRequest struct {
	QueryParams TagsListQueryParams
}

type TagsList200ApplicationJSON struct {
	Count    int64        `json:"count"`
	Next     *string      `json:"next,omitempty"`
	Previous *string      `json:"previous,omitempty"`
	Results  []shared.Tag `json:"results"`
}

type TagsListResponse struct {
	ContentType                      string
	StatusCode                       int64
	TagsList200ApplicationJSONObject *TagsList200ApplicationJSON
}
