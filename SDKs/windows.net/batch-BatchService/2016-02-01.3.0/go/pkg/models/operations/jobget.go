package operations

type JobGetPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type JobGetQueryParams struct {
	DollarExpand *string `queryParam:"style=form,explode=true,name=$expand"`
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type JobGetHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type JobGetRequest struct {
	PathParams  JobGetPathParams
	QueryParams JobGetQueryParams
	Headers     JobGetHeaders
}

type JobGetResponse struct {
	BatchError  *interface{}
	CloudJob    *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
