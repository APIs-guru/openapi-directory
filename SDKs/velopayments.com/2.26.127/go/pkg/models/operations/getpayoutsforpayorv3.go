package operations

import (
"time"
"openapi/pkg/models/shared")


type GetPayoutsForPayorV3StatusEnum string

const (
    GetPayoutsForPayorV3StatusEnumAccepted GetPayoutsForPayorV3StatusEnum = "ACCEPTED"
GetPayoutsForPayorV3StatusEnumRejected GetPayoutsForPayorV3StatusEnum = "REJECTED"
GetPayoutsForPayorV3StatusEnumSubmitted GetPayoutsForPayorV3StatusEnum = "SUBMITTED"
GetPayoutsForPayorV3StatusEnumQuoted GetPayoutsForPayorV3StatusEnum = "QUOTED"
GetPayoutsForPayorV3StatusEnumInstructed GetPayoutsForPayorV3StatusEnum = "INSTRUCTED"
GetPayoutsForPayorV3StatusEnumCompleted GetPayoutsForPayorV3StatusEnum = "COMPLETED"
GetPayoutsForPayorV3StatusEnumIncomplete GetPayoutsForPayorV3StatusEnum = "INCOMPLETE"
GetPayoutsForPayorV3StatusEnumConfirmed GetPayoutsForPayorV3StatusEnum = "CONFIRMED"
GetPayoutsForPayorV3StatusEnumWithdrawn GetPayoutsForPayorV3StatusEnum = "WITHDRAWN"
)


type GetPayoutsForPayorV3QueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    PayorID string `queryParam:"style=form,explode=true,name=payorId"`
    PayoutMemo *string `queryParam:"style=form,explode=true,name=payoutMemo"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Status *GetPayoutsForPayorV3StatusEnum `queryParam:"style=form,explode=true,name=status"`
    SubmittedDateFrom *time.Time `queryParam:"style=form,explode=true,name=submittedDateFrom"`
    SubmittedDateTo *time.Time `queryParam:"style=form,explode=true,name=submittedDateTo"`
    
}

type GetPayoutsForPayorV3Request struct {
    QueryParams GetPayoutsForPayorV3QueryParams 
    
}

type GetPayoutsForPayorV3Response struct {
    ContentType string 
    GetPayoutsResponseV3 *shared.GetPayoutsResponseV3 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

