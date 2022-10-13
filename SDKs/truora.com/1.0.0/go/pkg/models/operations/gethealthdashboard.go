package operations

import (
	"openapi/pkg/models/shared"
)

type GetHealthDashboardQueryParams struct {
	Country                   *string `queryParam:"style=form,explode=true,name=country"`
	UnixTimestampSeconds      *string `queryParam:"style=form,explode=true,name=unixTimestampSeconds"`
	UnixtimezoneOffsetSeconds *string `queryParam:"style=form,explode=true,name=unixtimezoneOffsetSeconds"`
}

type GetHealthDashboardSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetHealthDashboardRequest struct {
	QueryParams GetHealthDashboardQueryParams
	Security    GetHealthDashboardSecurity
}

type GetHealthDashboardResponse struct {
	ContentType string
	Databases   []shared.Database
	StatusCode  int64
}
