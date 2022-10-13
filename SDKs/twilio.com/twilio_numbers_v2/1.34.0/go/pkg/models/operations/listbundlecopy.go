package operations

import (
	"openapi/pkg/models/shared"
)

var ListBundleCopyServers = []string{
	"https://numbers.twilio.com",
}

type ListBundleCopyPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
}

type ListBundleCopyQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListBundleCopySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBundleCopyRequest struct {
	ServerURL   *string
	PathParams  ListBundleCopyPathParams
	QueryParams ListBundleCopyQueryParams
	Security    ListBundleCopySecurity
}

type ListBundleCopy200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListBundleCopy200ApplicationJSONListBundleCopyResponse struct {
	Meta    *ListBundleCopy200ApplicationJSONMeta                  `json:"meta"`
	Results []shared.NumbersV2RegulatoryComplianceBundleBundleCopy `json:"results"`
}

type ListBundleCopyResponse struct {
	ContentType            string
	ListBundleCopyResponse *ListBundleCopy200ApplicationJSONListBundleCopyResponse
	StatusCode             int64
}
