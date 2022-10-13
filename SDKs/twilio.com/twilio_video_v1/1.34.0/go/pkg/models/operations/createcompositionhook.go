package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCompositionHookServers = []string{
	"https://video.twilio.com",
}

type CreateCompositionHookRequestBodyStatusCallbackMethodEnum string

const (
	CreateCompositionHookRequestBodyStatusCallbackMethodEnumHead   CreateCompositionHookRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateCompositionHookRequestBodyStatusCallbackMethodEnumGet    CreateCompositionHookRequestBodyStatusCallbackMethodEnum = "GET"
	CreateCompositionHookRequestBodyStatusCallbackMethodEnumPost   CreateCompositionHookRequestBodyStatusCallbackMethodEnum = "POST"
	CreateCompositionHookRequestBodyStatusCallbackMethodEnumPatch  CreateCompositionHookRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateCompositionHookRequestBodyStatusCallbackMethodEnumPut    CreateCompositionHookRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateCompositionHookRequestBodyStatusCallbackMethodEnumDelete CreateCompositionHookRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateCompositionHookRequestBodyCreateCompositionHookRequest struct {
	AudioSources         []string                                                  `form:"name=AudioSources"`
	AudioSourcesExcluded []string                                                  `form:"name=AudioSourcesExcluded"`
	Enabled              *bool                                                     `form:"name=Enabled"`
	Format               *shared.CompositionHookEnumFormatEnum                     `form:"name=Format"`
	FriendlyName         string                                                    `form:"name=FriendlyName"`
	Resolution           *string                                                   `form:"name=Resolution"`
	StatusCallback       *string                                                   `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateCompositionHookRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	Trim                 *bool                                                     `form:"name=Trim"`
	VideoLayout          *interface{}                                              `form:"name=VideoLayout"`
}

type CreateCompositionHookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCompositionHookRequest struct {
	ServerURL *string
	Request   *CreateCompositionHookRequestBodyCreateCompositionHookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCompositionHookSecurity
}

type CreateCompositionHookResponse struct {
	ContentType            string
	StatusCode             int64
	VideoV1CompositionHook *shared.VideoV1CompositionHook
}
