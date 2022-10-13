package shared

type AbsencePeriodsResponseDataAttributesCertificate struct {
	Status *string `json:"status"`
}

type AbsencePeriodsResponseDataAttributesEmployeeAttributes struct {
	Email     *string `json:"email"`
	FirstName *string `json:"first_name"`
	ID        *int64  `json:"id"`
	LastName  *string `json:"last_name"`
}

type AbsencePeriodsResponseDataAttributesEmployee struct {
	Attributes []AbsencePeriodsResponseDataAttributesEmployeeAttributes `json:"attributes"`
	Type       *string                                                  `json:"type"`
}

type AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
}

type AbsencePeriodsResponseDataAttributesTimeOffType struct {
	Attributes []AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes `json:"attributes"`
	Type       *string                                                     `json:"type"`
}

type AbsencePeriodsResponseDataAttributes struct {
	Certificate  *AbsencePeriodsResponseDataAttributesCertificate `json:"certificate"`
	CreatedAt    *string                                          `json:"created_at"`
	DaysCount    *float64                                         `json:"days_count"`
	Employee     *AbsencePeriodsResponseDataAttributesEmployee    `json:"employee"`
	EndDate      *string                                          `json:"end_date"`
	HalfDayEnd   *float64                                         `json:"half_day_end"`
	HalfDayStart *float64                                         `json:"half_day_start"`
	ID           *int64                                           `json:"id"`
	StartDate    *string                                          `json:"start_date"`
	Status       *string                                          `json:"status"`
	TimeOffType  *AbsencePeriodsResponseDataAttributesTimeOffType `json:"time_off_type"`
}

type AbsencePeriodsResponseData struct {
	Attributes []AbsencePeriodsResponseDataAttributes `json:"attributes"`
	Type       string                                 `json:"type"`
}

type AbsencePeriodsResponse struct {
	Data    AbsencePeriodsResponseData `json:"data"`
	Success bool                       `json:"success"`
}
