package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListCompositionHookServers = []string{
	"https://video.twilio.com",
}

type ListCompositionHookQueryParams struct {
	DateCreatedAfter  *time.Time `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	Enabled           *bool      `queryParam:"style=form,explode=true,name=Enabled"`
	FriendlyName      *string    `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize          *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCompositionHookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCompositionHookRequest struct {
	ServerURL   *string
	QueryParams ListCompositionHookQueryParams
	Security    ListCompositionHookSecurity
}

type ListCompositionHook200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCompositionHook200ApplicationJSONListCompositionHookResponse struct {
	CompositionHooks []shared.VideoV1CompositionHook            `json:"composition_hooks"`
	Meta             *ListCompositionHook200ApplicationJSONMeta `json:"meta"`
}

type ListCompositionHookResponse struct {
	ContentType                 string
	ListCompositionHookResponse *ListCompositionHook200ApplicationJSONListCompositionHookResponse
	StatusCode                  int64
}
