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

type ListBundleCopyListBundleCopyResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBundleCopyListBundleCopyResponse struct {
	Meta    *ListBundleCopyListBundleCopyResponseMeta              `json:"meta,omitempty"`
	Results []shared.NumbersV2RegulatoryComplianceBundleBundleCopy `json:"results,omitempty"`
}

type ListBundleCopyResponse struct {
	ContentType            string
	ListBundleCopyResponse *ListBundleCopyListBundleCopyResponse
	StatusCode             int64
}
