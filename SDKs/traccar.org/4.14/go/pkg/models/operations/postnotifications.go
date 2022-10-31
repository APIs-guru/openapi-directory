package operations

import (
	"openapi/pkg/models/shared"
)

type PostNotificationsRequest struct {
	Request shared.Notification `request:"mediaType=application/json"`
}

type PostNotificationsResponse struct {
	ContentType  string
	Notification *shared.Notification
	StatusCode   int64
}
