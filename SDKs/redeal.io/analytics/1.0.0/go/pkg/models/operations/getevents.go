package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsTypeEnum string

const (
	GetEventsTypeEnumAll      GetEventsTypeEnum = "all"
	GetEventsTypeEnumClicks   GetEventsTypeEnum = "clicks"
	GetEventsTypeEnumContacts GetEventsTypeEnum = "contacts"
)

type GetEventsQueryParams struct {
	Company          *string            `queryParam:"style=form,explode=true,name=company"`
	Deal             *string            `queryParam:"style=form,explode=true,name=deal"`
	Nexttoken        *string            `queryParam:"style=form,explode=true,name=nexttoken"`
	Queryexecutionid *string            `queryParam:"style=form,explode=true,name=queryexecutionid"`
	Site             *string            `queryParam:"style=form,explode=true,name=site"`
	Type             *GetEventsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetEventsRequest struct {
	QueryParams GetEventsQueryParams
}

type GetEventsResponse struct {
	ContentType  string
	EventRecords []shared.EventRecord
	StatusCode   int64
}
