package shared

type PlayerStreamerEnumEndedReasonEnum string

const (
	PlayerStreamerEnumEndedReasonEnumEndedViaAPI                PlayerStreamerEnumEndedReasonEnum = "ended-via-api"
	PlayerStreamerEnumEndedReasonEnumMaxDurationExceeded        PlayerStreamerEnumEndedReasonEnum = "max-duration-exceeded"
	PlayerStreamerEnumEndedReasonEnumStreamDisconnectedBySource PlayerStreamerEnumEndedReasonEnum = "stream-disconnected-by-source"
	PlayerStreamerEnumEndedReasonEnumUnexpectedFailure          PlayerStreamerEnumEndedReasonEnum = "unexpected-failure"
)
