package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPayoutsForPayorV4StatusEnum string

const (
	GetPayoutsForPayorV4StatusEnumAccepted   GetPayoutsForPayorV4StatusEnum = "ACCEPTED"
	GetPayoutsForPayorV4StatusEnumRejected   GetPayoutsForPayorV4StatusEnum = "REJECTED"
	GetPayoutsForPayorV4StatusEnumSubmitted  GetPayoutsForPayorV4StatusEnum = "SUBMITTED"
	GetPayoutsForPayorV4StatusEnumQuoted     GetPayoutsForPayorV4StatusEnum = "QUOTED"
	GetPayoutsForPayorV4StatusEnumInstructed GetPayoutsForPayorV4StatusEnum = "INSTRUCTED"
	GetPayoutsForPayorV4StatusEnumCompleted  GetPayoutsForPayorV4StatusEnum = "COMPLETED"
	GetPayoutsForPayorV4StatusEnumIncomplete GetPayoutsForPayorV4StatusEnum = "INCOMPLETE"
	GetPayoutsForPayorV4StatusEnumConfirmed  GetPayoutsForPayorV4StatusEnum = "CONFIRMED"
	GetPayoutsForPayorV4StatusEnumWithdrawn  GetPayoutsForPayorV4StatusEnum = "WITHDRAWN"
)

type GetPayoutsForPayorV4QueryParams struct {
	FromPayorName     *string                         `queryParam:"style=form,explode=true,name=fromPayorName"`
	Page              *int32                          `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                          `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID           *string                         `queryParam:"style=form,explode=true,name=payorId"`
	PayoutMemo        *string                         `queryParam:"style=form,explode=true,name=payoutMemo"`
	Sort              *string                         `queryParam:"style=form,explode=true,name=sort"`
	Status            *GetPayoutsForPayorV4StatusEnum `queryParam:"style=form,explode=true,name=status"`
	SubmittedDateFrom *time.Time                      `queryParam:"style=form,explode=true,name=submittedDateFrom"`
	SubmittedDateTo   *time.Time                      `queryParam:"style=form,explode=true,name=submittedDateTo"`
}

type GetPayoutsForPayorV4Request struct {
	QueryParams GetPayoutsForPayorV4QueryParams
}

type GetPayoutsForPayorV4Response struct {
	ContentType        string
	GetPayoutsResponse *shared.GetPayoutsResponse
	StatusCode         int64
	InlineResponse400  *interface{}
	InlineResponse401  *interface{}
	InlineResponse403  *interface{}
	InlineResponse404  *interface{}
}
