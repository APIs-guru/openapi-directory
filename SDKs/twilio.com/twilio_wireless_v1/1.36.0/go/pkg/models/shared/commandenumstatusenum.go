package shared




type CommandEnumStatusEnum string

const (
    CommandEnumStatusEnumQueued CommandEnumStatusEnum = "queued"
CommandEnumStatusEnumSent CommandEnumStatusEnum = "sent"
CommandEnumStatusEnumDelivered CommandEnumStatusEnum = "delivered"
CommandEnumStatusEnumReceived CommandEnumStatusEnum = "received"
CommandEnumStatusEnumFailed CommandEnumStatusEnum = "failed"
)


