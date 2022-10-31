package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequests struct {
	CreateEnvironmentStateChangeBody  *shared.CreateEnvironmentStateChangeBody `request:"mediaType=application/*+json"`
	CreateEnvironmentStateChangeBody1 *shared.CreateEnvironmentStateChangeBody `request:"mediaType=application/json"`
	CreateEnvironmentStateChangeBody2 *shared.CreateEnvironmentStateChangeBody `request:"mediaType=application/json-patch+json"`
	CreateEnvironmentStateChangeBody3 *shared.CreateEnvironmentStateChangeBody `request:"mediaType=text/json"`
}

type PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequest struct {
	PathParams PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams
	Request    PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequests
}

type PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse struct {
	Body                   []byte
	ContentType            string
	EnvironmentStateChange *shared.EnvironmentStateChange
	ProblemDetails         map[string]interface{}
	StatusCode             int64
}
