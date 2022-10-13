package operations

import (
	"openapi/pkg/models/shared"
)

var ListRecordingAddOnResultPayloadServers = []string{
	"https://api.twilio.com",
}

type ListRecordingAddOnResultPayloadPathParams struct {
	AccountSid     string `pathParam:"style=simple,explode=false,name=AccountSid"`
	AddOnResultSid string `pathParam:"style=simple,explode=false,name=AddOnResultSid"`
	ReferenceSid   string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
}

type ListRecordingAddOnResultPayloadQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRecordingAddOnResultPayloadSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRecordingAddOnResultPayloadRequest struct {
	ServerURL   *string
	PathParams  ListRecordingAddOnResultPayloadPathParams
	QueryParams ListRecordingAddOnResultPayloadQueryParams
	Security    ListRecordingAddOnResultPayloadSecurity
}

type ListRecordingAddOnResultPayload200ApplicationJSONListRecordingAddOnResultPayloadResponse struct {
	End             *int64                                                                           `json:"end"`
	FirstPageURI    *string                                                                          `json:"first_page_uri"`
	NextPageURI     *string                                                                          `json:"next_page_uri"`
	Page            *int64                                                                           `json:"page"`
	PageSize        *int64                                                                           `json:"page_size"`
	Payloads        []shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload `json:"payloads"`
	PreviousPageURI *string                                                                          `json:"previous_page_uri"`
	Start           *int64                                                                           `json:"start"`
	URI             *string                                                                          `json:"uri"`
}

type ListRecordingAddOnResultPayloadResponse struct {
	ContentType                             string
	ListRecordingAddOnResultPayloadResponse *ListRecordingAddOnResultPayload200ApplicationJSONListRecordingAddOnResultPayloadResponse
	StatusCode                              int64
}
