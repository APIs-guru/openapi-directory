package operations

import (
	"openapi/pkg/models/shared"
)

type PutEmployerSecretPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SecretID   string `pathParam:"style=simple,explode=false,name=SecretId"`
}

type PutEmployerSecretHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutEmployerSecretRequest struct {
	PathParams PutEmployerSecretPathParams
	Headers    PutEmployerSecretHeaders
}

type PutEmployerSecretResponse struct {
	ContentType    string
	EmployerSecret *shared.EmployerSecret
	ErrorModel     *shared.ErrorModel
	StatusCode     int64
}
