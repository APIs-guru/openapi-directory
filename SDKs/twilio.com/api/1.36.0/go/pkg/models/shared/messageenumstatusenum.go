package shared




type MessageEnumStatusEnum string

const (
    MessageEnumStatusEnumQueued MessageEnumStatusEnum = "queued"
MessageEnumStatusEnumSending MessageEnumStatusEnum = "sending"
MessageEnumStatusEnumSent MessageEnumStatusEnum = "sent"
MessageEnumStatusEnumFailed MessageEnumStatusEnum = "failed"
MessageEnumStatusEnumDelivered MessageEnumStatusEnum = "delivered"
MessageEnumStatusEnumUndelivered MessageEnumStatusEnum = "undelivered"
MessageEnumStatusEnumReceiving MessageEnumStatusEnum = "receiving"
MessageEnumStatusEnumReceived MessageEnumStatusEnum = "received"
MessageEnumStatusEnumAccepted MessageEnumStatusEnum = "accepted"
MessageEnumStatusEnumScheduled MessageEnumStatusEnum = "scheduled"
MessageEnumStatusEnumRead MessageEnumStatusEnum = "read"
MessageEnumStatusEnumPartiallyDelivered MessageEnumStatusEnum = "partially_delivered"
MessageEnumStatusEnumCanceled MessageEnumStatusEnum = "canceled"
)


