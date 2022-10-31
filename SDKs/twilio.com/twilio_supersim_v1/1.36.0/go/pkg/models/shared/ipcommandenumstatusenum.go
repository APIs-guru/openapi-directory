package shared

type IPCommandEnumStatusEnum string

const (
	IPCommandEnumStatusEnumQueued   IPCommandEnumStatusEnum = "queued"
	IPCommandEnumStatusEnumSent     IPCommandEnumStatusEnum = "sent"
	IPCommandEnumStatusEnumReceived IPCommandEnumStatusEnum = "received"
	IPCommandEnumStatusEnumFailed   IPCommandEnumStatusEnum = "failed"
)
