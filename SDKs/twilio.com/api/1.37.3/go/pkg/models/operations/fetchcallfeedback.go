package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCallFeedbackServerList = []string{
	"https://api.twilio.com",
}

type FetchCallFeedbackPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type FetchCallFeedbackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCallFeedbackRequest struct {
	ServerURL  *string
	PathParams FetchCallFeedbackPathParams
	Security   FetchCallFeedbackSecurity
}

type FetchCallFeedbackResponse struct {
	ContentType                     string
	StatusCode                      int64
	APIV2010AccountCallCallFeedback *shared.APIV2010AccountCallCallFeedback
}
