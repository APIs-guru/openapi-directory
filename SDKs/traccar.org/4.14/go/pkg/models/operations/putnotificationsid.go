package operations

import (
	"openapi/pkg/models/shared"
)

type PutNotificationsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutNotificationsIDRequest struct {
	PathParams PutNotificationsIDPathParams
	Request    shared.Notification `request:"mediaType=application/json"`
}

type PutNotificationsIDResponse struct {
	ContentType  string
	Notification *shared.Notification
	StatusCode   int64
}
