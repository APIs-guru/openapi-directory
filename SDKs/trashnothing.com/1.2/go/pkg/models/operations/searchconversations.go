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
	Conversations []shared.Conversation `json:"conversations,omitempty"`
	Page          *int64                `json:"page,omitempty"`
	PerPage       *int64                `json:"per_page,omitempty"`
	Search        *string               `json:"search,omitempty"`
}

type SearchConversationsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	SearchConversations200ApplicationJSONObject *SearchConversations200ApplicationJSON
}
