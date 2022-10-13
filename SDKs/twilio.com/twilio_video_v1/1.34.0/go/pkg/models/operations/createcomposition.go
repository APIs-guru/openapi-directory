package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCompositionServers = []string{
	"https://video.twilio.com",
}

type CreateCompositionRequestBodyStatusCallbackMethodEnum string

const (
	CreateCompositionRequestBodyStatusCallbackMethodEnumHead   CreateCompositionRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateCompositionRequestBodyStatusCallbackMethodEnumGet    CreateCompositionRequestBodyStatusCallbackMethodEnum = "GET"
	CreateCompositionRequestBodyStatusCallbackMethodEnumPost   CreateCompositionRequestBodyStatusCallbackMethodEnum = "POST"
	CreateCompositionRequestBodyStatusCallbackMethodEnumPatch  CreateCompositionRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateCompositionRequestBodyStatusCallbackMethodEnumPut    CreateCompositionRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateCompositionRequestBodyStatusCallbackMethodEnumDelete CreateCompositionRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateCompositionRequestBodyCreateCompositionRequest struct {
	AudioSources         []string                                              `form:"name=AudioSources"`
	AudioSourcesExcluded []string                                              `form:"name=AudioSourcesExcluded"`
	Format               *shared.CompositionEnumFormatEnum                     `form:"name=Format"`
	Resolution           *string                                               `form:"name=Resolution"`
	RoomSid              string                                                `form:"name=RoomSid"`
	StatusCallback       *string                                               `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateCompositionRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	Trim                 *bool                                                 `form:"name=Trim"`
	VideoLayout          *interface{}                                          `form:"name=VideoLayout"`
}

type CreateCompositionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCompositionRequest struct {
	ServerURL *string
	Request   *CreateCompositionRequestBodyCreateCompositionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCompositionSecurity
}

type CreateCompositionResponse struct {
	ContentType        string
	StatusCode         int64
	VideoV1Composition *shared.VideoV1Composition
}
