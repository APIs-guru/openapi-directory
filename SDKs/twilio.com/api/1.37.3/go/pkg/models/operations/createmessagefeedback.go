package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMessageFeedbackServerList = []string{
	"https://api.twilio.com",
}

type CreateMessageFeedbackPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	MessageSid string `pathParam:"style=simple,explode=false,name=MessageSid"`
}

type CreateMessageFeedbackCreateMessageFeedbackRequest struct {
	Outcome *shared.MessageFeedbackEnumOutcomeEnum `form:"name=Outcome"`
}

type CreateMessageFeedbackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMessageFeedbackRequest struct {
	ServerURL  *string
	PathParams CreateMessageFeedbackPathParams
	Request    *CreateMessageFeedbackCreateMessageFeedbackRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMessageFeedbackSecurity
}

type CreateMessageFeedbackResponse struct {
	ContentType                           string
	StatusCode                            int64
	APIV2010AccountMessageMessageFeedback *shared.APIV2010AccountMessageMessageFeedback
}
