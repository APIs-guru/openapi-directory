package operations

import (
	"openapi/pkg/models/shared"
)

var CreateParticipantServers = []string{
	"https://api.twilio.com",
}

type CreateParticipantPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type CreateParticipantRequestBodyAmdStatusCallbackMethodEnum string

const (
	CreateParticipantRequestBodyAmdStatusCallbackMethodEnumHead   CreateParticipantRequestBodyAmdStatusCallbackMethodEnum = "HEAD"
	CreateParticipantRequestBodyAmdStatusCallbackMethodEnumGet    CreateParticipantRequestBodyAmdStatusCallbackMethodEnum = "GET"
	CreateParticipantRequestBodyAmdStatusCallbackMethodEnumPost   CreateParticipantRequestBodyAmdStatusCallbackMethodEnum = "POST"
	CreateParticipantRequestBodyAmdStatusCallbackMethodEnumPatch  CreateParticipantRequestBodyAmdStatusCallbackMethodEnum = "PATCH"
	CreateParticipantRequestBodyAmdStatusCallbackMethodEnumPut    CreateParticipantRequestBodyAmdStatusCallbackMethodEnum = "PUT"
	CreateParticipantRequestBodyAmdStatusCallbackMethodEnumDelete CreateParticipantRequestBodyAmdStatusCallbackMethodEnum = "DELETE"
)

type CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum string

const (
	CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnumHead   CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum = "HEAD"
	CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnumGet    CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum = "GET"
	CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnumPost   CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum = "POST"
	CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnumPatch  CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum = "PATCH"
	CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnumPut    CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum = "PUT"
	CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnumDelete CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum = "DELETE"
)

type CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum string

const (
	CreateParticipantRequestBodyConferenceStatusCallbackMethodEnumHead   CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum = "HEAD"
	CreateParticipantRequestBodyConferenceStatusCallbackMethodEnumGet    CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum = "GET"
	CreateParticipantRequestBodyConferenceStatusCallbackMethodEnumPost   CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum = "POST"
	CreateParticipantRequestBodyConferenceStatusCallbackMethodEnumPatch  CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum = "PATCH"
	CreateParticipantRequestBodyConferenceStatusCallbackMethodEnumPut    CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum = "PUT"
	CreateParticipantRequestBodyConferenceStatusCallbackMethodEnumDelete CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum = "DELETE"
)

type CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum string

const (
	CreateParticipantRequestBodyRecordingStatusCallbackMethodEnumHead   CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum = "HEAD"
	CreateParticipantRequestBodyRecordingStatusCallbackMethodEnumGet    CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum = "GET"
	CreateParticipantRequestBodyRecordingStatusCallbackMethodEnumPost   CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum = "POST"
	CreateParticipantRequestBodyRecordingStatusCallbackMethodEnumPatch  CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum = "PATCH"
	CreateParticipantRequestBodyRecordingStatusCallbackMethodEnumPut    CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum = "PUT"
	CreateParticipantRequestBodyRecordingStatusCallbackMethodEnumDelete CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum = "DELETE"
)

type CreateParticipantRequestBodyStatusCallbackMethodEnum string

const (
	CreateParticipantRequestBodyStatusCallbackMethodEnumHead   CreateParticipantRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateParticipantRequestBodyStatusCallbackMethodEnumGet    CreateParticipantRequestBodyStatusCallbackMethodEnum = "GET"
	CreateParticipantRequestBodyStatusCallbackMethodEnumPost   CreateParticipantRequestBodyStatusCallbackMethodEnum = "POST"
	CreateParticipantRequestBodyStatusCallbackMethodEnumPatch  CreateParticipantRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateParticipantRequestBodyStatusCallbackMethodEnumPut    CreateParticipantRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateParticipantRequestBodyStatusCallbackMethodEnumDelete CreateParticipantRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateParticipantRequestBodyWaitMethodEnum string

const (
	CreateParticipantRequestBodyWaitMethodEnumHead   CreateParticipantRequestBodyWaitMethodEnum = "HEAD"
	CreateParticipantRequestBodyWaitMethodEnumGet    CreateParticipantRequestBodyWaitMethodEnum = "GET"
	CreateParticipantRequestBodyWaitMethodEnumPost   CreateParticipantRequestBodyWaitMethodEnum = "POST"
	CreateParticipantRequestBodyWaitMethodEnumPatch  CreateParticipantRequestBodyWaitMethodEnum = "PATCH"
	CreateParticipantRequestBodyWaitMethodEnumPut    CreateParticipantRequestBodyWaitMethodEnum = "PUT"
	CreateParticipantRequestBodyWaitMethodEnumDelete CreateParticipantRequestBodyWaitMethodEnum = "DELETE"
)

type CreateParticipantRequestBodyCreateParticipantRequest struct {
	AmdStatusCallback                       *string                                                                  `form:"name=AmdStatusCallback"`
	AmdStatusCallbackMethod                 *CreateParticipantRequestBodyAmdStatusCallbackMethodEnum                 `form:"name=AmdStatusCallbackMethod"`
	Beep                                    *string                                                                  `form:"name=Beep"`
	Byoc                                    *string                                                                  `form:"name=Byoc"`
	CallReason                              *string                                                                  `form:"name=CallReason"`
	CallSidToCoach                          *string                                                                  `form:"name=CallSidToCoach"`
	CallerID                                *string                                                                  `form:"name=CallerId"`
	Coaching                                *bool                                                                    `form:"name=Coaching"`
	ConferenceRecord                        *string                                                                  `form:"name=ConferenceRecord"`
	ConferenceRecordingStatusCallback       *string                                                                  `form:"name=ConferenceRecordingStatusCallback"`
	ConferenceRecordingStatusCallbackEvent  []string                                                                 `form:"name=ConferenceRecordingStatusCallbackEvent"`
	ConferenceRecordingStatusCallbackMethod *CreateParticipantRequestBodyConferenceRecordingStatusCallbackMethodEnum `form:"name=ConferenceRecordingStatusCallbackMethod"`
	ConferenceStatusCallback                *string                                                                  `form:"name=ConferenceStatusCallback"`
	ConferenceStatusCallbackEvent           []string                                                                 `form:"name=ConferenceStatusCallbackEvent"`
	ConferenceStatusCallbackMethod          *CreateParticipantRequestBodyConferenceStatusCallbackMethodEnum          `form:"name=ConferenceStatusCallbackMethod"`
	ConferenceTrim                          *string                                                                  `form:"name=ConferenceTrim"`
	EarlyMedia                              *bool                                                                    `form:"name=EarlyMedia"`
	EndConferenceOnExit                     *bool                                                                    `form:"name=EndConferenceOnExit"`
	From                                    string                                                                   `form:"name=From"`
	JitterBufferSize                        *string                                                                  `form:"name=JitterBufferSize"`
	Label                                   *string                                                                  `form:"name=Label"`
	MachineDetection                        *string                                                                  `form:"name=MachineDetection"`
	MachineDetectionSilenceTimeout          *int64                                                                   `form:"name=MachineDetectionSilenceTimeout"`
	MachineDetectionSpeechEndThreshold      *int64                                                                   `form:"name=MachineDetectionSpeechEndThreshold"`
	MachineDetectionSpeechThreshold         *int64                                                                   `form:"name=MachineDetectionSpeechThreshold"`
	MachineDetectionTimeout                 *int64                                                                   `form:"name=MachineDetectionTimeout"`
	MaxParticipants                         *int64                                                                   `form:"name=MaxParticipants"`
	Muted                                   *bool                                                                    `form:"name=Muted"`
	Record                                  *bool                                                                    `form:"name=Record"`
	RecordingChannels                       *string                                                                  `form:"name=RecordingChannels"`
	RecordingStatusCallback                 *string                                                                  `form:"name=RecordingStatusCallback"`
	RecordingStatusCallbackEvent            []string                                                                 `form:"name=RecordingStatusCallbackEvent"`
	RecordingStatusCallbackMethod           *CreateParticipantRequestBodyRecordingStatusCallbackMethodEnum           `form:"name=RecordingStatusCallbackMethod"`
	RecordingTrack                          *string                                                                  `form:"name=RecordingTrack"`
	Region                                  *string                                                                  `form:"name=Region"`
	SipAuthPassword                         *string                                                                  `form:"name=SipAuthPassword"`
	SipAuthUsername                         *string                                                                  `form:"name=SipAuthUsername"`
	StartConferenceOnEnter                  *bool                                                                    `form:"name=StartConferenceOnEnter"`
	StatusCallback                          *string                                                                  `form:"name=StatusCallback"`
	StatusCallbackEvent                     []string                                                                 `form:"name=StatusCallbackEvent"`
	StatusCallbackMethod                    *CreateParticipantRequestBodyStatusCallbackMethodEnum                    `form:"name=StatusCallbackMethod"`
	TimeLimit                               *int64                                                                   `form:"name=TimeLimit"`
	Timeout                                 *int64                                                                   `form:"name=Timeout"`
	To                                      string                                                                   `form:"name=To"`
	WaitMethod                              *CreateParticipantRequestBodyWaitMethodEnum                              `form:"name=WaitMethod"`
	WaitURL                                 *string                                                                  `form:"name=WaitUrl"`
}

type CreateParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateParticipantRequest struct {
	ServerURL  *string
	PathParams CreateParticipantPathParams
	Request    *CreateParticipantRequestBodyCreateParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateParticipantSecurity
}

type CreateParticipantResponse struct {
	ContentType                          string
	StatusCode                           int64
	APIV2010AccountConferenceParticipant *shared.APIV2010AccountConferenceParticipant
}
