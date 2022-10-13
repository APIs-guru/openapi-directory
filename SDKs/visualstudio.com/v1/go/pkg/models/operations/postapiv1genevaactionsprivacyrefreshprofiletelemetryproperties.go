package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests struct {
	RefreshProfileTelemetryPropertiesRequest  *shared.RefreshProfileTelemetryPropertiesRequest `request:"mediaType=application/*+json"`
	RefreshProfileTelemetryPropertiesRequest1 *shared.RefreshProfileTelemetryPropertiesRequest `request:"mediaType=application/json"`
	RefreshProfileTelemetryPropertiesRequest2 *shared.RefreshProfileTelemetryPropertiesRequest `request:"mediaType=application/json-patch+json"`
	RefreshProfileTelemetryPropertiesRequest3 *shared.RefreshProfileTelemetryPropertiesRequest `request:"mediaType=text/json"`
}

type PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest struct {
	Request PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests
}

type PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse struct {
	Body                                      []byte
	ContentType                               string
	ProblemDetails                            map[string]interface{}
	RefreshProfileTelemetryPropertiesResponse *shared.RefreshProfileTelemetryPropertiesResponse
	StatusCode                                int64
}
