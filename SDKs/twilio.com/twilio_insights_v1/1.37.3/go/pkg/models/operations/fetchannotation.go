package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAnnotationServerList = []string{
	"https://insights.twilio.com",
}

type FetchAnnotationPathParams struct {
	CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type FetchAnnotationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAnnotationRequest struct {
	ServerURL  *string
	PathParams FetchAnnotationPathParams
	Security   FetchAnnotationSecurity
}

type FetchAnnotationResponse struct {
	ContentType              string
	StatusCode               int64
	InsightsV1CallAnnotation *shared.InsightsV1CallAnnotation
}
