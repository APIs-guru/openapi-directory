package operations

import (
	"openapi/pkg/models/shared"
)

var ListAssetVersionServers = []string{
	"https://serverless.twilio.com",
}

type ListAssetVersionPathParams struct {
	AssetSid   string `pathParam:"style=simple,explode=false,name=AssetSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListAssetVersionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAssetVersionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAssetVersionRequest struct {
	ServerURL   *string
	PathParams  ListAssetVersionPathParams
	QueryParams ListAssetVersionQueryParams
	Security    ListAssetVersionSecurity
}

type ListAssetVersion200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAssetVersion200ApplicationJSONListAssetVersionResponse struct {
	AssetVersions []shared.ServerlessV1ServiceAssetAssetVersion `json:"asset_versions,omitempty"`
	Meta          *ListAssetVersion200ApplicationJSONMeta       `json:"meta,omitempty"`
}

type ListAssetVersionResponse struct {
	ContentType              string
	ListAssetVersionResponse *ListAssetVersion200ApplicationJSONListAssetVersionResponse
	StatusCode               int64
}
