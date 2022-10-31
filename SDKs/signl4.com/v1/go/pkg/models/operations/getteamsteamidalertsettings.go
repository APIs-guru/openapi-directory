package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDAlertSettingsPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDAlertSettingsRequest struct {
	PathParams GetTeamsTeamIDAlertSettingsPathParams
}

type GetTeamsTeamIDAlertSettingsResponse struct {
	AlertSettings        *shared.AlertSettings
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
