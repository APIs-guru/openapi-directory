package operations

import (
"openapi/pkg/models/shared")

type MessagesFetchAllPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type MessagesFetchAllQueryParams struct {
    ContactID *string `queryParam:"style=form,explode=true,name=contactId"`
    ConversationID *string `queryParam:"style=form,explode=true,name=conversationId"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type MessagesFetchAllSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type MessagesFetchAllRequest struct {
    PathParams MessagesFetchAllPathParams 
    QueryParams MessagesFetchAllQueryParams 
    Security MessagesFetchAllSecurity 
    
}

type MessagesFetchAllResponse struct {
    ContentType string 
    MessagesResponse *shared.MessagesResponse 
    StatusCode int64 
    
}

