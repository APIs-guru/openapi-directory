package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCompositionHookServers = []string{
	"https://video.twilio.com",
}

type CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum string

const (
	CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumHead   CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = "HEAD"
	CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumGet    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = "GET"
	CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumPost   CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = "POST"
	CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumPatch  CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = "PATCH"
	CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumPut    CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = "PUT"
	CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumDelete CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateCompositionHookCreateCompositionHookRequest struct {
	AudioSources         []string                                                                   `form:"name=AudioSources"`
	AudioSourcesExcluded []string                                                                   `form:"name=AudioSourcesExcluded"`
	Enabled              *bool                                                                      `form:"name=Enabled"`
	Format               *shared.CompositionHookEnumFormatEnum                                      `form:"name=Format"`
	FriendlyName         string                                                                     `form:"name=FriendlyName"`
	Resolution           *string                                                                    `form:"name=Resolution"`
	StatusCallback       *string                                                                    `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	Trim                 *bool                                                                      `form:"name=Trim"`
	VideoLayout          *interface{}                                                               `form:"name=VideoLayout"`
}

type CreateCompositionHookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCompositionHookRequest struct {
	ServerURL *string
	Request   *CreateCompositionHookCreateCompositionHookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCompositionHookSecurity
}

type CreateCompositionHookResponse struct {
	ContentType            string
	StatusCode             int64
	VideoV1CompositionHook *shared.VideoV1CompositionHook
}
