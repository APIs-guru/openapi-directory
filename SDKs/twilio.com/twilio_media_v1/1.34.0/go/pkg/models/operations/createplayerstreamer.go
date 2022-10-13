package operations

import (
	"openapi/pkg/models/shared"
)

var CreatePlayerStreamerServers = []string{
	"https://media.twilio.com",
}

type CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum string

const (
	CreatePlayerStreamerRequestBodyStatusCallbackMethodEnumHead   CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreatePlayerStreamerRequestBodyStatusCallbackMethodEnumGet    CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum = "GET"
	CreatePlayerStreamerRequestBodyStatusCallbackMethodEnumPost   CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum = "POST"
	CreatePlayerStreamerRequestBodyStatusCallbackMethodEnumPatch  CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreatePlayerStreamerRequestBodyStatusCallbackMethodEnumPut    CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum = "PUT"
	CreatePlayerStreamerRequestBodyStatusCallbackMethodEnumDelete CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreatePlayerStreamerRequestBodyCreatePlayerStreamerRequest struct {
	MaxDuration          *int64                                                   `form:"name=MaxDuration"`
	StatusCallback       *string                                                  `form:"name=StatusCallback"`
	StatusCallbackMethod *CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	Video                *bool                                                    `form:"name=Video"`
}

type CreatePlayerStreamerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreatePlayerStreamerRequest struct {
	ServerURL *string
	Request   *CreatePlayerStreamerRequestBodyCreatePlayerStreamerRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreatePlayerStreamerSecurity
}

type CreatePlayerStreamerResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1PlayerStreamer *shared.MediaV1PlayerStreamer
}
