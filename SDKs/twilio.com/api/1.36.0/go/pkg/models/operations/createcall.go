package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCallServers = []string{
	"https://api.twilio.com",
}

type CreateCallPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum string

const (
	CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnumHead   CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum = "HEAD"
	CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnumGet    CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum = "GET"
	CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnumPost   CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum = "POST"
	CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnumPatch  CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum = "PATCH"
	CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnumPut    CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum = "PUT"
	CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnumDelete CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum = "DELETE"
)

type CreateCallRequestBodyFallbackMethodEnum string

const (
	CreateCallRequestBodyFallbackMethodEnumHead   CreateCallRequestBodyFallbackMethodEnum = "HEAD"
	CreateCallRequestBodyFallbackMethodEnumGet    CreateCallRequestBodyFallbackMethodEnum = "GET"
	CreateCallRequestBodyFallbackMethodEnumPost   CreateCallRequestBodyFallbackMethodEnum = "POST"
	CreateCallRequestBodyFallbackMethodEnumPatch  CreateCallRequestBodyFallbackMethodEnum = "PATCH"
	CreateCallRequestBodyFallbackMethodEnumPut    CreateCallRequestBodyFallbackMethodEnum = "PUT"
	CreateCallRequestBodyFallbackMethodEnumDelete CreateCallRequestBodyFallbackMethodEnum = "DELETE"
)

type CreateCallRequestBodyMethodEnum string

const (
	CreateCallRequestBodyMethodEnumHead   CreateCallRequestBodyMethodEnum = "HEAD"
	CreateCallRequestBodyMethodEnumGet    CreateCallRequestBodyMethodEnum = "GET"
	CreateCallRequestBodyMethodEnumPost   CreateCallRequestBodyMethodEnum = "POST"
	CreateCallRequestBodyMethodEnumPatch  CreateCallRequestBodyMethodEnum = "PATCH"
	CreateCallRequestBodyMethodEnumPut    CreateCallRequestBodyMethodEnum = "PUT"
	CreateCallRequestBodyMethodEnumDelete CreateCallRequestBodyMethodEnum = "DELETE"
)

type CreateCallRequestBodyRecordingStatusCallbackMethodEnum string

const (
	CreateCallRequestBodyRecordingStatusCallbackMethodEnumHead   CreateCallRequestBodyRecordingStatusCallbackMethodEnum = "HEAD"
	CreateCallRequestBodyRecordingStatusCallbackMethodEnumGet    CreateCallRequestBodyRecordingStatusCallbackMethodEnum = "GET"
	CreateCallRequestBodyRecordingStatusCallbackMethodEnumPost   CreateCallRequestBodyRecordingStatusCallbackMethodEnum = "POST"
	CreateCallRequestBodyRecordingStatusCallbackMethodEnumPatch  CreateCallRequestBodyRecordingStatusCallbackMethodEnum = "PATCH"
	CreateCallRequestBodyRecordingStatusCallbackMethodEnumPut    CreateCallRequestBodyRecordingStatusCallbackMethodEnum = "PUT"
	CreateCallRequestBodyRecordingStatusCallbackMethodEnumDelete CreateCallRequestBodyRecordingStatusCallbackMethodEnum = "DELETE"
)

type CreateCallRequestBodyStatusCallbackMethodEnum string

const (
	CreateCallRequestBodyStatusCallbackMethodEnumHead   CreateCallRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateCallRequestBodyStatusCallbackMethodEnumGet    CreateCallRequestBodyStatusCallbackMethodEnum = "GET"
	CreateCallRequestBodyStatusCallbackMethodEnumPost   CreateCallRequestBodyStatusCallbackMethodEnum = "POST"
	CreateCallRequestBodyStatusCallbackMethodEnumPatch  CreateCallRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateCallRequestBodyStatusCallbackMethodEnumPut    CreateCallRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateCallRequestBodyStatusCallbackMethodEnumDelete CreateCallRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateCallRequestBodyCreateCallRequest struct {
	ApplicationSid                     *string                                                 `form:"name=ApplicationSid"`
	AsyncAmd                           *string                                                 `form:"name=AsyncAmd"`
	AsyncAmdStatusCallback             *string                                                 `form:"name=AsyncAmdStatusCallback"`
	AsyncAmdStatusCallbackMethod       *CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum  `form:"name=AsyncAmdStatusCallbackMethod"`
	Byoc                               *string                                                 `form:"name=Byoc"`
	CallReason                         *string                                                 `form:"name=CallReason"`
	CallToken                          *string                                                 `form:"name=CallToken"`
	CallerID                           *string                                                 `form:"name=CallerId"`
	FallbackMethod                     *CreateCallRequestBodyFallbackMethodEnum                `form:"name=FallbackMethod"`
	FallbackURL                        *string                                                 `form:"name=FallbackUrl"`
	From                               string                                                  `form:"name=From"`
	MachineDetection                   *string                                                 `form:"name=MachineDetection"`
	MachineDetectionSilenceTimeout     *int64                                                  `form:"name=MachineDetectionSilenceTimeout"`
	MachineDetectionSpeechEndThreshold *int64                                                  `form:"name=MachineDetectionSpeechEndThreshold"`
	MachineDetectionSpeechThreshold    *int64                                                  `form:"name=MachineDetectionSpeechThreshold"`
	MachineDetectionTimeout            *int64                                                  `form:"name=MachineDetectionTimeout"`
	Method                             *CreateCallRequestBodyMethodEnum                        `form:"name=Method"`
	Record                             *bool                                                   `form:"name=Record"`
	RecordingChannels                  *string                                                 `form:"name=RecordingChannels"`
	RecordingStatusCallback            *string                                                 `form:"name=RecordingStatusCallback"`
	RecordingStatusCallbackEvent       []string                                                `form:"name=RecordingStatusCallbackEvent"`
	RecordingStatusCallbackMethod      *CreateCallRequestBodyRecordingStatusCallbackMethodEnum `form:"name=RecordingStatusCallbackMethod"`
	RecordingTrack                     *string                                                 `form:"name=RecordingTrack"`
	SendDigits                         *string                                                 `form:"name=SendDigits"`
	SipAuthPassword                    *string                                                 `form:"name=SipAuthPassword"`
	SipAuthUsername                    *string                                                 `form:"name=SipAuthUsername"`
	StatusCallback                     *string                                                 `form:"name=StatusCallback"`
	StatusCallbackEvent                []string                                                `form:"name=StatusCallbackEvent"`
	StatusCallbackMethod               *CreateCallRequestBodyStatusCallbackMethodEnum          `form:"name=StatusCallbackMethod"`
	TimeLimit                          *int64                                                  `form:"name=TimeLimit"`
	Timeout                            *int64                                                  `form:"name=Timeout"`
	To                                 string                                                  `form:"name=To"`
	Trim                               *string                                                 `form:"name=Trim"`
	Twiml                              *string                                                 `form:"name=Twiml"`
	URL                                *string                                                 `form:"name=Url"`
}

type CreateCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCallRequest struct {
	ServerURL  *string
	PathParams CreateCallPathParams
	Request    *CreateCallRequestBodyCreateCallRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCallSecurity
}

type CreateCallResponse struct {
	ContentType         string
	StatusCode          int64
	APIV2010AccountCall *shared.APIV2010AccountCall
}
