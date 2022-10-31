package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMediaProcessorServers = []string{
	"https://media.twilio.com",
}

type CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum string

const (
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumHead   CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "HEAD"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumGet    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "GET"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPost   CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "POST"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPatch  CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "PATCH"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPut    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "PUT"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumDelete CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateMediaProcessorCreateMediaProcessorRequest struct {
	Extension            string                                                                   `form:"name=Extension"`
	ExtensionContext     string                                                                   `form:"name=ExtensionContext"`
	ExtensionEnvironment *interface{}                                                             `form:"name=ExtensionEnvironment"`
	MaxDuration          *int64                                                                   `form:"name=MaxDuration"`
	StatusCallback       *string                                                                  `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
}

type CreateMediaProcessorSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMediaProcessorRequest struct {
	ServerURL *string
	Request   *CreateMediaProcessorCreateMediaProcessorRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateMediaProcessorSecurity
}

type CreateMediaProcessorResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1MediaProcessor *shared.MediaV1MediaProcessor
}
