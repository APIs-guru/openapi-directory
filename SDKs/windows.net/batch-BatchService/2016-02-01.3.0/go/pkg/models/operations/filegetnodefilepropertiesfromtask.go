package operations

type FileGetNodeFilePropertiesFromTaskPathParams struct {
	FileName string `pathParam:"style=simple,explode=false,name=fileName"`
	JobID    string `pathParam:"style=simple,explode=false,name=jobId"`
	TaskID   string `pathParam:"style=simple,explode=false,name=taskId"`
}

type FileGetNodeFilePropertiesFromTaskQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type FileGetNodeFilePropertiesFromTaskHeaders struct {
	IfModifiedSince       *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	IfUnmodifiedSince     *string `header:"style=simple,explode=false,name=If-Unmodified-Since"`
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type FileGetNodeFilePropertiesFromTaskRequest struct {
	PathParams  FileGetNodeFilePropertiesFromTaskPathParams
	QueryParams FileGetNodeFilePropertiesFromTaskQueryParams
	Headers     FileGetNodeFilePropertiesFromTaskHeaders
}

type FileGetNodeFilePropertiesFromTaskResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
