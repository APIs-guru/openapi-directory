package operations

import (
	"openapi/pkg/models/shared"
)

var ListUserBindingServerList = []string{
	"https://chat.twilio.com",
}

type ListUserBindingPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type ListUserBindingQueryParams struct {
	BindingType []shared.UserBindingEnumBindingTypeEnum `queryParam:"style=form,explode=true,name=BindingType"`
	PageSize    *int64                                  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUserBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUserBindingListUserBindingResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUserBindingListUserBindingResponse struct {
	Bindings []shared.ChatV2ServiceUserUserBinding       `json:"bindings,omitempty"`
	Meta     *ListUserBindingListUserBindingResponseMeta `json:"meta,omitempty"`
}

type ListUserBindingRequest struct {
	ServerURL   *string
	PathParams  ListUserBindingPathParams
	QueryParams ListUserBindingQueryParams
	Security    ListUserBindingSecurity
}

type ListUserBindingResponse struct {
	ContentType             string
	ListUserBindingResponse *ListUserBindingListUserBindingResponse
	StatusCode              int64
}
