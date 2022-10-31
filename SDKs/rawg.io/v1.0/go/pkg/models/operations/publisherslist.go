package operations

import (
	"openapi/pkg/models/shared"
)

type PublishersListQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type PublishersListRequest struct {
	QueryParams PublishersListQueryParams
}

type PublishersList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
	Results  []shared.Publisher `json:"results"`
}

type PublishersListResponse struct {
	ContentType                            string
	StatusCode                             int64
	PublishersList200ApplicationJSONObject *PublishersList200ApplicationJSON
}
