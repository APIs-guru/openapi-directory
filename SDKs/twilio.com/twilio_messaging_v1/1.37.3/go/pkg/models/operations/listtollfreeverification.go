package operations

import (
	"openapi/pkg/models/shared"
)

var ListTollfreeVerificationServerList = []string{
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

type ListTollfreeVerificationListTollfreeVerificationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTollfreeVerificationListTollfreeVerificationResponse struct {
	Meta          *ListTollfreeVerificationListTollfreeVerificationResponseMeta `json:"meta,omitempty"`
	Verifications []shared.MessagingV1TollfreeVerification                      `json:"verifications,omitempty"`
}

type ListTollfreeVerificationRequest struct {
	ServerURL   *string
	QueryParams ListTollfreeVerificationQueryParams
	Security    ListTollfreeVerificationSecurity
}

type ListTollfreeVerificationResponse struct {
	ContentType                      string
	ListTollfreeVerificationResponse *ListTollfreeVerificationListTollfreeVerificationResponse
	StatusCode                       int64
}
