package operations

import (
	"openapi/pkg/models/shared"
)

var ListMediaProcessorServers = []string{
	"https://media.twilio.com",
}

type ListMediaProcessorQueryParams struct {
	Order    *shared.MediaProcessorEnumOrderEnum  `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                               `queryParam:"style=form,explode=true,name=PageSize"`
	Status   *shared.MediaProcessorEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListMediaProcessorSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMediaProcessorRequest struct {
	ServerURL   *string
	QueryParams ListMediaProcessorQueryParams
	Security    ListMediaProcessorSecurity
}

type ListMediaProcessor200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMediaProcessor200ApplicationJSONListMediaProcessorResponse struct {
	MediaProcessors []shared.MediaV1MediaProcessor            `json:"media_processors"`
	Meta            *ListMediaProcessor200ApplicationJSONMeta `json:"meta"`
}

type ListMediaProcessorResponse struct {
	ContentType                string
	ListMediaProcessorResponse *ListMediaProcessor200ApplicationJSONListMediaProcessorResponse
	StatusCode                 int64
}
