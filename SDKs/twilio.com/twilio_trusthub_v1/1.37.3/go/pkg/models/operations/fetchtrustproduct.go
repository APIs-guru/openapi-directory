package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrustProductServerList = []string{
	"https://trusthub.twilio.com",
}

type FetchTrustProductPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchTrustProductSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrustProductRequest struct {
	ServerURL  *string
	PathParams FetchTrustProductPathParams
	Security   FetchTrustProductSecurity
}

type FetchTrustProductResponse struct {
	ContentType            string
	StatusCode             int64
	TrusthubV1TrustProduct *shared.TrusthubV1TrustProduct
}
