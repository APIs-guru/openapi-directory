package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmployeeSecretPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SecretID   string `pathParam:"style=simple,explode=false,name=SecretId"`
}

type DeleteEmployeeSecretHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteEmployeeSecretRequest struct {
	PathParams DeleteEmployeeSecretPathParams
	Headers    DeleteEmployeeSecretHeaders
}

type DeleteEmployeeSecretResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
