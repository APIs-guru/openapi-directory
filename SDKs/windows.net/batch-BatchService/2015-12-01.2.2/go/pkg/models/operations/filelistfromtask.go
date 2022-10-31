package operations

type FileListFromTaskPathParams struct {
	JobID  string `pathParam:"style=simple,explode=false,name=jobId"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type FileListFromTaskQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Maxresults   *int32  `queryParam:"style=form,explode=true,name=maxresults"`
	Recursive    *bool   `queryParam:"style=form,explode=true,name=recursive"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type FileListFromTaskHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type FileListFromTaskRequest struct {
	PathParams  FileListFromTaskPathParams
	QueryParams FileListFromTaskQueryParams
	Headers     FileListFromTaskHeaders
}

type FileListFromTaskResponse struct {
	BatchError         *interface{}
	ContentType        string
	Headers            map[string][]string
	NodeFileListResult *interface{}
	StatusCode         int64
}
