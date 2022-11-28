package operations

import (
	"openapi/pkg/models/shared"
)

var CreateRatePlanServerList = []string{
	"https://wireless.twilio.com",
}

type CreateRatePlanCreateRatePlanRequest struct {
	DataEnabled                   *bool    `form:"name=DataEnabled"`
	DataLimit                     *int64   `form:"name=DataLimit"`
	DataMetering                  *string  `form:"name=DataMetering"`
	FriendlyName                  *string  `form:"name=FriendlyName"`
	InternationalRoaming          []string `form:"name=InternationalRoaming"`
	InternationalRoamingDataLimit *int64   `form:"name=InternationalRoamingDataLimit"`
	MessagingEnabled              *bool    `form:"name=MessagingEnabled"`
	NationalRoamingDataLimit      *int64   `form:"name=NationalRoamingDataLimit"`
	NationalRoamingEnabled        *bool    `form:"name=NationalRoamingEnabled"`
	UniqueName                    *string  `form:"name=UniqueName"`
	VoiceEnabled                  *bool    `form:"name=VoiceEnabled"`
}

type CreateRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateRatePlanRequest struct {
	ServerURL *string
	Request   *CreateRatePlanCreateRatePlanRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateRatePlanSecurity
}

type CreateRatePlanResponse struct {
	ContentType        string
	StatusCode         int64
	WirelessV1RatePlan *shared.WirelessV1RatePlan
}
