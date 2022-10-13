package operations

type JobScheduleGetPathParams struct {
	JobScheduleID string `pathParam:"style=simple,explode=false,name=jobScheduleId"`
}

type JobScheduleGetQueryParams struct {
	DollarExpand *string `queryParam:"style=form,explode=true,name=$expand"`
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type JobScheduleGetHeaders struct {
	IfMatch               *string `header:"name=If-Match"`
	IfModifiedSince       *string `header:"name=If-Modified-Since"`
	IfNoneMatch           *string `header:"name=If-None-Match"`
	IfUnmodifiedSince     *string `header:"name=If-Unmodified-Since"`
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type JobScheduleGetRequest struct {
	PathParams  JobScheduleGetPathParams
	QueryParams JobScheduleGetQueryParams
	Headers     JobScheduleGetHeaders
}

type JobScheduleGetResponse struct {
	BatchError       *interface{}
	CloudJobSchedule *interface{}
	ContentType      string
	Headers          map[string][]string
	StatusCode       int64
}
