package operations

import (
	"openapi/pkg/models/shared"
)

var ListWirelessSimServers = []string{
	"https://preview.twilio.com",
}

type ListWirelessSimQueryParams struct {
	EID                 *string `queryParam:"style=form,explode=true,name=EId"`
	Iccid               *string `queryParam:"style=form,explode=true,name=Iccid"`
	PageSize            *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	RatePlan            *string `queryParam:"style=form,explode=true,name=RatePlan"`
	SimRegistrationCode *string `queryParam:"style=form,explode=true,name=SimRegistrationCode"`
	Status              *string `queryParam:"style=form,explode=true,name=Status"`
}

type ListWirelessSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWirelessSimRequest struct {
	ServerURL   *string
	QueryParams ListWirelessSimQueryParams
	Security    ListWirelessSimSecurity
}

type ListWirelessSim200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWirelessSim200ApplicationJSONListWirelessSimResponse struct {
	Meta *ListWirelessSim200ApplicationJSONMeta `json:"meta"`
	Sims []shared.PreviewWirelessSim            `json:"sims"`
}

type ListWirelessSimResponse struct {
	ContentType             string
	ListWirelessSimResponse *ListWirelessSim200ApplicationJSONListWirelessSimResponse
	StatusCode              int64
}
