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

type UpdateConferenceRequestBodyAnnounceMethodEnum string

const (
	UpdateConferenceRequestBodyAnnounceMethodEnumHead   UpdateConferenceRequestBodyAnnounceMethodEnum = "HEAD"
	UpdateConferenceRequestBodyAnnounceMethodEnumGet    UpdateConferenceRequestBodyAnnounceMethodEnum = "GET"
	UpdateConferenceRequestBodyAnnounceMethodEnumPost   UpdateConferenceRequestBodyAnnounceMethodEnum = "POST"
	UpdateConferenceRequestBodyAnnounceMethodEnumPatch  UpdateConferenceRequestBodyAnnounceMethodEnum = "PATCH"
	UpdateConferenceRequestBodyAnnounceMethodEnumPut    UpdateConferenceRequestBodyAnnounceMethodEnum = "PUT"
	UpdateConferenceRequestBodyAnnounceMethodEnumDelete UpdateConferenceRequestBodyAnnounceMethodEnum = "DELETE"
)

type UpdateConferenceRequestBodyUpdateConferenceRequest struct {
	AnnounceMethod *UpdateConferenceRequestBodyAnnounceMethodEnum `form:"name=AnnounceMethod"`
	AnnounceURL    *string                                        `form:"name=AnnounceUrl"`
	Status         *shared.ConferenceEnumUpdateStatusEnum         `form:"name=Status"`
}

type UpdateConferenceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConferenceRequest struct {
	ServerURL  *string
	PathParams UpdateConferencePathParams
	Request    *UpdateConferenceRequestBodyUpdateConferenceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConferenceSecurity
}

type UpdateConferenceResponse struct {
	ContentType               string
	StatusCode                int64
	APIV2010AccountConference *shared.APIV2010AccountConference
}
