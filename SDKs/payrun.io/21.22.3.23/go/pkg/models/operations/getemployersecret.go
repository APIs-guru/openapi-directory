package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployerSecretPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SecretID   string `pathParam:"style=simple,explode=false,name=SecretId"`
}

type GetEmployerSecretHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployerSecretRequest struct {
	PathParams GetEmployerSecretPathParams
	Headers    GetEmployerSecretHeaders
}

type GetEmployerSecretResponse struct {
	ContentType    string
	EmployerSecret *shared.EmployerSecret
	ErrorModel     *shared.ErrorModel
	StatusCode     int64
}
