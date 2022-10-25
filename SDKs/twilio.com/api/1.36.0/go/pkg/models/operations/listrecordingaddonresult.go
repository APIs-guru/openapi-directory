package operations

import (
	"openapi/pkg/models/shared"
)

var ListRecordingAddOnResultServers = []string{
	"https://api.twilio.com",
}

type ListRecordingAddOnResultPathParams struct {
	AccountSid   string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
}

type ListRecordingAddOnResultQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRecordingAddOnResultSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRecordingAddOnResultRequest struct {
	ServerURL   *string
	PathParams  ListRecordingAddOnResultPathParams
	QueryParams ListRecordingAddOnResultQueryParams
	Security    ListRecordingAddOnResultSecurity
}

type ListRecordingAddOnResultListRecordingAddOnResultResponse struct {
	AddOnResults    []shared.APIV2010AccountRecordingRecordingAddOnResult `json:"add_on_results,omitempty"`
	End             *int64                                                `json:"end,omitempty"`
	FirstPageURI    *string                                               `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                               `json:"next_page_uri,omitempty"`
	Page            *int64                                                `json:"page,omitempty"`
	PageSize        *int64                                                `json:"page_size,omitempty"`
	PreviousPageURI *string                                               `json:"previous_page_uri,omitempty"`
	Start           *int64                                                `json:"start,omitempty"`
	URI             *string                                               `json:"uri,omitempty"`
}

type ListRecordingAddOnResultResponse struct {
	ContentType                      string
	ListRecordingAddOnResultResponse *ListRecordingAddOnResultListRecordingAddOnResultResponse
	StatusCode                       int64
}
