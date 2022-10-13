package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsTeamIDAlertSettingsPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostTeamsTeamIDAlertSettingsRequests struct {
	AlertSettings  *shared.AlertSettings `request:"mediaType=application/*+json"`
	AlertSettings1 *shared.AlertSettings `request:"mediaType=application/json"`
	AlertSettings2 *shared.AlertSettings `request:"mediaType=application/json-patch+json"`
	AlertSettings3 *shared.AlertSettings `request:"mediaType=text/json"`
}

type PostTeamsTeamIDAlertSettingsRequest struct {
	PathParams PostTeamsTeamIDAlertSettingsPathParams
	Request    *PostTeamsTeamIDAlertSettingsRequests
}

type PostTeamsTeamIDAlertSettingsResponse struct {
	AlertSettings        *shared.AlertSettings
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
