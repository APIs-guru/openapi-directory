package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDAlertReportsPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDAlertReportsRequest struct {
	PathParams GetTeamsTeamIDAlertReportsPathParams
}

type GetTeamsTeamIDAlertReportsResponse struct {
	AlertAuditReportFileInfos []map[string]interface{}
	Body                      []byte
	ContentType               string
	ErrorResponseContent      *shared.ErrorResponseContent
	StatusCode                int64
}
