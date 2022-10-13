package operations

type ApplicationGetPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
}

type ApplicationGetQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ApplicationGetHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type ApplicationGetRequest struct {
	PathParams  ApplicationGetPathParams
	QueryParams ApplicationGetQueryParams
	Headers     ApplicationGetHeaders
}

type ApplicationGetResponse struct {
	ApplicationSummary *interface{}
	BatchError         *interface{}
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
