package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateSessionServers = []string{
	"https://proxy.twilio.com",
}

type UpdateSessionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSessionUpdateSessionRequest struct {
	DateExpiry                *time.Time                    `form:"name=DateExpiry"`
	FailOnParticipantConflict *bool                         `form:"name=FailOnParticipantConflict"`
	Status                    *shared.SessionEnumStatusEnum `form:"name=Status"`
	TTL                       *int64                        `form:"name=Ttl"`
}

type UpdateSessionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSessionRequest struct {
	ServerURL  *string
	PathParams UpdateSessionPathParams
	Request    *UpdateSessionUpdateSessionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSessionSecurity
}

type UpdateSessionResponse struct {
	ContentType           string
	StatusCode            int64
	ProxyV1ServiceSession *shared.ProxyV1ServiceSession
}
