package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteQueueServerList = []string{
	"https://api.twilio.com",
}

type DeleteQueuePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteQueueRequest struct {
	ServerURL  *string
	PathParams DeleteQueuePathParams
	Security   DeleteQueueSecurity
}

type DeleteQueueResponse struct {
	ContentType string
	StatusCode  int64
}
