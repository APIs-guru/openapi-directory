package operations

type TaskDeletePathParams struct {
	JobID  string `pathParam:"style=simple,explode=false,name=jobId"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type TaskDeleteQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type TaskDeleteHeaders struct {
	IfMatch               *string `header:"name=If-Match"`
	IfModifiedSince       *string `header:"name=If-Modified-Since"`
	IfNoneMatch           *string `header:"name=If-None-Match"`
	IfUnmodifiedSince     *string `header:"name=If-Unmodified-Since"`
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type TaskDeleteRequest struct {
	PathParams  TaskDeletePathParams
	QueryParams TaskDeleteQueryParams
	Headers     TaskDeleteHeaders
}

type TaskDeleteResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
