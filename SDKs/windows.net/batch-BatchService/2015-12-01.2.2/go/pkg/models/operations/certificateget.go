package operations

type CertificateGetPathParams struct {
	Thumbprint          string `pathParam:"style=simple,explode=false,name=thumbprint"`
	ThumbprintAlgorithm string `pathParam:"style=simple,explode=false,name=thumbprintAlgorithm"`
}

type CertificateGetQueryParams struct {
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type CertificateGetHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type CertificateGetRequest struct {
	PathParams  CertificateGetPathParams
	QueryParams CertificateGetQueryParams
	Headers     CertificateGetHeaders
}

type CertificateGetResponse struct {
	BatchError  *interface{}
	Certificate *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
