package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchVerificationAttemptsSummaryServerList = []string{
	"https://verify.twilio.com",
}

type FetchVerificationAttemptsSummaryQueryParams struct {
	Channel           *shared.VerificationAttemptsSummaryEnumChannelsEnum `queryParam:"style=form,explode=true,name=Channel"`
	Country           *string                                             `queryParam:"style=form,explode=true,name=Country"`
	DateCreatedAfter  *time.Time                                          `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                                          `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	DestinationPrefix *string                                             `queryParam:"style=form,explode=true,name=DestinationPrefix"`
	VerifyServiceSid  *string                                             `queryParam:"style=form,explode=true,name=VerifyServiceSid"`
}

type FetchVerificationAttemptsSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchVerificationAttemptsSummaryRequest struct {
	ServerURL   *string
	QueryParams FetchVerificationAttemptsSummaryQueryParams
	Security    FetchVerificationAttemptsSummarySecurity
}

type FetchVerificationAttemptsSummaryResponse struct {
	ContentType                         string
	StatusCode                          int64
	VerifyV2VerificationAttemptsSummary *shared.VerifyV2VerificationAttemptsSummary
}
