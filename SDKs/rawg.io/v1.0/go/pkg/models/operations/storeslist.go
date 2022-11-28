package operations

import (
	"openapi/pkg/models/shared"
)

type StoresListQueryParams struct {
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type StoresList200ApplicationJSON struct {
	Count    int64          `json:"count"`
	Next     *string        `json:"next,omitempty"`
	Previous *string        `json:"previous,omitempty"`
	Results  []shared.Store `json:"results"`
}

type StoresListRequest struct {
	QueryParams StoresListQueryParams
}

type StoresListResponse struct {
	ContentType                        string
	StatusCode                         int64
	StoresList200ApplicationJSONObject *StoresList200ApplicationJSON
}
