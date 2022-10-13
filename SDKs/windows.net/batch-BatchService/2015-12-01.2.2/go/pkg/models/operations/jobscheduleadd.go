package operations

type JobScheduleAddQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type JobScheduleAddHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type JobScheduleAddRequest struct {
	QueryParams JobScheduleAddQueryParams
	Headers     JobScheduleAddHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type JobScheduleAddResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
