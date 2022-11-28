package operations

import (
	"openapi/pkg/models/shared"
)

var ListEsimProfileServerList = []string{
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

type ListEsimProfileListEsimProfileResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEsimProfileListEsimProfileResponse struct {
	EsimProfiles []shared.SupersimV1EsimProfile              `json:"esim_profiles,omitempty"`
	Meta         *ListEsimProfileListEsimProfileResponseMeta `json:"meta,omitempty"`
}

type ListEsimProfileRequest struct {
	ServerURL   *string
	QueryParams ListEsimProfileQueryParams
	Security    ListEsimProfileSecurity
}

type ListEsimProfileResponse struct {
	ContentType             string
	ListEsimProfileResponse *ListEsimProfileListEsimProfileResponse
	StatusCode              int64
}
