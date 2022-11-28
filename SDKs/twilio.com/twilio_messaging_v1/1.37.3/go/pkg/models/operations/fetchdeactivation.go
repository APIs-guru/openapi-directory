package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchDeactivationServerList = []string{
	"https://messaging.twilio.com",
}

type FetchDeactivationQueryParams struct {
	Date *time.Time `queryParam:"style=form,explode=true,name=Date"`
}

type FetchDeactivationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDeactivationRequest struct {
	ServerURL   *string
	QueryParams FetchDeactivationQueryParams
	Security    FetchDeactivationSecurity
}

type FetchDeactivationResponse struct {
	ContentType             string
	StatusCode              int64
	MessagingV1Deactivation *shared.MessagingV1Deactivation
}
