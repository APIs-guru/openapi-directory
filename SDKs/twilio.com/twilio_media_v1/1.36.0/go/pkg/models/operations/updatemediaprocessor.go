package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMediaProcessorServers = []string{
	"https://media.twilio.com",
}

type UpdateMediaProcessorPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMediaProcessorUpdateMediaProcessorRequest struct {
	Status shared.MediaProcessorEnumUpdateStatusEnum `form:"name=Status"`
}

type UpdateMediaProcessorSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMediaProcessorRequest struct {
	ServerURL  *string
	PathParams UpdateMediaProcessorPathParams
	Request    *UpdateMediaProcessorUpdateMediaProcessorRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMediaProcessorSecurity
}

type UpdateMediaProcessorResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1MediaProcessor *shared.MediaV1MediaProcessor
}
