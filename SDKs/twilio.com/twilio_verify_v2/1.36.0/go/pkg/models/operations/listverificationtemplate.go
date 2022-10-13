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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListVerificationTemplate200ApplicationJSONListVerificationTemplateResponse struct {
	Meta      *ListVerificationTemplate200ApplicationJSONMeta `json:"meta"`
	Templates []shared.VerifyV2VerificationTemplate           `json:"templates"`
}

type ListVerificationTemplateResponse struct {
	ContentType                      string
	ListVerificationTemplateResponse *ListVerificationTemplate200ApplicationJSONListVerificationTemplateResponse
	StatusCode                       int64
}
