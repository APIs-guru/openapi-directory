package operations

import (
	"openapi/pkg/models/shared"
)

var FetchBalanceServerList = []string{
	"https://api.twilio.com",
}

type FetchBalancePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type FetchBalanceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchBalanceRequest struct {
	ServerURL  *string
	PathParams FetchBalancePathParams
	Security   FetchBalanceSecurity
}

type FetchBalanceResponse struct {
	ContentType            string
	StatusCode             int64
	APIV2010AccountBalance *shared.APIV2010AccountBalance
}
