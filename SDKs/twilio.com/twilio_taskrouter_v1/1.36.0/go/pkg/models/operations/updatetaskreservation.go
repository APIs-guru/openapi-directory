package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTaskReservationServers = []string{
	"https://taskrouter.twilio.com",
}

type UpdateTaskReservationPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateTaskReservationHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum string

const (
	UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumHead   UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = "HEAD"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumGet    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = "GET"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumPost   UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = "POST"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumPatch  UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = "PATCH"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumPut    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = "PUT"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumDelete UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = "DELETE"
)

type UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum string

const (
	UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumHead   UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = "HEAD"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumGet    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = "GET"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumPost   UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = "POST"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumPatch  UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = "PATCH"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumPut    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = "PUT"
	UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumDelete UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = "DELETE"
)

type UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum string

const (
	UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumHead   UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = "HEAD"
	UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumGet    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = "GET"
	UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumPost   UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = "POST"
	UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumPatch  UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = "PATCH"
	UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumPut    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = "PUT"
	UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumDelete UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = "DELETE"
)

type UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum string

const (
	UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumHead   UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = "HEAD"
	UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumGet    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = "GET"
	UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumPost   UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = "POST"
	UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumPatch  UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = "PATCH"
	UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumPut    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = "PUT"
	UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumDelete UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = "DELETE"
)

type UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum string

const (
	UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumHead   UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = "HEAD"
	UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumGet    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = "GET"
	UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumPost   UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = "POST"
	UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumPatch  UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = "PATCH"
	UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumPut    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = "PUT"
	UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumDelete UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = "DELETE"
)

type UpdateTaskReservationUpdateTaskReservationRequest struct {
	Beep                                    *string                                                                                       `form:"name=Beep"`
	BeepOnCustomerEntrance                  *bool                                                                                         `form:"name=BeepOnCustomerEntrance"`
	CallAccept                              *bool                                                                                         `form:"name=CallAccept"`
	CallFrom                                *string                                                                                       `form:"name=CallFrom"`
	CallRecord                              *string                                                                                       `form:"name=CallRecord"`
	CallStatusCallbackURL                   *string                                                                                       `form:"name=CallStatusCallbackUrl"`
	CallTimeout                             *int64                                                                                        `form:"name=CallTimeout"`
	CallTo                                  *string                                                                                       `form:"name=CallTo"`
	CallURL                                 *string                                                                                       `form:"name=CallUrl"`
	ConferenceRecord                        *string                                                                                       `form:"name=ConferenceRecord"`
	ConferenceRecordingStatusCallback       *string                                                                                       `form:"name=ConferenceRecordingStatusCallback"`
	ConferenceRecordingStatusCallbackMethod *UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum `form:"name=ConferenceRecordingStatusCallbackMethod"`
	ConferenceStatusCallback                *string                                                                                       `form:"name=ConferenceStatusCallback"`
	ConferenceStatusCallbackEvent           []shared.TaskReservationEnumConferenceEventEnum                                               `form:"name=ConferenceStatusCallbackEvent"`
	ConferenceStatusCallbackMethod          *UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum          `form:"name=ConferenceStatusCallbackMethod"`
	ConferenceTrim                          *string                                                                                       `form:"name=ConferenceTrim"`
	DequeueFrom                             *string                                                                                       `form:"name=DequeueFrom"`
	DequeuePostWorkActivitySid              *string                                                                                       `form:"name=DequeuePostWorkActivitySid"`
	DequeueRecord                           *string                                                                                       `form:"name=DequeueRecord"`
	DequeueStatusCallbackEvent              []string                                                                                      `form:"name=DequeueStatusCallbackEvent"`
	DequeueStatusCallbackURL                *string                                                                                       `form:"name=DequeueStatusCallbackUrl"`
	DequeueTimeout                          *int64                                                                                        `form:"name=DequeueTimeout"`
	DequeueTo                               *string                                                                                       `form:"name=DequeueTo"`
	EarlyMedia                              *bool                                                                                         `form:"name=EarlyMedia"`
	EndConferenceOnCustomerExit             *bool                                                                                         `form:"name=EndConferenceOnCustomerExit"`
	EndConferenceOnExit                     *bool                                                                                         `form:"name=EndConferenceOnExit"`
	From                                    *string                                                                                       `form:"name=From"`
	Instruction                             *string                                                                                       `form:"name=Instruction"`
	MaxParticipants                         *int64                                                                                        `form:"name=MaxParticipants"`
	Muted                                   *bool                                                                                         `form:"name=Muted"`
	PostWorkActivitySid                     *string                                                                                       `form:"name=PostWorkActivitySid"`
	Record                                  *bool                                                                                         `form:"name=Record"`
	RecordingChannels                       *string                                                                                       `form:"name=RecordingChannels"`
	RecordingStatusCallback                 *string                                                                                       `form:"name=RecordingStatusCallback"`
	RecordingStatusCallbackMethod           *UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum           `form:"name=RecordingStatusCallbackMethod"`
	RedirectAccept                          *bool                                                                                         `form:"name=RedirectAccept"`
	RedirectCallSid                         *string                                                                                       `form:"name=RedirectCallSid"`
	RedirectURL                             *string                                                                                       `form:"name=RedirectUrl"`
	Region                                  *string                                                                                       `form:"name=Region"`
	ReservationStatus                       *shared.TaskReservationEnumStatusEnum                                                         `form:"name=ReservationStatus"`
	SipAuthPassword                         *string                                                                                       `form:"name=SipAuthPassword"`
	SipAuthUsername                         *string                                                                                       `form:"name=SipAuthUsername"`
	StartConferenceOnEnter                  *bool                                                                                         `form:"name=StartConferenceOnEnter"`
	StatusCallback                          *string                                                                                       `form:"name=StatusCallback"`
	StatusCallbackEvent                     []shared.TaskReservationEnumCallStatusEnum                                                    `form:"name=StatusCallbackEvent"`
	StatusCallbackMethod                    *UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum                    `form:"name=StatusCallbackMethod"`
	Supervisor                              *string                                                                                       `form:"name=Supervisor"`
	SupervisorMode                          *shared.TaskReservationEnumSupervisorModeEnum                                                 `form:"name=SupervisorMode"`
	Timeout                                 *int64                                                                                        `form:"name=Timeout"`
	To                                      *string                                                                                       `form:"name=To"`
	WaitMethod                              *UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum                              `form:"name=WaitMethod"`
	WaitURL                                 *string                                                                                       `form:"name=WaitUrl"`
	WorkerActivitySid                       *string                                                                                       `form:"name=WorkerActivitySid"`
}

type UpdateTaskReservationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTaskReservationRequest struct {
	ServerURL  *string
	PathParams UpdateTaskReservationPathParams
	Headers    UpdateTaskReservationHeaders
	Request    *UpdateTaskReservationUpdateTaskReservationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTaskReservationSecurity
}

type UpdateTaskReservationResponse struct {
	ContentType                              string
	StatusCode                               int64
	TaskrouterV1WorkspaceTaskTaskReservation *shared.TaskrouterV1WorkspaceTaskTaskReservation
}
