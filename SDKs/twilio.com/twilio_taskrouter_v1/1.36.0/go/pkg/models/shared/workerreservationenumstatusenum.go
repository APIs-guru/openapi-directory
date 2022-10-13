package shared

type WorkerReservationEnumStatusEnum string

const (
	WorkerReservationEnumStatusEnumPending   WorkerReservationEnumStatusEnum = "pending"
	WorkerReservationEnumStatusEnumAccepted  WorkerReservationEnumStatusEnum = "accepted"
	WorkerReservationEnumStatusEnumRejected  WorkerReservationEnumStatusEnum = "rejected"
	WorkerReservationEnumStatusEnumTimeout   WorkerReservationEnumStatusEnum = "timeout"
	WorkerReservationEnumStatusEnumCanceled  WorkerReservationEnumStatusEnum = "canceled"
	WorkerReservationEnumStatusEnumRescinded WorkerReservationEnumStatusEnum = "rescinded"
	WorkerReservationEnumStatusEnumWrapping  WorkerReservationEnumStatusEnum = "wrapping"
	WorkerReservationEnumStatusEnumCompleted WorkerReservationEnumStatusEnum = "completed"
)
