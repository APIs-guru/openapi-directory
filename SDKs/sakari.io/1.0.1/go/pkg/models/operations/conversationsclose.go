package operations

import (
"openapi/pkg/models/shared")

type ConversationsClosePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ConversationID string `pathParam:"style=simple,explode=false,name=conversationId"`
    
}

type ConversationsCloseSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type ConversationsCloseRequest struct {
    PathParams ConversationsClosePathParams 
    Security ConversationsCloseSecurity 
    
}

type ConversationsCloseResponse struct {
    ContentType string 
    ConversationResponse *shared.ConversationResponse 
    StatusCode int64 
    
}

