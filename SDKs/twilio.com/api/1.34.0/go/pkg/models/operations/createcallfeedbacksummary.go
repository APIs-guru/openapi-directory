package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateCallFeedbackSummaryServers = []string{
	"https://api.twilio.com",
}

type CreateCallFeedbackSummaryPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum string

const (
	CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnumHead   CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnumGet    CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum = "GET"
	CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnumPost   CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum = "POST"
	CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnumPatch  CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnumPut    CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnumDelete CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateCallFeedbackSummaryRequestBodyCreateCallFeedbackSummaryRequest struct {
	EndDate              time.Time                                                     `form:"name=EndDate"`
	IncludeSubaccounts   *bool                                                         `form:"name=IncludeSubaccounts"`
	StartDate            time.Time                                                     `form:"name=StartDate"`
	StatusCallback       *string                                                       `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateCallFeedbackSummaryRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
}

type CreateCallFeedbackSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCallFeedbackSummaryRequest struct {
	ServerURL  *string
	PathParams CreateCallFeedbackSummaryPathParams
	Request    *CreateCallFeedbackSummaryRequestBodyCreateCallFeedbackSummaryRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCallFeedbackSummarySecurity
}

type CreateCallFeedbackSummaryResponse struct {
	ContentType                            string
	StatusCode                             int64
	APIV2010AccountCallCallFeedbackSummary *shared.APIV2010AccountCallCallFeedbackSummary
}
