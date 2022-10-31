package operations

import (
"openapi/pkg/models/shared")

type GetMyConversationsQueryParams struct {
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    UnreadOnly *bool `queryParam:"style=form,explode=true,name=unread_only"`
    
}

type GetMyConversationsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyConversationsRequest struct {
    QueryParams GetMyConversationsQueryParams 
    Security GetMyConversationsSecurity 
    
}

type GetMyConversationsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

