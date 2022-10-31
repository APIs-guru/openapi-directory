package operations

import (
"openapi/pkg/models/shared")

type MessagesFetchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
    
}

type MessagesFetchSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type MessagesFetchRequest struct {
    PathParams MessagesFetchPathParams 
    Security MessagesFetchSecurity 
    
}

type MessagesFetchResponse struct {
    ContentType string 
    MessageResponse *shared.MessageResponse 
    StatusCode int64 
    
}

