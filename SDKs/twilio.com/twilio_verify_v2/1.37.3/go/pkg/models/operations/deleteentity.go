package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteEntityServerList = []string{
	"https://verify.twilio.com",
}

type DeleteEntityPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteEntitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteEntityRequest struct {
	ServerURL  *string
	PathParams DeleteEntityPathParams
	Security   DeleteEntitySecurity
}

type DeleteEntityResponse struct {
	ContentType string
	StatusCode  int64
}
