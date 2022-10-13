package operations

import (
	"openapi/pkg/models/shared"
)

type SetNotificationsRequestPathParams struct {
	SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
}

type SetNotificationsRequestRequest struct {
	PathParams SetNotificationsRequestPathParams
	Request    shared.SetNotificationsRequest `request:"mediaType=application/json"`
}

type SetNotificationsRequestResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
