package shared

type PaySchedulePaySchedulePayFrequencyPayFrequencyEnum string

const (
	PaySchedulePaySchedulePayFrequencyPayFrequencyEnumWeekly     PaySchedulePaySchedulePayFrequencyPayFrequencyEnum = "Weekly"
	PaySchedulePaySchedulePayFrequencyPayFrequencyEnumMonthly    PaySchedulePaySchedulePayFrequencyPayFrequencyEnum = "Monthly"
	PaySchedulePaySchedulePayFrequencyPayFrequencyEnumTwoWeekly  PaySchedulePaySchedulePayFrequencyPayFrequencyEnum = "TwoWeekly"
	PaySchedulePaySchedulePayFrequencyPayFrequencyEnumFourWeekly PaySchedulePaySchedulePayFrequencyPayFrequencyEnum = "FourWeekly"
	PaySchedulePaySchedulePayFrequencyPayFrequencyEnumYearly     PaySchedulePaySchedulePayFrequencyPayFrequencyEnum = "Yearly"
)

type PaySchedulePaySchedulePaySchedule struct {
	MetaData     map[string]interface{}                              `json:"MetaData"`
	Name         *string                                             `json:"Name"`
	PayFrequency *PaySchedulePaySchedulePayFrequencyPayFrequencyEnum `json:"PayFrequency"`
}

type PaySchedule struct {
	PaySchedule *PaySchedulePaySchedulePaySchedule `json:"PaySchedule"`
}
