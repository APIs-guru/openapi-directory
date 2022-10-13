package operations

import (
	"openapi/pkg/models/shared"
)

var ListTranscriptionServers = []string{
	"https://api.twilio.com",
}

type ListTranscriptionPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListTranscriptionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTranscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTranscriptionRequest struct {
	ServerURL   *string
	PathParams  ListTranscriptionPathParams
	QueryParams ListTranscriptionQueryParams
	Security    ListTranscriptionSecurity
}

type ListTranscription200ApplicationJSONListTranscriptionResponse struct {
	End             *int64                                `json:"end"`
	FirstPageURI    *string                               `json:"first_page_uri"`
	NextPageURI     *string                               `json:"next_page_uri"`
	Page            *int64                                `json:"page"`
	PageSize        *int64                                `json:"page_size"`
	PreviousPageURI *string                               `json:"previous_page_uri"`
	Start           *int64                                `json:"start"`
	Transcriptions  []shared.APIV2010AccountTranscription `json:"transcriptions"`
	URI             *string                               `json:"uri"`
}

type ListTranscriptionResponse struct {
	ContentType               string
	ListTranscriptionResponse *ListTranscription200ApplicationJSONListTranscriptionResponse
	StatusCode                int64
}
