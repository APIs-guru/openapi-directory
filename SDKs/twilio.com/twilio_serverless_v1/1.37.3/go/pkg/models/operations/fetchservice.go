package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceServerList = []string{
	"https://serverless.twilio.com",
}

type FetchServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceRequest struct {
	ServerURL  *string
	PathParams FetchServicePathParams
	Security   FetchServiceSecurity
}

type FetchServiceResponse struct {
	ContentType         string
	StatusCode          int64
	ServerlessV1Service *shared.ServerlessV1Service
}
