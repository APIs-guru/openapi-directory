package shared

type PayoutStatusV3Enum string

const (
	PayoutStatusV3EnumAccepted   PayoutStatusV3Enum = "ACCEPTED"
	PayoutStatusV3EnumRejected   PayoutStatusV3Enum = "REJECTED"
	PayoutStatusV3EnumSubmitted  PayoutStatusV3Enum = "SUBMITTED"
	PayoutStatusV3EnumQuoted     PayoutStatusV3Enum = "QUOTED"
	PayoutStatusV3EnumInstructed PayoutStatusV3Enum = "INSTRUCTED"
	PayoutStatusV3EnumCompleted  PayoutStatusV3Enum = "COMPLETED"
	PayoutStatusV3EnumIncomplete PayoutStatusV3Enum = "INCOMPLETE"
	PayoutStatusV3EnumConfirmed  PayoutStatusV3Enum = "CONFIRMED"
	PayoutStatusV3EnumWithdrawn  PayoutStatusV3Enum = "WITHDRAWN"
)
