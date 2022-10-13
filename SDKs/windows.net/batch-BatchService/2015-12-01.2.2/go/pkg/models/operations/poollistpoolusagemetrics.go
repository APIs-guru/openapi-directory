package operations

import (
	"time"
)

type PoolListPoolUsageMetricsQueryParams struct {
	DollarFilter *string    `queryParam:"style=form,explode=true,name=$filter"`
	APIVersion   string     `queryParam:"style=form,explode=true,name=api-version"`
	Endtime      *time.Time `queryParam:"style=form,explode=true,name=endtime"`
	Maxresults   *int32     `queryParam:"style=form,explode=true,name=maxresults"`
	Starttime    *time.Time `queryParam:"style=form,explode=true,name=starttime"`
	Timeout      *int32     `queryParam:"style=form,explode=true,name=timeout"`
}

type PoolListPoolUsageMetricsHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type PoolListPoolUsageMetricsRequest struct {
	QueryParams PoolListPoolUsageMetricsQueryParams
	Headers     PoolListPoolUsageMetricsHeaders
}

type PoolListPoolUsageMetricsResponse struct {
	BatchError                     *interface{}
	ContentType                    string
	Headers                        map[string][]string
	PoolListPoolUsageMetricsResult *interface{}
	StatusCode                     int64
}
