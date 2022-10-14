package operations

import (
	"openapi/pkg/models/shared"
)

var ListSimServers = []string{
	"https://wireless.twilio.com",
}

type ListSimQueryParams struct {
	EID                 *string                   `queryParam:"style=form,explode=true,name=EId"`
	Iccid               *string                   `queryParam:"style=form,explode=true,name=Iccid"`
	PageSize            *int64                    `queryParam:"style=form,explode=true,name=PageSize"`
	RatePlan            *string                   `queryParam:"style=form,explode=true,name=RatePlan"`
	SimRegistrationCode *string                   `queryParam:"style=form,explode=true,name=SimRegistrationCode"`
	Status              *shared.SimEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSimRequest struct {
	ServerURL   *string
	QueryParams ListSimQueryParams
	Security    ListSimSecurity
}

type ListSim200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSim200ApplicationJSONListSimResponse struct {
	Meta *ListSim200ApplicationJSONMeta `json:"meta,omitempty"`
	Sims []shared.WirelessV1Sim         `json:"sims,omitempty"`
}

type ListSimResponse struct {
	ContentType     string
	ListSimResponse *ListSim200ApplicationJSONListSimResponse
	StatusCode      int64
}
