package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllInvestorsSortEnum string

const (
	GetAllInvestorsSortEnumAsc  GetAllInvestorsSortEnum = "asc"
	GetAllInvestorsSortEnumDesc GetAllInvestorsSortEnum = "desc"
)

type GetAllInvestorsQueryParams struct {
	PageNumber *string                  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize   *string                  `queryParam:"style=form,explode=true,name=page_size"`
	Sort       *GetAllInvestorsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetAllInvestorsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetAllInvestorsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

// GetAllInvestors200ApplicationJSON
// Array of investors
type GetAllInvestors200ApplicationJSON struct {
	Investors         []interface{} `json:"investors"`
	NextPageAvailable bool          `json:"next_page_available"`
}

type GetAllInvestorsRequest struct {
	QueryParams GetAllInvestorsQueryParams
	Headers     GetAllInvestorsHeaders
	Security    GetAllInvestorsSecurity
}

type GetAllInvestorsResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetAllInvestors200ApplicationJSONObject *GetAllInvestors200ApplicationJSON
	GetAllInvestors400ApplicationJSONAny    *interface{}
	GetAllInvestors401ApplicationJSONAny    *interface{}
	GetAllInvestors403ApplicationJSONAny    *interface{}
	GetAllInvestors429ApplicationJSONAny    *interface{}
	GetAllInvestors500ApplicationJSONAny    *interface{}
}
