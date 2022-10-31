package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamRobotsPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamRobotsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetTeamRobotsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamRobotsRequest struct {
	PathParams GetTeamRobotsPathParams
	Headers    GetTeamRobotsHeaders
	Security   GetTeamRobotsSecurity
}

type GetTeamRobotsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	TeamRobots  []shared.TeamRobot
}
