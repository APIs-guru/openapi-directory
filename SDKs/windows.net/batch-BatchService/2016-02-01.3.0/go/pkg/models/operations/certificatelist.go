package operations

type CertificateListQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Maxresults   *int32  `queryParam:"style=form,explode=true,name=maxresults"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type CertificateListHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type CertificateListRequest struct {
	QueryParams CertificateListQueryParams
	Headers     CertificateListHeaders
}

type CertificateListResponse struct {
	BatchError            *interface{}
	CertificateListResult *interface{}
	ContentType           string
	Headers               map[string][]string
	StatusCode            int64
}
