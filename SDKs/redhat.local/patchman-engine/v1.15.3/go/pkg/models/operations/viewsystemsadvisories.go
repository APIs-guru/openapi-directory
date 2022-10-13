package operations

import (
	"openapi/pkg/models/shared"
)

type ViewSystemsAdvisoriesSecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type ViewSystemsAdvisoriesRequest struct {
	Request  shared.ControllersSystemsAdvisoriesRequest `request:"mediaType=application/json"`
	Security ViewSystemsAdvisoriesSecurity
}

type ViewSystemsAdvisoriesResponse struct {
	ContentType                          string
	StatusCode                           int64
	ControllersSystemsAdvisoriesResponse *shared.ControllersSystemsAdvisoriesResponse
}
