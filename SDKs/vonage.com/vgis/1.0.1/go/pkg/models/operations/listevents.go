package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventsDirectionEnum string

const (
	ListEventsDirectionEnumInbound  ListEventsDirectionEnum = "INBOUND"
	ListEventsDirectionEnumOutbound ListEventsDirectionEnum = "OUTBOUND"
)

type ListEventsOrderEnum string

const (
	ListEventsOrderEnumDesc ListEventsOrderEnum = "DESC"
	ListEventsOrderEnumAsc  ListEventsOrderEnum = "ASC"
)

type ListEventsStatesEnum string

const (
	ListEventsStatesEnumInitializing ListEventsStatesEnum = "INITIALIZING"
	ListEventsStatesEnumRinging      ListEventsStatesEnum = "RINGING"
	ListEventsStatesEnumActive       ListEventsStatesEnum = "ACTIVE"
	ListEventsStatesEnumHeld         ListEventsStatesEnum = "HELD"
	ListEventsStatesEnumRemoteHeld   ListEventsStatesEnum = "REMOTE_HELD"
	ListEventsStatesEnumDetached     ListEventsStatesEnum = "DETACHED"
	ListEventsStatesEnumRejected     ListEventsStatesEnum = "REJECTED"
	ListEventsStatesEnumCancelled    ListEventsStatesEnum = "CANCELLED"
	ListEventsStatesEnumAnswered     ListEventsStatesEnum = "ANSWERED"
	ListEventsStatesEnumMissed       ListEventsStatesEnum = "MISSED"
)

type ListEventsTypesEnum string

const (
	ListEventsTypesEnumCall ListEventsTypesEnum = "CALL"
)

type ListEventsQueryParams struct {
	Direction *ListEventsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	FromDate  *int64                   `queryParam:"style=form,explode=true,name=fromDate"`
	Offset    *int64                   `queryParam:"style=form,explode=true,name=offset"`
	Order     *ListEventsOrderEnum     `queryParam:"style=form,explode=true,name=order"`
	Size      *int64                   `queryParam:"style=form,explode=true,name=size"`
	Sort      *string                  `queryParam:"style=form,explode=true,name=sort"`
	States    *ListEventsStatesEnum    `queryParam:"style=form,explode=true,name=states"`
	ToDate    *int64                   `queryParam:"style=form,explode=true,name=toDate"`
	Types     *ListEventsTypesEnum     `queryParam:"style=form,explode=true,name=types"`
}

type ListEventsRequest struct {
	QueryParams ListEventsQueryParams
}

type ListEventsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Events        []shared.Event
	StatusCode    int64
}
