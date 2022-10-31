package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountAgentsQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type GetAccountAgentsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountAgentsRequest struct {
	QueryParams GetAccountAgentsQueryParams
	Security    GetAccountAgentsSecurity
}

type GetAccountAgentsResponse struct {
	Agents      []shared.Agent
	ContentType string
	StatusCode  int64
}
