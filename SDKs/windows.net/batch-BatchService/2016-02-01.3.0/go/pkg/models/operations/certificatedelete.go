package operations

type CertificateDeletePathParams struct {
	Thumbprint          string `pathParam:"style=simple,explode=false,name=thumbprint"`
	ThumbprintAlgorithm string `pathParam:"style=simple,explode=false,name=thumbprintAlgorithm"`
}

type CertificateDeleteQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type CertificateDeleteHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type CertificateDeleteRequest struct {
	PathParams  CertificateDeletePathParams
	QueryParams CertificateDeleteQueryParams
	Headers     CertificateDeleteHeaders
}

type CertificateDeleteResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
