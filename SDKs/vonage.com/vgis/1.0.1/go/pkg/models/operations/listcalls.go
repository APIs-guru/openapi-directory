package operations

import (
"openapi/pkg/models/shared")


type ListCallsDirectionEnum string

const (
    ListCallsDirectionEnumInbound ListCallsDirectionEnum = "INBOUND"
ListCallsDirectionEnumOutbound ListCallsDirectionEnum = "OUTBOUND"
)



type ListCallsOrderEnum string

const (
    ListCallsOrderEnumDesc ListCallsOrderEnum = "DESC"
ListCallsOrderEnumAsc ListCallsOrderEnum = "ASC"
)



type ListCallsStatesEnum string

const (
    ListCallsStatesEnumInitializing ListCallsStatesEnum = "INITIALIZING"
ListCallsStatesEnumRinging ListCallsStatesEnum = "RINGING"
ListCallsStatesEnumActive ListCallsStatesEnum = "ACTIVE"
ListCallsStatesEnumHeld ListCallsStatesEnum = "HELD"
ListCallsStatesEnumRemoteHeld ListCallsStatesEnum = "REMOTE_HELD"
)


type ListCallsQueryParams struct {
    Direction *ListCallsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    FromDate *int64 `queryParam:"style=form,explode=true,name=fromDate"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Order *ListCallsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Size *int64 `queryParam:"style=form,explode=true,name=size"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    States *ListCallsStatesEnum `queryParam:"style=form,explode=true,name=states"`
    ToDate *int64 `queryParam:"style=form,explode=true,name=toDate"`
    
}

type ListCallsRequest struct {
    QueryParams ListCallsQueryParams 
    
}

type ListCallsResponse struct {
    Calls []shared.Call 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

