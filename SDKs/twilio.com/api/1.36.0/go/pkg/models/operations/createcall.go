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

type CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum string

const (
	CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumHead   CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = "HEAD"
	CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumGet    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = "GET"
	CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumPost   CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = "POST"
	CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumPatch  CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = "PATCH"
	CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumPut    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = "PUT"
	CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumDelete CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = "DELETE"
)

type CreateCallCreateCallRequestFallbackMethodEnum string

const (
	CreateCallCreateCallRequestFallbackMethodEnumHead   CreateCallCreateCallRequestFallbackMethodEnum = "HEAD"
	CreateCallCreateCallRequestFallbackMethodEnumGet    CreateCallCreateCallRequestFallbackMethodEnum = "GET"
	CreateCallCreateCallRequestFallbackMethodEnumPost   CreateCallCreateCallRequestFallbackMethodEnum = "POST"
	CreateCallCreateCallRequestFallbackMethodEnumPatch  CreateCallCreateCallRequestFallbackMethodEnum = "PATCH"
	CreateCallCreateCallRequestFallbackMethodEnumPut    CreateCallCreateCallRequestFallbackMethodEnum = "PUT"
	CreateCallCreateCallRequestFallbackMethodEnumDelete CreateCallCreateCallRequestFallbackMethodEnum = "DELETE"
)

type CreateCallCreateCallRequestMethodEnum string

const (
	CreateCallCreateCallRequestMethodEnumHead   CreateCallCreateCallRequestMethodEnum = "HEAD"
	CreateCallCreateCallRequestMethodEnumGet    CreateCallCreateCallRequestMethodEnum = "GET"
	CreateCallCreateCallRequestMethodEnumPost   CreateCallCreateCallRequestMethodEnum = "POST"
	CreateCallCreateCallRequestMethodEnumPatch  CreateCallCreateCallRequestMethodEnum = "PATCH"
	CreateCallCreateCallRequestMethodEnumPut    CreateCallCreateCallRequestMethodEnum = "PUT"
	CreateCallCreateCallRequestMethodEnumDelete CreateCallCreateCallRequestMethodEnum = "DELETE"
)

type CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum string

const (
	CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumHead   CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = "HEAD"
	CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumGet    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = "GET"
	CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumPost   CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = "POST"
	CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumPatch  CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = "PATCH"
	CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumPut    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = "PUT"
	CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumDelete CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = "DELETE"
)

type CreateCallCreateCallRequestStatusCallbackMethodEnum string

const (
	CreateCallCreateCallRequestStatusCallbackMethodEnumHead   CreateCallCreateCallRequestStatusCallbackMethodEnum = "HEAD"
	CreateCallCreateCallRequestStatusCallbackMethodEnumGet    CreateCallCreateCallRequestStatusCallbackMethodEnum = "GET"
	CreateCallCreateCallRequestStatusCallbackMethodEnumPost   CreateCallCreateCallRequestStatusCallbackMethodEnum = "POST"
	CreateCallCreateCallRequestStatusCallbackMethodEnumPatch  CreateCallCreateCallRequestStatusCallbackMethodEnum = "PATCH"
	CreateCallCreateCallRequestStatusCallbackMethodEnumPut    CreateCallCreateCallRequestStatusCallbackMethodEnum = "PUT"
	CreateCallCreateCallRequestStatusCallbackMethodEnumDelete CreateCallCreateCallRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateCallCreateCallRequest struct {
	ApplicationSid                     *string                                                       `form:"name=ApplicationSid"`
	AsyncAmd                           *string                                                       `form:"name=AsyncAmd"`
	AsyncAmdStatusCallback             *string                                                       `form:"name=AsyncAmdStatusCallback"`
	AsyncAmdStatusCallbackMethod       *CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum  `form:"name=AsyncAmdStatusCallbackMethod"`
	Byoc                               *string                                                       `form:"name=Byoc"`
	CallReason                         *string                                                       `form:"name=CallReason"`
	CallToken                          *string                                                       `form:"name=CallToken"`
	CallerID                           *string                                                       `form:"name=CallerId"`
	FallbackMethod                     *CreateCallCreateCallRequestFallbackMethodEnum                `form:"name=FallbackMethod"`
	FallbackURL                        *string                                                       `form:"name=FallbackUrl"`
	From                               string                                                        `form:"name=From"`
	MachineDetection                   *string                                                       `form:"name=MachineDetection"`
	MachineDetectionSilenceTimeout     *int64                                                        `form:"name=MachineDetectionSilenceTimeout"`
	MachineDetectionSpeechEndThreshold *int64                                                        `form:"name=MachineDetectionSpeechEndThreshold"`
	MachineDetectionSpeechThreshold    *int64                                                        `form:"name=MachineDetectionSpeechThreshold"`
	MachineDetectionTimeout            *int64                                                        `form:"name=MachineDetectionTimeout"`
	Method                             *CreateCallCreateCallRequestMethodEnum                        `form:"name=Method"`
	Record                             *bool                                                         `form:"name=Record"`
	RecordingChannels                  *string                                                       `form:"name=RecordingChannels"`
	RecordingStatusCallback            *string                                                       `form:"name=RecordingStatusCallback"`
	RecordingStatusCallbackEvent       []string                                                      `form:"name=RecordingStatusCallbackEvent"`
	RecordingStatusCallbackMethod      *CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum `form:"name=RecordingStatusCallbackMethod"`
	RecordingTrack                     *string                                                       `form:"name=RecordingTrack"`
	SendDigits                         *string                                                       `form:"name=SendDigits"`
	SipAuthPassword                    *string                                                       `form:"name=SipAuthPassword"`
	SipAuthUsername                    *string                                                       `form:"name=SipAuthUsername"`
	StatusCallback                     *string                                                       `form:"name=StatusCallback"`
	StatusCallbackEvent                []string                                                      `form:"name=StatusCallbackEvent"`
	StatusCallbackMethod               *CreateCallCreateCallRequestStatusCallbackMethodEnum          `form:"name=StatusCallbackMethod"`
	TimeLimit                          *int64                                                        `form:"name=TimeLimit"`
	Timeout                            *int64                                                        `form:"name=Timeout"`
	To                                 string                                                        `form:"name=To"`
	Trim                               *string                                                       `form:"name=Trim"`
	Twiml                              *string                                                       `form:"name=Twiml"`
	URL                                *string                                                       `form:"name=Url"`
}

type CreateCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCallRequest struct {
	ServerURL  *string
	PathParams CreateCallPathParams
	Request    *CreateCallCreateCallRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCallSecurity
}

type CreateCallResponse struct {
	ContentType         string
	StatusCode          int64
	APIV2010AccountCall *shared.APIV2010AccountCall
}
