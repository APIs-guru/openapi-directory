package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListVerificationAttemptServers = []string{
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

type ListVerificationAttemptRequest struct {
	ServerURL   *string
	QueryParams ListVerificationAttemptQueryParams
	Security    ListVerificationAttemptSecurity
}

type ListVerificationAttempt200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListVerificationAttempt200ApplicationJSONListVerificationAttemptResponse struct {
	Attempts []shared.VerifyV2VerificationAttempt           `json:"attempts"`
	Meta     *ListVerificationAttempt200ApplicationJSONMeta `json:"meta"`
}

type ListVerificationAttemptResponse struct {
	ContentType                     string
	ListVerificationAttemptResponse *ListVerificationAttempt200ApplicationJSONListVerificationAttemptResponse
	StatusCode                      int64
}
