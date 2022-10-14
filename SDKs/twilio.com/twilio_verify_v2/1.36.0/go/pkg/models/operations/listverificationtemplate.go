package operations

import (
	"openapi/pkg/models/shared"
)

var ListVerificationTemplateServers = []string{
	"https://verify.twilio.com",
}

type ListVerificationTemplateQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListVerificationTemplateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListVerificationTemplateRequest struct {
	ServerURL   *string
	QueryParams ListVerificationTemplateQueryParams
	Security    ListVerificationTemplateSecurity
}

type ListVerificationTemplate200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListVerificationTemplate200ApplicationJSONListVerificationTemplateResponse struct {
	Meta      *ListVerificationTemplate200ApplicationJSONMeta `json:"meta,omitempty"`
	Templates []shared.VerifyV2VerificationTemplate           `json:"templates,omitempty"`
}

type ListVerificationTemplateResponse struct {
	ContentType                      string
	ListVerificationTemplateResponse *ListVerificationTemplate200ApplicationJSONListVerificationTemplateResponse
	StatusCode                       int64
}
