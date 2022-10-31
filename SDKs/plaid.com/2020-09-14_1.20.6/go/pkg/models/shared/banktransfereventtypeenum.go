package shared




type BankTransferEventTypeEnum string

const (
    BankTransferEventTypeEnumPending BankTransferEventTypeEnum = "pending"
BankTransferEventTypeEnumCancelled BankTransferEventTypeEnum = "cancelled"
BankTransferEventTypeEnumFailed BankTransferEventTypeEnum = "failed"
BankTransferEventTypeEnumPosted BankTransferEventTypeEnum = "posted"
BankTransferEventTypeEnumReversed BankTransferEventTypeEnum = "reversed"
BankTransferEventTypeEnumReceiverPending BankTransferEventTypeEnum = "receiver_pending"
BankTransferEventTypeEnumReceiverPosted BankTransferEventTypeEnum = "receiver_posted"
)


