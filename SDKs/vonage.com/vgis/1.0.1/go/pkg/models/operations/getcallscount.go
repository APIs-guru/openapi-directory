package operations

import (
	"openapi/pkg/models/shared"
)

type GetCallsCountDirectionEnum string

const (
	GetCallsCountDirectionEnumInbound  GetCallsCountDirectionEnum = "INBOUND"
	GetCallsCountDirectionEnumOutbound GetCallsCountDirectionEnum = "OUTBOUND"
)

type GetCallsCountStatesEnum string

const (
	GetCallsCountStatesEnumInitializing GetCallsCountStatesEnum = "INITIALIZING"
	GetCallsCountStatesEnumRinging      GetCallsCountStatesEnum = "RINGING"
	GetCallsCountStatesEnumActive       GetCallsCountStatesEnum = "ACTIVE"
	GetCallsCountStatesEnumHeld         GetCallsCountStatesEnum = "HELD"
	GetCallsCountStatesEnumRemoteHeld   GetCallsCountStatesEnum = "REMOTE_HELD"
)

type GetCallsCountQueryParams struct {
	Direction *GetCallsCountDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	FromDate  *int64                      `queryParam:"style=form,explode=true,name=fromDate"`
	States    *GetCallsCountStatesEnum    `queryParam:"style=form,explode=true,name=states"`
	ToDate    *int64                      `queryParam:"style=form,explode=true,name=toDate"`
}

type GetCallsCountRequest struct {
	QueryParams GetCallsCountQueryParams
}

type GetCallsCountResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	EventsCount   *shared.EventsCount
	StatusCode    int64
}
