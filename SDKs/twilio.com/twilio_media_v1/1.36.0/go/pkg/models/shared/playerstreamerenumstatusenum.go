package shared

type PlayerStreamerEnumStatusEnum string

const (
	PlayerStreamerEnumStatusEnumCreated PlayerStreamerEnumStatusEnum = "created"
	PlayerStreamerEnumStatusEnumStarted PlayerStreamerEnumStatusEnum = "started"
	PlayerStreamerEnumStatusEnumEnded   PlayerStreamerEnumStatusEnum = "ended"
	PlayerStreamerEnumStatusEnumFailed  PlayerStreamerEnumStatusEnum = "failed"
)
