package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateParticipantServers = []string{
	"https://api.twilio.com",
}

type UpdateParticipantPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid       string `pathParam:"style=simple,explode=false,name=CallSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type UpdateParticipantRequestBodyAnnounceMethodEnum string

const (
	UpdateParticipantRequestBodyAnnounceMethodEnumHead   UpdateParticipantRequestBodyAnnounceMethodEnum = "HEAD"
	UpdateParticipantRequestBodyAnnounceMethodEnumGet    UpdateParticipantRequestBodyAnnounceMethodEnum = "GET"
	UpdateParticipantRequestBodyAnnounceMethodEnumPost   UpdateParticipantRequestBodyAnnounceMethodEnum = "POST"
	UpdateParticipantRequestBodyAnnounceMethodEnumPatch  UpdateParticipantRequestBodyAnnounceMethodEnum = "PATCH"
	UpdateParticipantRequestBodyAnnounceMethodEnumPut    UpdateParticipantRequestBodyAnnounceMethodEnum = "PUT"
	UpdateParticipantRequestBodyAnnounceMethodEnumDelete UpdateParticipantRequestBodyAnnounceMethodEnum = "DELETE"
)

type UpdateParticipantRequestBodyHoldMethodEnum string

const (
	UpdateParticipantRequestBodyHoldMethodEnumHead   UpdateParticipantRequestBodyHoldMethodEnum = "HEAD"
	UpdateParticipantRequestBodyHoldMethodEnumGet    UpdateParticipantRequestBodyHoldMethodEnum = "GET"
	UpdateParticipantRequestBodyHoldMethodEnumPost   UpdateParticipantRequestBodyHoldMethodEnum = "POST"
	UpdateParticipantRequestBodyHoldMethodEnumPatch  UpdateParticipantRequestBodyHoldMethodEnum = "PATCH"
	UpdateParticipantRequestBodyHoldMethodEnumPut    UpdateParticipantRequestBodyHoldMethodEnum = "PUT"
	UpdateParticipantRequestBodyHoldMethodEnumDelete UpdateParticipantRequestBodyHoldMethodEnum = "DELETE"
)

type UpdateParticipantRequestBodyWaitMethodEnum string

const (
	UpdateParticipantRequestBodyWaitMethodEnumHead   UpdateParticipantRequestBodyWaitMethodEnum = "HEAD"
	UpdateParticipantRequestBodyWaitMethodEnumGet    UpdateParticipantRequestBodyWaitMethodEnum = "GET"
	UpdateParticipantRequestBodyWaitMethodEnumPost   UpdateParticipantRequestBodyWaitMethodEnum = "POST"
	UpdateParticipantRequestBodyWaitMethodEnumPatch  UpdateParticipantRequestBodyWaitMethodEnum = "PATCH"
	UpdateParticipantRequestBodyWaitMethodEnumPut    UpdateParticipantRequestBodyWaitMethodEnum = "PUT"
	UpdateParticipantRequestBodyWaitMethodEnumDelete UpdateParticipantRequestBodyWaitMethodEnum = "DELETE"
)

type UpdateParticipantRequestBodyUpdateParticipantRequest struct {
	AnnounceMethod      *UpdateParticipantRequestBodyAnnounceMethodEnum `form:"name=AnnounceMethod"`
	AnnounceURL         *string                                         `form:"name=AnnounceUrl"`
	BeepOnExit          *bool                                           `form:"name=BeepOnExit"`
	CallSidToCoach      *string                                         `form:"name=CallSidToCoach"`
	Coaching            *bool                                           `form:"name=Coaching"`
	EndConferenceOnExit *bool                                           `form:"name=EndConferenceOnExit"`
	Hold                *bool                                           `form:"name=Hold"`
	HoldMethod          *UpdateParticipantRequestBodyHoldMethodEnum     `form:"name=HoldMethod"`
	HoldURL             *string                                         `form:"name=HoldUrl"`
	Muted               *bool                                           `form:"name=Muted"`
	WaitMethod          *UpdateParticipantRequestBodyWaitMethodEnum     `form:"name=WaitMethod"`
	WaitURL             *string                                         `form:"name=WaitUrl"`
}

type UpdateParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateParticipantRequest struct {
	ServerURL  *string
	PathParams UpdateParticipantPathParams
	Request    *UpdateParticipantRequestBodyUpdateParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateParticipantSecurity
}

type UpdateParticipantResponse struct {
	ContentType                          string
	StatusCode                           int64
	APIV2010AccountConferenceParticipant *shared.APIV2010AccountConferenceParticipant
}
