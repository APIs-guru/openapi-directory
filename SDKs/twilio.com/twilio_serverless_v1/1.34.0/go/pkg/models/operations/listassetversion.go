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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListAssetVersion200ApplicationJSONListAssetVersionResponse struct {
	AssetVersions []shared.ServerlessV1ServiceAssetAssetVersion `json:"asset_versions"`
	Meta          *ListAssetVersion200ApplicationJSONMeta       `json:"meta"`
}

type ListAssetVersionResponse struct {
	ContentType              string
	ListAssetVersionResponse *ListAssetVersion200ApplicationJSONListAssetVersionResponse
	StatusCode               int64
}
