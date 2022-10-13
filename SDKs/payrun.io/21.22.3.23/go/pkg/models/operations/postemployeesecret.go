package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmployeeSecretPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostEmployeeSecretHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostEmployeeSecretRequest struct {
	PathParams PostEmployeeSecretPathParams
	Headers    PostEmployeeSecretHeaders
}

type PostEmployeeSecretResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
