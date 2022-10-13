package operations

type TaskAddPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type TaskAddQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type TaskAddHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type TaskAddRequest struct {
	PathParams  TaskAddPathParams
	QueryParams TaskAddQueryParams
	Headers     TaskAddHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type TaskAddResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
