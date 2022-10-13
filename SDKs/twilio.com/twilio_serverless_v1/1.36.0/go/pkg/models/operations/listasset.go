package operations

import (
	"openapi/pkg/models/shared"
)

var ListAssetServers = []string{
	"https://serverless.twilio.com",
}

type ListAssetPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListAssetQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAssetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAssetRequest struct {
	ServerURL   *string
	PathParams  ListAssetPathParams
	QueryParams ListAssetQueryParams
	Security    ListAssetSecurity
}

type ListAsset200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListAsset200ApplicationJSONListAssetResponse struct {
	Assets []shared.ServerlessV1ServiceAsset `json:"assets"`
	Meta   *ListAsset200ApplicationJSONMeta  `json:"meta"`
}

type ListAssetResponse struct {
	ContentType       string
	ListAssetResponse *ListAsset200ApplicationJSONListAssetResponse
	StatusCode        int64
}
