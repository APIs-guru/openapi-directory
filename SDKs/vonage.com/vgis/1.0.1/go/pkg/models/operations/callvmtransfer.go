package operations

import (
	"openapi/pkg/models/shared"
)

type CallVMTransferPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CallVMTransferRequest struct {
	PathParams CallVMTransferPathParams
}

type CallVMTransferResponse struct {
	Call          *shared.Call
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
