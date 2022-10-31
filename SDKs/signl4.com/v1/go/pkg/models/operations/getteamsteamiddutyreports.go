package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDDutyReportsPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDDutyReportsRequest struct {
	PathParams GetTeamsTeamIDDutyReportsPathParams
}

type GetTeamsTeamIDDutyReportsResponse struct {
	Body                     []byte
	ContentType              string
	DutyAuditReportFileInfos []map[string]interface{}
	ErrorResponseContent     *shared.ErrorResponseContent
	StatusCode               int64
}
