package shared




type PaySchedulePaySchedulePayFrequencyEnum string

const (
    PaySchedulePaySchedulePayFrequencyEnumWeekly PaySchedulePaySchedulePayFrequencyEnum = "Weekly"
PaySchedulePaySchedulePayFrequencyEnumMonthly PaySchedulePaySchedulePayFrequencyEnum = "Monthly"
PaySchedulePaySchedulePayFrequencyEnumTwoWeekly PaySchedulePaySchedulePayFrequencyEnum = "TwoWeekly"
PaySchedulePaySchedulePayFrequencyEnumFourWeekly PaySchedulePaySchedulePayFrequencyEnum = "FourWeekly"
PaySchedulePaySchedulePayFrequencyEnumYearly PaySchedulePaySchedulePayFrequencyEnum = "Yearly"
)


type PaySchedulePaySchedule struct {
    MetaData map[string]interface{} `json:"MetaData,omitempty"`
    Name *string `json:"Name,omitempty"`
    PayFrequency *PaySchedulePaySchedulePayFrequencyEnum `json:"PayFrequency,omitempty"`
    
}

type PaySchedule struct {
    PaySchedule *PaySchedulePaySchedule `json:"PaySchedule,omitempty"`
    
}

