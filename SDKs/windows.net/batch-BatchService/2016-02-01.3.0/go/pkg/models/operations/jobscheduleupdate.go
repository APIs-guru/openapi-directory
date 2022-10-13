package operations

type JobScheduleUpdatePathParams struct {
	JobScheduleID string `pathParam:"style=simple,explode=false,name=jobScheduleId"`
}

type JobScheduleUpdateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type JobScheduleUpdateHeaders struct {
	IfMatch               *string `header:"name=If-Match"`
	IfModifiedSince       *string `header:"name=If-Modified-Since"`
	IfNoneMatch           *string `header:"name=If-None-Match"`
	IfUnmodifiedSince     *string `header:"name=If-Unmodified-Since"`
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type JobScheduleUpdateRequest struct {
	PathParams  JobScheduleUpdatePathParams
	QueryParams JobScheduleUpdateQueryParams
	Headers     JobScheduleUpdateHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type JobScheduleUpdateResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
