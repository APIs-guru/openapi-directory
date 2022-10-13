package operations

import (
	"openapi/pkg/models/shared"
)

type GetConversationMessagesPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type GetConversationMessagesQueryParams struct {
	DevicePixelRatio    *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
	IncludeConversation *int64   `queryParam:"style=form,explode=true,name=include_conversation"`
	Page                *int64   `queryParam:"style=form,explode=true,name=page"`
	PerPage             *int64   `queryParam:"style=form,explode=true,name=per_page"`
}

type GetConversationMessagesRequest struct {
	PathParams  GetConversationMessagesPathParams
	QueryParams GetConversationMessagesQueryParams
}

type GetConversationMessages200ApplicationJSON struct {
	Conversation *shared.Conversation `json:"conversation"`
	Messages     []shared.Message     `json:"messages"`
	Page         *int64               `json:"page"`
	PerPage      *int64               `json:"per_page"`
}

type GetConversationMessagesResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetConversationMessages200ApplicationJSONObject *GetConversationMessages200ApplicationJSON
}
