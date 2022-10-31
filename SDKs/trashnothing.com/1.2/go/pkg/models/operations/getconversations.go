package operations

import (
"openapi/pkg/models/shared")

type GetConversationsQueryParams struct {
    Category *string `queryParam:"style=form,explode=true,name=category"`
    DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
    IncludeNumUnread *int64 `queryParam:"style=form,explode=true,name=include_num_unread"`
    NumMessages *int64 `queryParam:"style=form,explode=true,name=num_messages"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetConversationsRequest struct {
    QueryParams GetConversationsQueryParams 
    
}

type GetConversations200ApplicationJSON struct {
    Conversations []shared.Conversation `json:"conversations,omitempty"`
    NumUnread *int64 `json:"num_unread,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PerPage *int64 `json:"per_page,omitempty"`
    
}

type GetConversationsResponse struct {
    ContentType string 
    StatusCode int64 
    GetConversations200ApplicationJSONObject *GetConversations200ApplicationJSON 
    
}

