package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1SecretsQueryParams struct {
	PlanID *string `queryParam:"style=form,explode=true,name=planId"`
}

type GetAPIV1SecretsRequest struct {
	QueryParams GetAPIV1SecretsQueryParams
}

type GetAPIV1SecretsResponse struct {
	Body                     []byte
	ContentType              string
	ProblemDetails           map[string]interface{}
	ScopedSecretResultBodies []shared.ScopedSecretResultBody
	StatusCode               int64
}
