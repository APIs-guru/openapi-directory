package operations

import (
	"openapi/pkg/models/shared"
)

type UserAPIGetMessagePathParams struct {
	MessageID int32 `pathParam:"style=simple,explode=false,name=messageId"`
}

type UserAPIGetMessageRequest struct {
	PathParams UserAPIGetMessagePathParams
}

type UserAPIGetMessageResponse struct {
	Body                []byte
	ContentType         string
	StatusCode          int64
	UserMessageContract *shared.UserMessageContract
}
