package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCallFeedbackServers = []string{
	"https://api.twilio.com",
}

type UpdateCallFeedbackPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type UpdateCallFeedbackRequestBodyUpdateCallFeedbackRequest struct {
	Issue        []shared.CallFeedbackEnumIssuesEnum `form:"name=Issue"`
	QualityScore *int64                              `form:"name=QualityScore"`
}

type UpdateCallFeedbackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCallFeedbackRequest struct {
	ServerURL  *string
	PathParams UpdateCallFeedbackPathParams
	Request    *UpdateCallFeedbackRequestBodyUpdateCallFeedbackRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCallFeedbackSecurity
}

type UpdateCallFeedbackResponse struct {
	ContentType                     string
	StatusCode                      int64
	APIV2010AccountCallCallFeedback *shared.APIV2010AccountCallCallFeedback
}
