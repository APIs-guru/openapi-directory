package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListBundleServers = []string{
	"https://numbers.twilio.com",
}

type ListBundleQueryParams struct {
	FriendlyName              *string                             `queryParam:"style=form,explode=true,name=FriendlyName"`
	HasValidUntilDate         *bool                               `queryParam:"style=form,explode=true,name=HasValidUntilDate"`
	IsoCountry                *string                             `queryParam:"style=form,explode=true,name=IsoCountry"`
	NumberType                *string                             `queryParam:"style=form,explode=true,name=NumberType"`
	PageSize                  *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	RegulationSid             *string                             `queryParam:"style=form,explode=true,name=RegulationSid"`
	SortBy                    *shared.BundleEnumSortByEnum        `queryParam:"style=form,explode=true,name=SortBy"`
	SortDirection             *shared.BundleEnumSortDirectionEnum `queryParam:"style=form,explode=true,name=SortDirection"`
	Status                    *shared.BundleEnumStatusEnum        `queryParam:"style=form,explode=true,name=Status"`
	ValidUntilDate            *time.Time                          `queryParam:"style=form,explode=true,name=ValidUntilDate"`
	ValidUntilDateLessThan    *time.Time                          `queryParam:"style=form,explode=true,name=ValidUntilDate<"`
	ValidUntilDateGreaterThan *time.Time                          `queryParam:"style=form,explode=true,name=ValidUntilDate>"`
}

type ListBundleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBundleRequest struct {
	ServerURL   *string
	QueryParams ListBundleQueryParams
	Security    ListBundleSecurity
}

type ListBundleListBundleResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBundleListBundleResponse struct {
	Meta    *ListBundleListBundleResponseMeta            `json:"meta,omitempty"`
	Results []shared.NumbersV2RegulatoryComplianceBundle `json:"results,omitempty"`
}

type ListBundleResponse struct {
	ContentType        string
	ListBundleResponse *ListBundleListBundleResponse
	StatusCode         int64
}
