package operations

import (
"openapi/pkg/models/shared")


type GetEventsCountDirectionEnum string

const (
    GetEventsCountDirectionEnumInbound GetEventsCountDirectionEnum = "INBOUND"
GetEventsCountDirectionEnumOutbound GetEventsCountDirectionEnum = "OUTBOUND"
)



type GetEventsCountStatesEnum string

const (
    GetEventsCountStatesEnumInitializing GetEventsCountStatesEnum = "INITIALIZING"
GetEventsCountStatesEnumRinging GetEventsCountStatesEnum = "RINGING"
GetEventsCountStatesEnumActive GetEventsCountStatesEnum = "ACTIVE"
GetEventsCountStatesEnumHeld GetEventsCountStatesEnum = "HELD"
GetEventsCountStatesEnumRemoteHeld GetEventsCountStatesEnum = "REMOTE_HELD"
)


type GetEventsCountQueryParams struct {
    Direction *GetEventsCountDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    FromDate *int64 `queryParam:"style=form,explode=true,name=fromDate"`
    States *GetEventsCountStatesEnum `queryParam:"style=form,explode=true,name=states"`
    ToDate *int64 `queryParam:"style=form,explode=true,name=toDate"`
    
}

type GetEventsCountRequest struct {
    QueryParams GetEventsCountQueryParams 
    
}

type GetEventsCountResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    EventsCount *shared.EventsCount 
    StatusCode int64 
    
}

