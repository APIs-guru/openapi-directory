package operations

type CertificateCancelDeletionPathParams struct {
	Thumbprint          string `pathParam:"style=simple,explode=false,name=thumbprint"`
	ThumbprintAlgorithm string `pathParam:"style=simple,explode=false,name=thumbprintAlgorithm"`
}

type CertificateCancelDeletionQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type CertificateCancelDeletionHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type CertificateCancelDeletionRequest struct {
	PathParams  CertificateCancelDeletionPathParams
	QueryParams CertificateCancelDeletionQueryParams
	Headers     CertificateCancelDeletionHeaders
}

type CertificateCancelDeletionResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
