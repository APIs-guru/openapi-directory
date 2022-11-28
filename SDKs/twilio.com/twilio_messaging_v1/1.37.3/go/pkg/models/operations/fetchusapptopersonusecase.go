package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUsAppToPersonUsecaseServerList = []string{
	"https://messaging.twilio.com",
}

type FetchUsAppToPersonUsecasePathParams struct {
	MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
}

type FetchUsAppToPersonUsecaseQueryParams struct {
	BrandRegistrationSid *string `queryParam:"style=form,explode=true,name=BrandRegistrationSid"`
}

type FetchUsAppToPersonUsecaseSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUsAppToPersonUsecaseRequest struct {
	ServerURL   *string
	PathParams  FetchUsAppToPersonUsecasePathParams
	QueryParams FetchUsAppToPersonUsecaseQueryParams
	Security    FetchUsAppToPersonUsecaseSecurity
}

type FetchUsAppToPersonUsecaseResponse struct {
	ContentType                            string
	StatusCode                             int64
	MessagingV1ServiceUsAppToPersonUsecase *shared.MessagingV1ServiceUsAppToPersonUsecase
}
