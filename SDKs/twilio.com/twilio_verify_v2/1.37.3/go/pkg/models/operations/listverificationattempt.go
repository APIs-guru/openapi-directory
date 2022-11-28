package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListVerificationAttemptServerList = []string{
	"https://verify.twilio.com",
}

type ListVerificationAttemptQueryParams struct {
	Channel           *shared.VerificationAttemptEnumChannelsEnum         `queryParam:"style=form,explode=true,name=Channel"`
	ChannelDataTo     *string                                             `queryParam:"style=form,explode=true,name=ChannelData.To"`
	Country           *string                                             `queryParam:"style=form,explode=true,name=Country"`
	DateCreatedAfter  *time.Time                                          `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                                          `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	PageSize          *int64                                              `queryParam:"style=form,explode=true,name=PageSize"`
	Status            *shared.VerificationAttemptEnumConversionStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	VerificationSid   *string                                             `queryParam:"style=form,explode=true,name=VerificationSid"`
	VerifyServiceSid  *string                                             `queryParam:"style=form,explode=true,name=VerifyServiceSid"`
}

type ListVerificationAttemptSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListVerificationAttemptListVerificationAttemptResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListVerificationAttemptListVerificationAttemptResponse struct {
	Attempts []shared.VerifyV2VerificationAttempt                        `json:"attempts,omitempty"`
	Meta     *ListVerificationAttemptListVerificationAttemptResponseMeta `json:"meta,omitempty"`
}

type ListVerificationAttemptRequest struct {
	ServerURL   *string
	QueryParams ListVerificationAttemptQueryParams
	Security    ListVerificationAttemptSecurity
}

type ListVerificationAttemptResponse struct {
	ContentType                     string
	ListVerificationAttemptResponse *ListVerificationAttemptListVerificationAttemptResponse
	StatusCode                      int64
}
