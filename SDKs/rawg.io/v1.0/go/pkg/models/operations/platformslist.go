package operations

import (
	"openapi/pkg/models/shared"
)

type PlatformsListQueryParams struct {
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type PlatformsListRequest struct {
	QueryParams PlatformsListQueryParams
}

type PlatformsList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next"`
	Previous *string           `json:"previous"`
	Results  []shared.Platform `json:"results"`
}

type PlatformsListResponse struct {
	ContentType                           string
	StatusCode                            int64
	PlatformsList200ApplicationJSONObject *PlatformsList200ApplicationJSON
}
