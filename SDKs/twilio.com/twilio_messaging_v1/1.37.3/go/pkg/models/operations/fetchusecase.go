package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUsecaseServerList = []string{
	"https://messaging.twilio.com",
}

type FetchUsecaseSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUsecaseRequest struct {
	ServerURL *string
	Security  FetchUsecaseSecurity
}

type FetchUsecaseResponse struct {
	ContentType        string
	StatusCode         int64
	MessagingV1Usecase *shared.MessagingV1Usecase
}
