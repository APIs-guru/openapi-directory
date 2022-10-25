package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateSessionServers = []string{
	"https://proxy.twilio.com",
}

type CreateSessionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSessionCreateSessionRequest struct {
	DateExpiry                *time.Time                    `form:"name=DateExpiry"`
	FailOnParticipantConflict *bool                         `form:"name=FailOnParticipantConflict"`
	Mode                      *shared.SessionEnumModeEnum   `form:"name=Mode"`
	Participants              []interface{}                 `form:"name=Participants"`
	Status                    *shared.SessionEnumStatusEnum `form:"name=Status"`
	TTL                       *int64                        `form:"name=Ttl"`
	UniqueName                *string                       `form:"name=UniqueName"`
}

type CreateSessionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSessionRequest struct {
	ServerURL  *string
	PathParams CreateSessionPathParams
	Request    *CreateSessionCreateSessionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSessionSecurity
}

type CreateSessionResponse struct {
	ContentType           string
	StatusCode            int64
	ProxyV1ServiceSession *shared.ProxyV1ServiceSession
}
