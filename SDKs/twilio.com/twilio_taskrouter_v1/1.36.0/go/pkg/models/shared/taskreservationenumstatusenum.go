package shared




type TaskReservationEnumStatusEnum string

const (
    TaskReservationEnumStatusEnumPending TaskReservationEnumStatusEnum = "pending"
TaskReservationEnumStatusEnumAccepted TaskReservationEnumStatusEnum = "accepted"
TaskReservationEnumStatusEnumRejected TaskReservationEnumStatusEnum = "rejected"
TaskReservationEnumStatusEnumTimeout TaskReservationEnumStatusEnum = "timeout"
TaskReservationEnumStatusEnumCanceled TaskReservationEnumStatusEnum = "canceled"
TaskReservationEnumStatusEnumRescinded TaskReservationEnumStatusEnum = "rescinded"
TaskReservationEnumStatusEnumWrapping TaskReservationEnumStatusEnum = "wrapping"
TaskReservationEnumStatusEnumCompleted TaskReservationEnumStatusEnum = "completed"
)


