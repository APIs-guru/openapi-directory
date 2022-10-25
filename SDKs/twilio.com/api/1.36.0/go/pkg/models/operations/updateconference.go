package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConferenceServers = []string{
	"https://api.twilio.com",
}

type UpdateConferencePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum string

const (
	UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumHead   UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum = "HEAD"
	UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumGet    UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum = "GET"
	UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumPost   UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum = "POST"
	UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumPatch  UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum = "PATCH"
	UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumPut    UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum = "PUT"
	UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumDelete UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum = "DELETE"
)

type UpdateConferenceUpdateConferenceRequest struct {
	AnnounceMethod *UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum `form:"name=AnnounceMethod"`
	AnnounceURL    *string                                                    `form:"name=AnnounceUrl"`
	Status         *shared.ConferenceEnumUpdateStatusEnum                     `form:"name=Status"`
}

type UpdateConferenceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConferenceRequest struct {
	ServerURL  *string
	PathParams UpdateConferencePathParams
	Request    *UpdateConferenceUpdateConferenceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConferenceSecurity
}

type UpdateConferenceResponse struct {
	ContentType               string
	StatusCode                int64
	APIV2010AccountConference *shared.APIV2010AccountConference
}
