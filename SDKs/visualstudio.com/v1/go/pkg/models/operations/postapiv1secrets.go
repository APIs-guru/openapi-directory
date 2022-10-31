package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1SecretsQueryParams struct {
	PlanID *string `queryParam:"style=form,explode=true,name=planId"`
}

type PostAPIV1SecretsRequests struct {
	ScopedCreateSecretBody  *shared.ScopedCreateSecretBody `request:"mediaType=application/*+json"`
	ScopedCreateSecretBody1 *shared.ScopedCreateSecretBody `request:"mediaType=application/json"`
	ScopedCreateSecretBody2 *shared.ScopedCreateSecretBody `request:"mediaType=application/json-patch+json"`
	ScopedCreateSecretBody3 *shared.ScopedCreateSecretBody `request:"mediaType=text/json"`
}

type PostAPIV1SecretsRequest struct {
	QueryParams PostAPIV1SecretsQueryParams
	Request     *PostAPIV1SecretsRequests
}

type PostAPIV1SecretsResponse struct {
	Body                   []byte
	ContentType            string
	ProblemDetails         map[string]interface{}
	ScopedSecretResultBody *shared.ScopedSecretResultBody
	StatusCode             int64
}
