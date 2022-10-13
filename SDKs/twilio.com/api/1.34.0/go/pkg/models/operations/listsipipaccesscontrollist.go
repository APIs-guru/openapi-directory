package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipIPAccessControlListServers = []string{
	"https://api.twilio.com",
}

type ListSipIPAccessControlListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListSipIPAccessControlListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipIPAccessControlListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipIPAccessControlListRequest struct {
	ServerURL   *string
	PathParams  ListSipIPAccessControlListPathParams
	QueryParams ListSipIPAccessControlListQueryParams
	Security    ListSipIPAccessControlListSecurity
}

type ListSipIPAccessControlList200ApplicationJSONListSipIPAccessControlListResponse struct {
	End                  *int64                                            `json:"end"`
	FirstPageURI         *string                                           `json:"first_page_uri"`
	IPAccessControlLists []shared.APIV2010AccountSipSipIPAccessControlList `json:"ip_access_control_lists"`
	NextPageURI          *string                                           `json:"next_page_uri"`
	Page                 *int64                                            `json:"page"`
	PageSize             *int64                                            `json:"page_size"`
	PreviousPageURI      *string                                           `json:"previous_page_uri"`
	Start                *int64                                            `json:"start"`
	URI                  *string                                           `json:"uri"`
}

type ListSipIPAccessControlListResponse struct {
	ContentType                        string
	ListSipIPAccessControlListResponse *ListSipIPAccessControlList200ApplicationJSONListSipIPAccessControlListResponse
	StatusCode                         int64
}
