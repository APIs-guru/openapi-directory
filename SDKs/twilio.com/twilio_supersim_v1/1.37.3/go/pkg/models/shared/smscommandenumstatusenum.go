package shared

type SmsCommandEnumStatusEnum string

const (
	SmsCommandEnumStatusEnumQueued    SmsCommandEnumStatusEnum = "queued"
	SmsCommandEnumStatusEnumSent      SmsCommandEnumStatusEnum = "sent"
	SmsCommandEnumStatusEnumDelivered SmsCommandEnumStatusEnum = "delivered"
	SmsCommandEnumStatusEnumReceived  SmsCommandEnumStatusEnum = "received"
	SmsCommandEnumStatusEnumFailed    SmsCommandEnumStatusEnum = "failed"
)
