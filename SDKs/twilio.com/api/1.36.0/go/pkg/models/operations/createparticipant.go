package operations

import (
"openapi/pkg/models/shared")
var CreateParticipantServers = []string{
	"https://api.twilio.com",
}

type CreateParticipantPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
    
}


type CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum string

const (
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumHead CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = "HEAD"
CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumGet CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = "GET"
CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumPost CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = "POST"
CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumPatch CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = "PATCH"
CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumPut CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = "PUT"
CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumDelete CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = "DELETE"
)



type CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum string

const (
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumHead CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = "HEAD"
CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumGet CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = "GET"
CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumPost CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = "POST"
CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumPatch CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = "PATCH"
CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumPut CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = "PUT"
CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumDelete CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = "DELETE"
)



type CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum string

const (
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumHead CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = "HEAD"
CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumGet CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = "GET"
CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumPost CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = "POST"
CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumPatch CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = "PATCH"
CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumPut CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = "PUT"
CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumDelete CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = "DELETE"
)



type CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum string

const (
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumHead CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = "HEAD"
CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumGet CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = "GET"
CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumPost CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = "POST"
CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumPatch CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = "PATCH"
CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumPut CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = "PUT"
CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumDelete CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = "DELETE"
)



type CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum string

const (
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumHead CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = "HEAD"
CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumGet CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = "GET"
CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumPost CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = "POST"
CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumPatch CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = "PATCH"
CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumPut CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = "PUT"
CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumDelete CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = "DELETE"
)



type CreateParticipantCreateParticipantRequestWaitMethodEnum string

const (
    CreateParticipantCreateParticipantRequestWaitMethodEnumHead CreateParticipantCreateParticipantRequestWaitMethodEnum = "HEAD"
CreateParticipantCreateParticipantRequestWaitMethodEnumGet CreateParticipantCreateParticipantRequestWaitMethodEnum = "GET"
CreateParticipantCreateParticipantRequestWaitMethodEnumPost CreateParticipantCreateParticipantRequestWaitMethodEnum = "POST"
CreateParticipantCreateParticipantRequestWaitMethodEnumPatch CreateParticipantCreateParticipantRequestWaitMethodEnum = "PATCH"
CreateParticipantCreateParticipantRequestWaitMethodEnumPut CreateParticipantCreateParticipantRequestWaitMethodEnum = "PUT"
CreateParticipantCreateParticipantRequestWaitMethodEnumDelete CreateParticipantCreateParticipantRequestWaitMethodEnum = "DELETE"
)


type CreateParticipantCreateParticipantRequest struct {
    AmdStatusCallback *string `form:"name=AmdStatusCallback"`
    AmdStatusCallbackMethod *CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum `form:"name=AmdStatusCallbackMethod"`
    Beep *string `form:"name=Beep"`
    Byoc *string `form:"name=Byoc"`
    CallReason *string `form:"name=CallReason"`
    CallSidToCoach *string `form:"name=CallSidToCoach"`
    CallerID *string `form:"name=CallerId"`
    Coaching *bool `form:"name=Coaching"`
    ConferenceRecord *string `form:"name=ConferenceRecord"`
    ConferenceRecordingStatusCallback *string `form:"name=ConferenceRecordingStatusCallback"`
    ConferenceRecordingStatusCallbackEvent []string `form:"name=ConferenceRecordingStatusCallbackEvent"`
    ConferenceRecordingStatusCallbackMethod *CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum `form:"name=ConferenceRecordingStatusCallbackMethod"`
    ConferenceStatusCallback *string `form:"name=ConferenceStatusCallback"`
    ConferenceStatusCallbackEvent []string `form:"name=ConferenceStatusCallbackEvent"`
    ConferenceStatusCallbackMethod *CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum `form:"name=ConferenceStatusCallbackMethod"`
    ConferenceTrim *string `form:"name=ConferenceTrim"`
    EarlyMedia *bool `form:"name=EarlyMedia"`
    EndConferenceOnExit *bool `form:"name=EndConferenceOnExit"`
    From string `form:"name=From"`
    JitterBufferSize *string `form:"name=JitterBufferSize"`
    Label *string `form:"name=Label"`
    MachineDetection *string `form:"name=MachineDetection"`
    MachineDetectionSilenceTimeout *int64 `form:"name=MachineDetectionSilenceTimeout"`
    MachineDetectionSpeechEndThreshold *int64 `form:"name=MachineDetectionSpeechEndThreshold"`
    MachineDetectionSpeechThreshold *int64 `form:"name=MachineDetectionSpeechThreshold"`
    MachineDetectionTimeout *int64 `form:"name=MachineDetectionTimeout"`
    MaxParticipants *int64 `form:"name=MaxParticipants"`
    Muted *bool `form:"name=Muted"`
    Record *bool `form:"name=Record"`
    RecordingChannels *string `form:"name=RecordingChannels"`
    RecordingStatusCallback *string `form:"name=RecordingStatusCallback"`
    RecordingStatusCallbackEvent []string `form:"name=RecordingStatusCallbackEvent"`
    RecordingStatusCallbackMethod *CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum `form:"name=RecordingStatusCallbackMethod"`
    RecordingTrack *string `form:"name=RecordingTrack"`
    Region *string `form:"name=Region"`
    SipAuthPassword *string `form:"name=SipAuthPassword"`
    SipAuthUsername *string `form:"name=SipAuthUsername"`
    StartConferenceOnEnter *bool `form:"name=StartConferenceOnEnter"`
    StatusCallback *string `form:"name=StatusCallback"`
    StatusCallbackEvent []string `form:"name=StatusCallbackEvent"`
    StatusCallbackMethod *CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
    TimeLimit *int64 `form:"name=TimeLimit"`
    Timeout *int64 `form:"name=Timeout"`
    To string `form:"name=To"`
    WaitMethod *CreateParticipantCreateParticipantRequestWaitMethodEnum `form:"name=WaitMethod"`
    WaitURL *string `form:"name=WaitUrl"`
    
}

type CreateParticipantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateParticipantRequest struct {
    ServerURL *string 
    PathParams CreateParticipantPathParams 
    Request *CreateParticipantCreateParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateParticipantSecurity 
    
}

type CreateParticipantResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountConferenceParticipant *shared.APIV2010AccountConferenceParticipant 
    
}

