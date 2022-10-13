package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMediaProcessorServers = []string{
	"https://media.twilio.com",
}

type CreateMediaProcessorRequestBodyStatusCallbackMethodEnum string

const (
	CreateMediaProcessorRequestBodyStatusCallbackMethodEnumHead   CreateMediaProcessorRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateMediaProcessorRequestBodyStatusCallbackMethodEnumGet    CreateMediaProcessorRequestBodyStatusCallbackMethodEnum = "GET"
	CreateMediaProcessorRequestBodyStatusCallbackMethodEnumPost   CreateMediaProcessorRequestBodyStatusCallbackMethodEnum = "POST"
	CreateMediaProcessorRequestBodyStatusCallbackMethodEnumPatch  CreateMediaProcessorRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateMediaProcessorRequestBodyStatusCallbackMethodEnumPut    CreateMediaProcessorRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateMediaProcessorRequestBodyStatusCallbackMethodEnumDelete CreateMediaProcessorRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateMediaProcessorRequestBodyCreateMediaProcessorRequest struct {
	Extension            string                                                   `form:"name=Extension"`
	ExtensionContext     string                                                   `form:"name=ExtensionContext"`
	ExtensionEnvironment *interface{}                                             `form:"name=ExtensionEnvironment"`
	MaxDuration          *int64                                                   `form:"name=MaxDuration"`
	StatusCallback       *string                                                  `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateMediaProcessorRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
}

type CreateMediaProcessorSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMediaProcessorRequest struct {
	ServerURL *string
	Request   *CreateMediaProcessorRequestBodyCreateMediaProcessorRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateMediaProcessorSecurity
}

type CreateMediaProcessorResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1MediaProcessor *shared.MediaV1MediaProcessor
}
