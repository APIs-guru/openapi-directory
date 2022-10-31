package operations

import (
"openapi/pkg/models/shared")

type GetTeamsTeamIDAlertReportsFileNamePathParams struct {
    FileName string `pathParam:"style=simple,explode=false,name=fileName"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetTeamsTeamIDAlertReportsFileNameRequest struct {
    PathParams GetTeamsTeamIDAlertReportsFileNamePathParams 
    
}

type GetTeamsTeamIDAlertReportsFileNameResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    GetTeamsTeamIDAlertReportsFileName200ApplicationJSONBinaryString []byte 
    GetTeamsTeamIDAlertReportsFileName200TextJSONBinaryString []byte 
    GetTeamsTeamIDAlertReportsFileName200TextPlainBinaryString []byte 
    StatusCode int64 
    
}

