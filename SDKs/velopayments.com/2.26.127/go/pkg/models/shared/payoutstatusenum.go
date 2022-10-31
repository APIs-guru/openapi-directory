package shared




type PayoutStatusEnum string

const (
    PayoutStatusEnumAccepted PayoutStatusEnum = "ACCEPTED"
PayoutStatusEnumRejected PayoutStatusEnum = "REJECTED"
PayoutStatusEnumSubmitted PayoutStatusEnum = "SUBMITTED"
PayoutStatusEnumQuoted PayoutStatusEnum = "QUOTED"
PayoutStatusEnumInstructed PayoutStatusEnum = "INSTRUCTED"
PayoutStatusEnumCompleted PayoutStatusEnum = "COMPLETED"
PayoutStatusEnumIncomplete PayoutStatusEnum = "INCOMPLETE"
PayoutStatusEnumConfirmed PayoutStatusEnum = "CONFIRMED"
PayoutStatusEnumWithdrawn PayoutStatusEnum = "WITHDRAWN"
)


