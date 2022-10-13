package operations

type CertificateAddQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type CertificateAddHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type CertificateAddRequest struct {
	QueryParams CertificateAddQueryParams
	Headers     CertificateAddHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type CertificateAddResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
