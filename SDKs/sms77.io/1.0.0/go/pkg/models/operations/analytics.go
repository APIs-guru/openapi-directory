package operations

type AnalyticsGroupByEnum string

const (
	AnalyticsGroupByEnumDate       AnalyticsGroupByEnum = "date"
	AnalyticsGroupByEnumLabel      AnalyticsGroupByEnum = "label"
	AnalyticsGroupByEnumSubaccount AnalyticsGroupByEnum = "subaccount"
	AnalyticsGroupByEnumCountry    AnalyticsGroupByEnum = "country"
)

type AnalyticsQueryParams struct {
	End         *string               `queryParam:"style=form,explode=true,name=end"`
	GroupBy     *AnalyticsGroupByEnum `queryParam:"style=form,explode=true,name=group_by"`
	Label       *string               `queryParam:"style=form,explode=true,name=label"`
	Start       *string               `queryParam:"style=form,explode=true,name=start"`
	Subaccounts *string               `queryParam:"style=form,explode=true,name=subaccounts"`
}

type AnalyticsRequest struct {
	QueryParams AnalyticsQueryParams
}

type Analytics200ApplicationJSON struct {
	Date     *string  `json:"date,omitempty"`
	Direct   *int64   `json:"direct,omitempty"`
	Economy  *int64   `json:"economy,omitempty"`
	Hlr      *int64   `json:"hlr,omitempty"`
	Inbound  *int64   `json:"inbound,omitempty"`
	Mnp      *int64   `json:"mnp,omitempty"`
	UsageEur *float32 `json:"usage_eur,omitempty"`
	Voice    *int64   `json:"voice,omitempty"`
}

type AnalyticsResponse struct {
	Analytics200ApplicationJSONObject *Analytics200ApplicationJSON
	ContentType                       string
	StatusCode                        int64
}
