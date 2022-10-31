package operations

type TaskGetPathParams struct {
	JobID  string `pathParam:"style=simple,explode=false,name=jobId"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type TaskGetQueryParams struct {
	DollarExpand *string `queryParam:"style=form,explode=true,name=$expand"`
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type TaskGetHeaders struct {
	IfMatch               *string `header:"style=simple,explode=false,name=If-Match"`
	IfModifiedSince       *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	IfNoneMatch           *string `header:"style=simple,explode=false,name=If-None-Match"`
	IfUnmodifiedSince     *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type TaskGetRequest struct {
	PathParams  TaskGetPathParams
	QueryParams TaskGetQueryParams
	Headers     TaskGetHeaders
}

type TaskGetResponse struct {
	BatchError  *interface{}
	CloudTask   *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
