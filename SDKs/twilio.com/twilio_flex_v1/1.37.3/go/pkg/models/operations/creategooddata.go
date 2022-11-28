package operations

import (
	"openapi/pkg/models/shared"
)

var CreateGooddataServerList = []string{
	"https://flex-api.twilio.com",
}

type CreateGooddataHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type CreateGooddataSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateGooddataRequest struct {
	ServerURL *string
	Headers   CreateGooddataHeaders
	Security  CreateGooddataSecurity
}

type CreateGooddataResponse struct {
	ContentType    string
	StatusCode     int64
	FlexV1Gooddata *shared.FlexV1Gooddata
}
