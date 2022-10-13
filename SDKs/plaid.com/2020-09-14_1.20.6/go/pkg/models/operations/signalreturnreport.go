package operations

import (
	"openapi/pkg/models/shared"
)

type SignalReturnReportRequest struct {
	Request shared.SignalReturnReportRequest `request:"mediaType=application/json"`
}

type SignalReturnReportResponse struct {
	ContentType                string
	Error                      map[string]interface{}
	SignalReturnReportResponse *shared.SignalReturnReportResponse
	StatusCode                 int64
}
