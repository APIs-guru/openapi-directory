package operations

import (
	"openapi/pkg/models/shared"
)

var ListConferenceServers = []string{
	"https://insights.twilio.com",
}

type ListConferenceQueryParams struct {
	ConferenceSid  *string `queryParam:"style=form,explode=true,name=ConferenceSid"`
	CreatedAfter   *string `queryParam:"style=form,explode=true,name=CreatedAfter"`
	CreatedBefore  *string `queryParam:"style=form,explode=true,name=CreatedBefore"`
	DetectedIssues *string `queryParam:"style=form,explode=true,name=DetectedIssues"`
	EndReason      *string `queryParam:"style=form,explode=true,name=EndReason"`
	FriendlyName   *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	MixerRegion    *string `queryParam:"style=form,explode=true,name=MixerRegion"`
	PageSize       *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Status         *string `queryParam:"style=form,explode=true,name=Status"`
	Subaccount     *string `queryParam:"style=form,explode=true,name=Subaccount"`
	Tags           *string `queryParam:"style=form,explode=true,name=Tags"`
}

type ListConferenceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConferenceRequest struct {
	ServerURL   *string
	QueryParams ListConferenceQueryParams
	Security    ListConferenceSecurity
}

type ListConference200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConference200ApplicationJSONListConferenceResponse struct {
	Conferences []shared.InsightsV1Conference         `json:"conferences"`
	Meta        *ListConference200ApplicationJSONMeta `json:"meta"`
}

type ListConferenceResponse struct {
	ContentType            string
	ListConferenceResponse *ListConference200ApplicationJSONListConferenceResponse
	StatusCode             int64
}
