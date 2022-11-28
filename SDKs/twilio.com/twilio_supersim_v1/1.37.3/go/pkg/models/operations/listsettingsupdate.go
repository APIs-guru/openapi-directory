package operations

import (
	"openapi/pkg/models/shared"
)

var ListSettingsUpdateServerList = []string{
	"https://supersim.twilio.com",
}

type ListSettingsUpdateQueryParams struct {
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Sim      *string `queryParam:"style=form,explode=true,name=Sim"`
}

type ListSettingsUpdateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSettingsUpdateListSettingsUpdateResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSettingsUpdateListSettingsUpdateResponse struct {
	Meta            *ListSettingsUpdateListSettingsUpdateResponseMeta `json:"meta,omitempty"`
	SettingsUpdates []shared.SupersimV1SettingsUpdate                 `json:"settings_updates,omitempty"`
}

type ListSettingsUpdateRequest struct {
	ServerURL   *string
	QueryParams ListSettingsUpdateQueryParams
	Security    ListSettingsUpdateSecurity
}

type ListSettingsUpdateResponse struct {
	ContentType                string
	ListSettingsUpdateResponse *ListSettingsUpdateListSettingsUpdateResponse
	StatusCode                 int64
}
