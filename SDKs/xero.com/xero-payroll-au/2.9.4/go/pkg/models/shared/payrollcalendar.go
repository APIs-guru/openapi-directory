package shared

type PayrollCalendar struct {
	CalendarType      *CalendarTypeEnum `json:"CalendarType"`
	Name              *string           `json:"Name"`
	PaymentDate       *string           `json:"PaymentDate"`
	PayrollCalendarID *string           `json:"PayrollCalendarID"`
	StartDate         *string           `json:"StartDate"`
	UpdatedDateUtc    *string           `json:"UpdatedDateUTC"`
	ValidationErrors  []ValidationError `json:"ValidationErrors"`
}
