package shared

type SummaryEnumCallStateEnum string

const (
	SummaryEnumCallStateEnumRinging   SummaryEnumCallStateEnum = "ringing"
	SummaryEnumCallStateEnumCompleted SummaryEnumCallStateEnum = "completed"
	SummaryEnumCallStateEnumBusy      SummaryEnumCallStateEnum = "busy"
	SummaryEnumCallStateEnumFail      SummaryEnumCallStateEnum = "fail"
	SummaryEnumCallStateEnumNoanswer  SummaryEnumCallStateEnum = "noanswer"
	SummaryEnumCallStateEnumCanceled  SummaryEnumCallStateEnum = "canceled"
	SummaryEnumCallStateEnumAnswered  SummaryEnumCallStateEnum = "answered"
	SummaryEnumCallStateEnumUndialed  SummaryEnumCallStateEnum = "undialed"
)
