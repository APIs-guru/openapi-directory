package operations

import (
"openapi/pkg/models/shared")

type GetWatchHistoryQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetWatchHistorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWatchHistoryRequest struct {
    QueryParams GetWatchHistoryQueryParams 
    Security GetWatchHistorySecurity 
    
}

type GetWatchHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Videos []shared.Video 
    
}

