package operations

import (
	"openapi/pkg/models/shared"
)

var ListAssetServerList = []string{
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

type ListAssetListAssetResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAssetListAssetResponse struct {
	Assets []shared.ServerlessV1ServiceAsset `json:"assets,omitempty"`
	Meta   *ListAssetListAssetResponseMeta   `json:"meta,omitempty"`
}

type ListAssetRequest struct {
	ServerURL   *string
	PathParams  ListAssetPathParams
	QueryParams ListAssetQueryParams
	Security    ListAssetSecurity
}

type ListAssetResponse struct {
	ContentType       string
	ListAssetResponse *ListAssetListAssetResponse
	StatusCode        int64
}
