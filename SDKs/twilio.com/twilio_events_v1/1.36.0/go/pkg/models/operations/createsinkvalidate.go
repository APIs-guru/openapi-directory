package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSinkValidateServers = []string{
	"https://events.twilio.com",
}

type CreateSinkValidatePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type CreateSinkValidateCreateSinkValidateRequest struct {
	TestID string `form:"name=TestId"`
}

type CreateSinkValidateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSinkValidateRequest struct {
	ServerURL  *string
	PathParams CreateSinkValidatePathParams
	Request    *CreateSinkValidateCreateSinkValidateRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSinkValidateSecurity
}

type CreateSinkValidateResponse struct {
	ContentType              string
	StatusCode               int64
	EventsV1SinkSinkValidate *shared.EventsV1SinkSinkValidate
}
