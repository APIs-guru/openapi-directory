package operations

import (
	"openapi/pkg/models/shared"
)

var ListTollfreeVerificationServers = []string{
	"https://messaging.twilio.com",
}

type ListTollfreeVerificationQueryParams struct {
	PageSize               *int64                                     `queryParam:"style=form,explode=true,name=PageSize"`
	Status                 *shared.TollfreeVerificationEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	TollfreePhoneNumberSid *string                                    `queryParam:"style=form,explode=true,name=TollfreePhoneNumberSid"`
}

type ListTollfreeVerificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTollfreeVerificationRequest struct {
	ServerURL   *string
	QueryParams ListTollfreeVerificationQueryParams
	Security    ListTollfreeVerificationSecurity
}

type ListTollfreeVerification200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTollfreeVerification200ApplicationJSONListTollfreeVerificationResponse struct {
	Meta          *ListTollfreeVerification200ApplicationJSONMeta `json:"meta,omitempty"`
	Verifications []shared.MessagingV1TollfreeVerification        `json:"verifications,omitempty"`
}

type ListTollfreeVerificationResponse struct {
	ContentType                      string
	ListTollfreeVerificationResponse *ListTollfreeVerification200ApplicationJSONListTollfreeVerificationResponse
	StatusCode                       int64
}
