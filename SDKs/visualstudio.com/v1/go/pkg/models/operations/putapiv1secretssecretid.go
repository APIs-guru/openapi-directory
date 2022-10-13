package operations

import (
	"openapi/pkg/models/shared"
)

type PutAPIV1SecretsSecretIDPathParams struct {
	SecretID string `pathParam:"style=simple,explode=false,name=secretId"`
}

type PutAPIV1SecretsSecretIDQueryParams struct {
	PlanID *string `queryParam:"style=form,explode=true,name=planId"`
}

type PutAPIV1SecretsSecretIDRequests struct {
	ScopedUpdateSecretBody  *shared.ScopedUpdateSecretBody `request:"mediaType=application/*+json"`
	ScopedUpdateSecretBody1 *shared.ScopedUpdateSecretBody `request:"mediaType=application/json"`
	ScopedUpdateSecretBody2 *shared.ScopedUpdateSecretBody `request:"mediaType=application/json-patch+json"`
	ScopedUpdateSecretBody3 *shared.ScopedUpdateSecretBody `request:"mediaType=text/json"`
}

type PutAPIV1SecretsSecretIDRequest struct {
	PathParams  PutAPIV1SecretsSecretIDPathParams
	QueryParams PutAPIV1SecretsSecretIDQueryParams
	Request     *PutAPIV1SecretsSecretIDRequests
}

type PutAPIV1SecretsSecretIDResponse struct {
	Body                   []byte
	ContentType            string
	ProblemDetails         map[string]interface{}
	ScopedSecretResultBody *shared.ScopedSecretResultBody
	StatusCode             int64
}
