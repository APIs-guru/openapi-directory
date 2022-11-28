package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateAnnotationServerList = []string{
	"https://insights.twilio.com",
}

type UpdateAnnotationPathParams struct {
	CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type UpdateAnnotationUpdateAnnotationRequest struct {
	AnsweredBy        *shared.AnnotationEnumAnsweredByEnum        `form:"name=AnsweredBy"`
	CallScore         *int64                                      `form:"name=CallScore"`
	Comment           *string                                     `form:"name=Comment"`
	ConnectivityIssue *shared.AnnotationEnumConnectivityIssueEnum `form:"name=ConnectivityIssue"`
	Incident          *string                                     `form:"name=Incident"`
	QualityIssues     *string                                     `form:"name=QualityIssues"`
	Spam              *bool                                       `form:"name=Spam"`
}

type UpdateAnnotationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateAnnotationRequest struct {
	ServerURL  *string
	PathParams UpdateAnnotationPathParams
	Request    *UpdateAnnotationUpdateAnnotationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateAnnotationSecurity
}

type UpdateAnnotationResponse struct {
	ContentType              string
	StatusCode               int64
	InsightsV1CallAnnotation *shared.InsightsV1CallAnnotation
}
