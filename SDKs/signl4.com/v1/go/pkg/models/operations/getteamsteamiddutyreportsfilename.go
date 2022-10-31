package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDDutyReportsFileNamePathParams struct {
	FileName string `pathParam:"style=simple,explode=false,name=fileName"`
	TeamID   string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDDutyReportsFileNameRequest struct {
	PathParams GetTeamsTeamIDDutyReportsFileNamePathParams
}

type GetTeamsTeamIDDutyReportsFileNameResponse struct {
	Body                                                            []byte
	ContentType                                                     string
	ErrorResponseContent                                            *shared.ErrorResponseContent
	GetTeamsTeamIDDutyReportsFileName200ApplicationJSONBinaryString []byte
	GetTeamsTeamIDDutyReportsFileName200TextJSONBinaryString        []byte
	GetTeamsTeamIDDutyReportsFileName200TextPlainBinaryString       []byte
	StatusCode                                                      int64
}
