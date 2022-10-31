package operations

type JobGetAllJobsLifetimeStatisticsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type JobGetAllJobsLifetimeStatisticsHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type JobGetAllJobsLifetimeStatisticsRequest struct {
	QueryParams JobGetAllJobsLifetimeStatisticsQueryParams
	Headers     JobGetAllJobsLifetimeStatisticsHeaders
}

type JobGetAllJobsLifetimeStatisticsResponse struct {
	BatchError    *interface{}
	ContentType   string
	Headers       map[string][]string
	JobStatistics *interface{}
	StatusCode    int64
}
