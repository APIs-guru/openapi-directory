package operations

import (
"openapi/pkg/models/shared")

type GetNotificationsQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
    GroupID *int64 `queryParam:"style=form,explode=true,name=groupId"`
    Refresh *bool `queryParam:"style=form,explode=true,name=refresh"`
    UserID *int64 `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetNotificationsRequest struct {
    QueryParams GetNotificationsQueryParams 
    
}

type GetNotificationsResponse struct {
    ContentType string 
    Notifications []shared.Notification 
    StatusCode int64 
    
}

