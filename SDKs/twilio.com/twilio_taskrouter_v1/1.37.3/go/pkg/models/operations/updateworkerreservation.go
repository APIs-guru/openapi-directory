package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWorkerReservationServerList = []string{
	"https://taskrouter.twilio.com",
}

type UpdateWorkerReservationPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkerSid    string `pathParam:"style=simple,explode=false,name=WorkerSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateWorkerReservationHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum string

const (
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumHead   UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = "HEAD"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumGet    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = "GET"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumPost   UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = "POST"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumPatch  UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = "PATCH"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumPut    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = "PUT"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumDelete UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = "DELETE"
)

type UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum string

const (
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumHead   UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = "HEAD"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumGet    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = "GET"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumPost   UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = "POST"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumPatch  UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = "PATCH"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumPut    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = "PUT"
	UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumDelete UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = "DELETE"
)

type UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum string

const (
	UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumHead   UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = "HEAD"
	UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumGet    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = "GET"
	UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumPost   UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = "POST"
	UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumPatch  UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = "PATCH"
	UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumPut    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = "PUT"
	UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumDelete UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = "DELETE"
)

type UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum string

const (
	UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumHead   UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = "HEAD"
	UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumGet    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = "GET"
	UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumPost   UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = "POST"
	UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumPatch  UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = "PATCH"
	UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumPut    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = "PUT"
	UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumDelete UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = "DELETE"
)

type UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum string

const (
	UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumHead   UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = "HEAD"
	UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumGet    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = "GET"
	UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumPost   UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = "POST"
	UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumPatch  UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = "PATCH"
	UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumPut    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = "PUT"
	UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumDelete UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = "DELETE"
)

type UpdateWorkerReservationUpdateWorkerReservationRequest struct {
	Beep                                    *string                                                                                           `form:"name=Beep"`
	BeepOnCustomerEntrance                  *bool                                                                                             `form:"name=BeepOnCustomerEntrance"`
	CallAccept                              *bool                                                                                             `form:"name=CallAccept"`
	CallFrom                                *string                                                                                           `form:"name=CallFrom"`
	CallRecord                              *string                                                                                           `form:"name=CallRecord"`
	CallStatusCallbackURL                   *string                                                                                           `form:"name=CallStatusCallbackUrl"`
	CallTimeout                             *int64                                                                                            `form:"name=CallTimeout"`
	CallTo                                  *string                                                                                           `form:"name=CallTo"`
	CallURL                                 *string                                                                                           `form:"name=CallUrl"`
	ConferenceRecord                        *string                                                                                           `form:"name=ConferenceRecord"`
	ConferenceRecordingStatusCallback       *string                                                                                           `form:"name=ConferenceRecordingStatusCallback"`
	ConferenceRecordingStatusCallbackMethod *UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum `form:"name=ConferenceRecordingStatusCallbackMethod"`
	ConferenceStatusCallback                *string                                                                                           `form:"name=ConferenceStatusCallback"`
	ConferenceStatusCallbackEvent           []shared.WorkerReservationEnumConferenceEventEnum                                                 `form:"name=ConferenceStatusCallbackEvent"`
	ConferenceStatusCallbackMethod          *UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum          `form:"name=ConferenceStatusCallbackMethod"`
	ConferenceTrim                          *string                                                                                           `form:"name=ConferenceTrim"`
	DequeueFrom                             *string                                                                                           `form:"name=DequeueFrom"`
	DequeuePostWorkActivitySid              *string                                                                                           `form:"name=DequeuePostWorkActivitySid"`
	DequeueRecord                           *string                                                                                           `form:"name=DequeueRecord"`
	DequeueStatusCallbackEvent              []string                                                                                          `form:"name=DequeueStatusCallbackEvent"`
	DequeueStatusCallbackURL                *string                                                                                           `form:"name=DequeueStatusCallbackUrl"`
	DequeueTimeout                          *int64                                                                                            `form:"name=DequeueTimeout"`
	DequeueTo                               *string                                                                                           `form:"name=DequeueTo"`
	EarlyMedia                              *bool                                                                                             `form:"name=EarlyMedia"`
	EndConferenceOnCustomerExit             *bool                                                                                             `form:"name=EndConferenceOnCustomerExit"`
	EndConferenceOnExit                     *bool                                                                                             `form:"name=EndConferenceOnExit"`
	From                                    *string                                                                                           `form:"name=From"`
	Instruction                             *string                                                                                           `form:"name=Instruction"`
	MaxParticipants                         *int64                                                                                            `form:"name=MaxParticipants"`
	Muted                                   *bool                                                                                             `form:"name=Muted"`
	PostWorkActivitySid                     *string                                                                                           `form:"name=PostWorkActivitySid"`
	Record                                  *bool                                                                                             `form:"name=Record"`
	RecordingChannels                       *string                                                                                           `form:"name=RecordingChannels"`
	RecordingStatusCallback                 *string                                                                                           `form:"name=RecordingStatusCallback"`
	RecordingStatusCallbackMethod           *UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum           `form:"name=RecordingStatusCallbackMethod"`
	RedirectAccept                          *bool                                                                                             `form:"name=RedirectAccept"`
	RedirectCallSid                         *string                                                                                           `form:"name=RedirectCallSid"`
	RedirectURL                             *string                                                                                           `form:"name=RedirectUrl"`
	Region                                  *string                                                                                           `form:"name=Region"`
	ReservationStatus                       *shared.WorkerReservationEnumStatusEnum                                                           `form:"name=ReservationStatus"`
	SipAuthPassword                         *string                                                                                           `form:"name=SipAuthPassword"`
	SipAuthUsername                         *string                                                                                           `form:"name=SipAuthUsername"`
	StartConferenceOnEnter                  *bool                                                                                             `form:"name=StartConferenceOnEnter"`
	StatusCallback                          *string                                                                                           `form:"name=StatusCallback"`
	StatusCallbackEvent                     []shared.WorkerReservationEnumCallStatusEnum                                                      `form:"name=StatusCallbackEvent"`
	StatusCallbackMethod                    *UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum                    `form:"name=StatusCallbackMethod"`
	Timeout                                 *int64                                                                                            `form:"name=Timeout"`
	To                                      *string                                                                                           `form:"name=To"`
	WaitMethod                              *UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum                              `form:"name=WaitMethod"`
	WaitURL                                 *string                                                                                           `form:"name=WaitUrl"`
	WorkerActivitySid                       *string                                                                                           `form:"name=WorkerActivitySid"`
}

type UpdateWorkerReservationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWorkerReservationRequest struct {
	ServerURL  *string
	PathParams UpdateWorkerReservationPathParams
	Headers    UpdateWorkerReservationHeaders
	Request    *UpdateWorkerReservationUpdateWorkerReservationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWorkerReservationSecurity
}

type UpdateWorkerReservationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TaskrouterV1WorkspaceWorkerWorkerReservation *shared.TaskrouterV1WorkspaceWorkerWorkerReservation
}
