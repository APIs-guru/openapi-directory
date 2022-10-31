package operations

import (
"openapi/pkg/models/shared")

type ConversationsFetchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ConversationID string `pathParam:"style=simple,explode=false,name=conversationId"`
    
}

type ConversationsFetchSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type ConversationsFetchRequest struct {
    PathParams ConversationsFetchPathParams 
    Security ConversationsFetchSecurity 
    
}

type ConversationsFetchResponse struct {
    ContentType string 
    ConversationResponse *shared.ConversationResponse 
    StatusCode int64 
    
}

