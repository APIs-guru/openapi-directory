package operations

import (
	"openapi/pkg/models/shared"
)

var ListEsimProfileServers = []string{
	"https://supersim.twilio.com",
}

type ListEsimProfileQueryParams struct {
	Eid      *string                           `queryParam:"style=form,explode=true,name=Eid"`
	PageSize *int64                            `queryParam:"style=form,explode=true,name=PageSize"`
	SimSid   *string                           `queryParam:"style=form,explode=true,name=SimSid"`
	Status   *shared.EsimProfileEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListEsimProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEsimProfileRequest struct {
	ServerURL   *string
	QueryParams ListEsimProfileQueryParams
	Security    ListEsimProfileSecurity
}

type ListEsimProfile200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEsimProfile200ApplicationJSONListEsimProfileResponse struct {
	EsimProfiles []shared.SupersimV1EsimProfile         `json:"esim_profiles"`
	Meta         *ListEsimProfile200ApplicationJSONMeta `json:"meta"`
}

type ListEsimProfileResponse struct {
	ContentType             string
	ListEsimProfileResponse *ListEsimProfile200ApplicationJSONListEsimProfileResponse
	StatusCode              int64
}
