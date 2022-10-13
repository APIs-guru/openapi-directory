package operations

import (
	"openapi/pkg/models/shared"
)

type GetAgentsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAgentsRequest struct {
	Security GetAgentsSecurity
}

type GetAgentsResponse struct {
	Agents      []shared.Agent
	ContentType string
	StatusCode  int64
}
