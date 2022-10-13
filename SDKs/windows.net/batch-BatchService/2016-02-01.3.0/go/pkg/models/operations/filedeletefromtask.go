package operations

type FileDeleteFromTaskPathParams struct {
	FileName string `pathParam:"style=simple,explode=false,name=fileName"`
	JobID    string `pathParam:"style=simple,explode=false,name=jobId"`
	TaskID   string `pathParam:"style=simple,explode=false,name=taskId"`
}

type FileDeleteFromTaskQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Recursive  *bool  `queryParam:"style=form,explode=true,name=recursive"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type FileDeleteFromTaskHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type FileDeleteFromTaskRequest struct {
	PathParams  FileDeleteFromTaskPathParams
	QueryParams FileDeleteFromTaskQueryParams
	Headers     FileDeleteFromTaskHeaders
}

type FileDeleteFromTaskResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
