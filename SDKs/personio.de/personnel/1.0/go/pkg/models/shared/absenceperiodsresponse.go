package shared

type AbsencePeriodsResponseDataAttributesCertificate struct {
	Status *string `json:"status,omitempty"`
}

type AbsencePeriodsResponseDataAttributesEmployeeAttributes struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
}

type AbsencePeriodsResponseDataAttributesEmployee struct {
	Attributes []AbsencePeriodsResponseDataAttributesEmployeeAttributes `json:"attributes,omitempty"`
	Type       *string                                                  `json:"type,omitempty"`
}

type AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type AbsencePeriodsResponseDataAttributesTimeOffType struct {
	Attributes []AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes `json:"attributes,omitempty"`
	Type       *string                                                     `json:"type,omitempty"`
}

type AbsencePeriodsResponseDataAttributes struct {
	Certificate  *AbsencePeriodsResponseDataAttributesCertificate `json:"certificate,omitempty"`
	CreatedAt    *string                                          `json:"created_at,omitempty"`
	DaysCount    *float64                                         `json:"days_count,omitempty"`
	Employee     *AbsencePeriodsResponseDataAttributesEmployee    `json:"employee,omitempty"`
	EndDate      *string                                          `json:"end_date,omitempty"`
	HalfDayEnd   *float64                                         `json:"half_day_end,omitempty"`
	HalfDayStart *float64                                         `json:"half_day_start,omitempty"`
	ID           *int64                                           `json:"id,omitempty"`
	StartDate    *string                                          `json:"start_date,omitempty"`
	Status       *string                                          `json:"status,omitempty"`
	TimeOffType  *AbsencePeriodsResponseDataAttributesTimeOffType `json:"time_off_type,omitempty"`
}

type AbsencePeriodsResponseData struct {
	Attributes []AbsencePeriodsResponseDataAttributes `json:"attributes"`
	Type       string                                 `json:"type"`
}

type AbsencePeriodsResponse struct {
	Data    AbsencePeriodsResponseData `json:"data"`
	Success bool                       `json:"success"`
}
