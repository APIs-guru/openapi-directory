package operations

type JobListPreparationAndReleaseTaskStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type JobListPreparationAndReleaseTaskStatusQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Maxresults   *int32  `queryParam:"style=form,explode=true,name=maxresults"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type JobListPreparationAndReleaseTaskStatusHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type JobListPreparationAndReleaseTaskStatusRequest struct {
	PathParams  JobListPreparationAndReleaseTaskStatusPathParams
	QueryParams JobListPreparationAndReleaseTaskStatusQueryParams
	Headers     JobListPreparationAndReleaseTaskStatusHeaders
}

type JobListPreparationAndReleaseTaskStatusResponse struct {
	BatchError                                        *interface{}
	CloudJobListPreparationAndReleaseTaskStatusResult *interface{}
	ContentType                                       string
	Headers                                           map[string][]string
	StatusCode                                        int64
}
