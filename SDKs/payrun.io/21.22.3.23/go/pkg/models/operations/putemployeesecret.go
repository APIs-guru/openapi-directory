package operations

import (
	"openapi/pkg/models/shared"
)

type PutEmployeeSecretPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SecretID   string `pathParam:"style=simple,explode=false,name=SecretId"`
}

type PutEmployeeSecretHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutEmployeeSecretRequest struct {
	PathParams PutEmployeeSecretPathParams
	Headers    PutEmployeeSecretHeaders
}

type PutEmployeeSecretResponse struct {
	ContentType    string
	EmployeeSecret *shared.EmployeeSecret
	ErrorModel     *shared.ErrorModel
	StatusCode     int64
}
