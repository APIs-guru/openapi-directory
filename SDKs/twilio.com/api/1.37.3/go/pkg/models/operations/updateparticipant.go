package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateParticipantServerList = []string{
	"https://api.twilio.com",
}

type UpdateParticipantPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid       string `pathParam:"style=simple,explode=false,name=CallSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum string

const (
	UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumHead   UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = "HEAD"
	UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumGet    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = "GET"
	UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumPost   UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = "POST"
	UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumPatch  UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = "PATCH"
	UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumPut    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = "PUT"
	UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumDelete UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = "DELETE"
)

type UpdateParticipantUpdateParticipantRequestHoldMethodEnum string

const (
	UpdateParticipantUpdateParticipantRequestHoldMethodEnumHead   UpdateParticipantUpdateParticipantRequestHoldMethodEnum = "HEAD"
	UpdateParticipantUpdateParticipantRequestHoldMethodEnumGet    UpdateParticipantUpdateParticipantRequestHoldMethodEnum = "GET"
	UpdateParticipantUpdateParticipantRequestHoldMethodEnumPost   UpdateParticipantUpdateParticipantRequestHoldMethodEnum = "POST"
	UpdateParticipantUpdateParticipantRequestHoldMethodEnumPatch  UpdateParticipantUpdateParticipantRequestHoldMethodEnum = "PATCH"
	UpdateParticipantUpdateParticipantRequestHoldMethodEnumPut    UpdateParticipantUpdateParticipantRequestHoldMethodEnum = "PUT"
	UpdateParticipantUpdateParticipantRequestHoldMethodEnumDelete UpdateParticipantUpdateParticipantRequestHoldMethodEnum = "DELETE"
)

type UpdateParticipantUpdateParticipantRequestWaitMethodEnum string

const (
	UpdateParticipantUpdateParticipantRequestWaitMethodEnumHead   UpdateParticipantUpdateParticipantRequestWaitMethodEnum = "HEAD"
	UpdateParticipantUpdateParticipantRequestWaitMethodEnumGet    UpdateParticipantUpdateParticipantRequestWaitMethodEnum = "GET"
	UpdateParticipantUpdateParticipantRequestWaitMethodEnumPost   UpdateParticipantUpdateParticipantRequestWaitMethodEnum = "POST"
	UpdateParticipantUpdateParticipantRequestWaitMethodEnumPatch  UpdateParticipantUpdateParticipantRequestWaitMethodEnum = "PATCH"
	UpdateParticipantUpdateParticipantRequestWaitMethodEnumPut    UpdateParticipantUpdateParticipantRequestWaitMethodEnum = "PUT"
	UpdateParticipantUpdateParticipantRequestWaitMethodEnumDelete UpdateParticipantUpdateParticipantRequestWaitMethodEnum = "DELETE"
)

type UpdateParticipantUpdateParticipantRequest struct {
	AnnounceMethod      *UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum `form:"name=AnnounceMethod"`
	AnnounceURL         *string                                                      `form:"name=AnnounceUrl"`
	BeepOnExit          *bool                                                        `form:"name=BeepOnExit"`
	CallSidToCoach      *string                                                      `form:"name=CallSidToCoach"`
	Coaching            *bool                                                        `form:"name=Coaching"`
	EndConferenceOnExit *bool                                                        `form:"name=EndConferenceOnExit"`
	Hold                *bool                                                        `form:"name=Hold"`
	HoldMethod          *UpdateParticipantUpdateParticipantRequestHoldMethodEnum     `form:"name=HoldMethod"`
	HoldURL             *string                                                      `form:"name=HoldUrl"`
	Muted               *bool                                                        `form:"name=Muted"`
	WaitMethod          *UpdateParticipantUpdateParticipantRequestWaitMethodEnum     `form:"name=WaitMethod"`
	WaitURL             *string                                                      `form:"name=WaitUrl"`
}

type UpdateParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateParticipantRequest struct {
	ServerURL  *string
	PathParams UpdateParticipantPathParams
	Request    *UpdateParticipantUpdateParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateParticipantSecurity
}

type UpdateParticipantResponse struct {
	ContentType                          string
	StatusCode                           int64
	APIV2010AccountConferenceParticipant *shared.APIV2010AccountConferenceParticipant
}
