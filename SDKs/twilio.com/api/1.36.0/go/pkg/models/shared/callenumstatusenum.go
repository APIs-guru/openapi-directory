package shared




type CallEnumStatusEnum string

const (
    CallEnumStatusEnumQueued CallEnumStatusEnum = "queued"
CallEnumStatusEnumRinging CallEnumStatusEnum = "ringing"
CallEnumStatusEnumInProgress CallEnumStatusEnum = "in-progress"
CallEnumStatusEnumCompleted CallEnumStatusEnum = "completed"
CallEnumStatusEnumBusy CallEnumStatusEnum = "busy"
CallEnumStatusEnumFailed CallEnumStatusEnum = "failed"
CallEnumStatusEnumNoAnswer CallEnumStatusEnum = "no-answer"
CallEnumStatusEnumCanceled CallEnumStatusEnum = "canceled"
)


