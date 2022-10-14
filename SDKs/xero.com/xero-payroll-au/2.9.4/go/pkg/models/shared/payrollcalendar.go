package shared

type PayrollCalendar struct {
	CalendarType      *CalendarTypeEnum `json:"CalendarType,omitempty"`
	Name              *string           `json:"Name,omitempty"`
	PaymentDate       *string           `json:"PaymentDate,omitempty"`
	PayrollCalendarID *string           `json:"PayrollCalendarID,omitempty"`
	StartDate         *string           `json:"StartDate,omitempty"`
	UpdatedDateUtc    *string           `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors  []ValidationError `json:"ValidationErrors,omitempty"`
}
