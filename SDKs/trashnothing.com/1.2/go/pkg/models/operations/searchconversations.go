package operations

import (
	"openapi/pkg/models/shared"
)

type SearchConversationsQueryParams struct {
	DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
	Page             *int64   `queryParam:"style=form,explode=true,name=page"`
	PerPage          *int64   `queryParam:"style=form,explode=true,name=per_page"`
	Search           string   `queryParam:"style=form,explode=true,name=search"`
}

type SearchConversationsRequest struct {
	QueryParams SearchConversationsQueryParams
}

type SearchConversations200ApplicationJSON struct {
	Conversations []shared.Conversation `json:"conversations"`
	Page          *int64                `json:"page"`
	PerPage       *int64                `json:"per_page"`
	Search        *string               `json:"search"`
}

type SearchConversationsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	SearchConversations200ApplicationJSONObject *SearchConversations200ApplicationJSON
}
