package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetMessagesPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type UserAPIGetMessagesInboxEnum string

const (
    UserAPIGetMessagesInboxEnumNothing UserAPIGetMessagesInboxEnum = "Nothing"
UserAPIGetMessagesInboxEnumReceived UserAPIGetMessagesInboxEnum = "Received"
UserAPIGetMessagesInboxEnumSent UserAPIGetMessagesInboxEnum = "Sent"
UserAPIGetMessagesInboxEnumNotifications UserAPIGetMessagesInboxEnum = "Notifications"
)


type UserAPIGetMessagesQueryParams struct {
    AnotherUserID *int32 `queryParam:"style=form,explode=true,name=anotherUserId"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Inbox *UserAPIGetMessagesInboxEnum `queryParam:"style=form,explode=true,name=inbox"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    Unread *bool `queryParam:"style=form,explode=true,name=unread"`
    
}

type UserAPIGetMessagesRequest struct {
    PathParams UserAPIGetMessagesPathParams 
    QueryParams UserAPIGetMessagesQueryParams 
    
}

type UserAPIGetMessagesResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultUserMessageContract *shared.PartialFindResultUserMessageContract 
    StatusCode int64 
    
}

