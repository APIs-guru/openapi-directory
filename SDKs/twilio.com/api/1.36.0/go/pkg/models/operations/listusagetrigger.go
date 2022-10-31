package operations

import (
	"openapi/pkg/models/shared"
)

var ListUsageTriggerServers = []string{
	"https://api.twilio.com",
}

type ListUsageTriggerPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageTriggerQueryParams struct {
	PageSize      *int64                                    `queryParam:"style=form,explode=true,name=PageSize"`
	Recurring     *shared.UsageTriggerEnumRecurringEnum     `queryParam:"style=form,explode=true,name=Recurring"`
	TriggerBy     *shared.UsageTriggerEnumTriggerFieldEnum  `queryParam:"style=form,explode=true,name=TriggerBy"`
	UsageCategory *shared.UsageTriggerEnumUsageCategoryEnum `queryParam:"style=form,explode=true,name=UsageCategory"`
}

type ListUsageTriggerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageTriggerRequest struct {
	ServerURL   *string
	PathParams  ListUsageTriggerPathParams
	QueryParams ListUsageTriggerQueryParams
	Security    ListUsageTriggerSecurity
}

type ListUsageTriggerListUsageTriggerResponse struct {
	End             *int64                                    `json:"end,omitempty"`
	FirstPageURI    *string                                   `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                   `json:"next_page_uri,omitempty"`
	Page            *int64                                    `json:"page,omitempty"`
	PageSize        *int64                                    `json:"page_size,omitempty"`
	PreviousPageURI *string                                   `json:"previous_page_uri,omitempty"`
	Start           *int64                                    `json:"start,omitempty"`
	URI             *string                                   `json:"uri,omitempty"`
	UsageTriggers   []shared.APIV2010AccountUsageUsageTrigger `json:"usage_triggers,omitempty"`
}

type ListUsageTriggerResponse struct {
	ContentType              string
	ListUsageTriggerResponse *ListUsageTriggerListUsageTriggerResponse
	StatusCode               int64
}
