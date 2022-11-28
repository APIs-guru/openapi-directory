package operations

import (
	"openapi/pkg/models/shared"
)

var ListTranscriptionServerList = []string{
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

type ListTranscriptionListTranscriptionResponse struct {
	End             *int64                                `json:"end,omitempty"`
	FirstPageURI    *string                               `json:"first_page_uri,omitempty"`
	NextPageURI     *string                               `json:"next_page_uri,omitempty"`
	Page            *int64                                `json:"page,omitempty"`
	PageSize        *int64                                `json:"page_size,omitempty"`
	PreviousPageURI *string                               `json:"previous_page_uri,omitempty"`
	Start           *int64                                `json:"start,omitempty"`
	Transcriptions  []shared.APIV2010AccountTranscription `json:"transcriptions,omitempty"`
	URI             *string                               `json:"uri,omitempty"`
}

type ListTranscriptionRequest struct {
	ServerURL   *string
	PathParams  ListTranscriptionPathParams
	QueryParams ListTranscriptionQueryParams
	Security    ListTranscriptionSecurity
}

type ListTranscriptionResponse struct {
	ContentType               string
	ListTranscriptionResponse *ListTranscriptionListTranscriptionResponse
	StatusCode                int64
}
