package operations

import (
	"openapi/pkg/models/shared"
)

var FetchInteractionServerList = []string{
	"https://flex-api.twilio.com",
}

type FetchInteractionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchInteractionRequest struct {
	ServerURL  *string
	PathParams FetchInteractionPathParams
	Security   FetchInteractionSecurity
}

type FetchInteractionResponse struct {
	ContentType       string
	StatusCode        int64
	FlexV1Interaction *shared.FlexV1Interaction
}
