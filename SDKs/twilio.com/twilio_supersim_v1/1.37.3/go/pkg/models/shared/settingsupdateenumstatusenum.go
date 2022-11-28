package shared

type SettingsUpdateEnumStatusEnum string

const (
	SettingsUpdateEnumStatusEnumScheduled  SettingsUpdateEnumStatusEnum = "scheduled"
	SettingsUpdateEnumStatusEnumInProgress SettingsUpdateEnumStatusEnum = "in-progress"
	SettingsUpdateEnumStatusEnumSuccessful SettingsUpdateEnumStatusEnum = "successful"
	SettingsUpdateEnumStatusEnumFailed     SettingsUpdateEnumStatusEnum = "failed"
)
