package operations

type JobGetAllJobsLifetimeStatisticsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type JobGetAllJobsLifetimeStatisticsHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
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
