package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListCompositionServers = []string{
	"https://video.twilio.com",
}

type ListCompositionQueryParams struct {
	DateCreatedAfter  *time.Time                        `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                        `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	PageSize          *int64                            `queryParam:"style=form,explode=true,name=PageSize"`
	RoomSid           *string                           `queryParam:"style=form,explode=true,name=RoomSid"`
	Status            *shared.CompositionEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListCompositionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCompositionRequest struct {
	ServerURL   *string
	QueryParams ListCompositionQueryParams
	Security    ListCompositionSecurity
}

type ListComposition200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListComposition200ApplicationJSONListCompositionResponse struct {
	Compositions []shared.VideoV1Composition            `json:"compositions"`
	Meta         *ListComposition200ApplicationJSONMeta `json:"meta"`
}

type ListCompositionResponse struct {
	ContentType             string
	ListCompositionResponse *ListComposition200ApplicationJSONListCompositionResponse
	StatusCode              int64
}
