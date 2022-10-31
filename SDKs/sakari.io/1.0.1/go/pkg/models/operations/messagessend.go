package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesSendPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type MessagesSendSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type MessagesSendRequest struct {
	PathParams MessagesSendPathParams
	Request    *shared.SendMessagesRequest `request:"mediaType=application/json"`
	Security   MessagesSendSecurity
}

type MessagesSendResponse struct {
	ContentType          string
	SendMessagesResponse *shared.SendMessagesResponse
	StatusCode           int64
}
