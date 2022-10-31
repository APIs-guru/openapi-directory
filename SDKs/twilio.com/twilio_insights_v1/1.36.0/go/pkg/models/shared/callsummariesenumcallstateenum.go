package shared

type CallSummariesEnumCallStateEnum string

const (
	CallSummariesEnumCallStateEnumRinging   CallSummariesEnumCallStateEnum = "ringing"
	CallSummariesEnumCallStateEnumCompleted CallSummariesEnumCallStateEnum = "completed"
	CallSummariesEnumCallStateEnumBusy      CallSummariesEnumCallStateEnum = "busy"
	CallSummariesEnumCallStateEnumFail      CallSummariesEnumCallStateEnum = "fail"
	CallSummariesEnumCallStateEnumNoanswer  CallSummariesEnumCallStateEnum = "noanswer"
	CallSummariesEnumCallStateEnumCanceled  CallSummariesEnumCallStateEnum = "canceled"
	CallSummariesEnumCallStateEnumAnswered  CallSummariesEnumCallStateEnum = "answered"
	CallSummariesEnumCallStateEnumUndialed  CallSummariesEnumCallStateEnum = "undialed"
)
