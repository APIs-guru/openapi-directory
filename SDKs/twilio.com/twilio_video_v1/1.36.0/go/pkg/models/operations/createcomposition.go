package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCompositionServers = []string{
	"https://video.twilio.com",
}

type CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum string

const (
	CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumHead   CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = "HEAD"
	CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumGet    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = "GET"
	CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumPost   CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = "POST"
	CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumPatch  CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = "PATCH"
	CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumPut    CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = "PUT"
	CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumDelete CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateCompositionCreateCompositionRequest struct {
	AudioSources         []string                                                           `form:"name=AudioSources"`
	AudioSourcesExcluded []string                                                           `form:"name=AudioSourcesExcluded"`
	Format               *shared.CompositionEnumFormatEnum                                  `form:"name=Format"`
	Resolution           *string                                                            `form:"name=Resolution"`
	RoomSid              string                                                             `form:"name=RoomSid"`
	StatusCallback       *string                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	Trim                 *bool                                                              `form:"name=Trim"`
	VideoLayout          *interface{}                                                       `form:"name=VideoLayout"`
}

type CreateCompositionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCompositionRequest struct {
	ServerURL *string
	Request   *CreateCompositionCreateCompositionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCompositionSecurity
}

type CreateCompositionResponse struct {
	ContentType        string
	StatusCode         int64
	VideoV1Composition *shared.VideoV1Composition
}
