package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateCallFeedbackSummaryServerList = []string{
	"https://api.twilio.com",
}

type CreateCallFeedbackSummaryPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum string

const (
	CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumHead   CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum = "HEAD"
	CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumGet    CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum = "GET"
	CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumPost   CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum = "POST"
	CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumPatch  CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum = "PATCH"
	CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumPut    CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum = "PUT"
	CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumDelete CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest struct {
	EndDate              time.Time                                                                          `form:"name=EndDate"`
	IncludeSubaccounts   *bool                                                                              `form:"name=IncludeSubaccounts"`
	StartDate            time.Time                                                                          `form:"name=StartDate"`
	StatusCallback       *string                                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
}

type CreateCallFeedbackSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCallFeedbackSummaryRequest struct {
	ServerURL  *string
	PathParams CreateCallFeedbackSummaryPathParams
	Request    *CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCallFeedbackSummarySecurity
}

type CreateCallFeedbackSummaryResponse struct {
	ContentType                            string
	StatusCode                             int64
	APIV2010AccountCallCallFeedbackSummary *shared.APIV2010AccountCallCallFeedbackSummary
}
