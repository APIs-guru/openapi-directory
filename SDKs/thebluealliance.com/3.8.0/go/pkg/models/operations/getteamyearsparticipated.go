package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamYearsParticipatedPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamYearsParticipatedHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamYearsParticipatedSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamYearsParticipatedRequest struct {
	PathParams GetTeamYearsParticipatedPathParams
	Headers    GetTeamYearsParticipatedHeaders
	Security   GetTeamYearsParticipatedSecurity
}

type GetTeamYearsParticipatedResponse struct {
	ContentType                                        string
	Headers                                            map[string][]string
	StatusCode                                         int64
	GetTeamYearsParticipated200ApplicationJSONIntegers []int64
}
