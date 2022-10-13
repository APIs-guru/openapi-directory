package shared

type EmployeeResponseDataAttributes struct {
	AbsenceEntitlement *AbsenceEntitlement `json:"absence_entitlement"`
	ContractEndDate    *Attribute          `json:"contract_end_date"`
	CostCenters        *CostCenters        `json:"cost_centers"`
	CreatedAt          *Attribute          `json:"created_at"`
	Department         *Department         `json:"department"`
	Email              *Attribute          `json:"email"`
	EmploymentType     *Attribute          `json:"employment_type"`
	FirstName          *Attribute          `json:"first_name"`
	FixSalary          *Attribute          `json:"fix_salary"`
	Gender             *Attribute          `json:"gender"`
	HireDate           *Attribute          `json:"hire_date"`
	HolidayCalendar    *HolidayCalendar    `json:"holiday_calendar"`
	HourlySalary       *Attribute          `json:"hourly_salary"`
	ID                 *Attribute          `json:"id"`
	LastName           *Attribute          `json:"last_name"`
	Office             *Office             `json:"office"`
	Position           *Attribute          `json:"position"`
	ProbationPeriodEnd *Attribute          `json:"probation_period_end"`
	Status             *Attribute          `json:"status"`
	Supervisor         *Supervisor         `json:"supervisor"`
	TerminationDate    *Attribute          `json:"termination_date"`
	TerminationReason  *Attribute          `json:"termination_reason"`
	TerminationType    *Attribute          `json:"termination_type"`
	VacationDayBalance *Attribute          `json:"vacation_day_balance"`
	WeeklyWorkingHours *Attribute          `json:"weekly_working_hours"`
	WorkSchedule       *WorkSchedule       `json:"work_schedule"`
}

type EmployeeResponseData struct {
	Attributes []EmployeeResponseDataAttributes `json:"attributes"`
	Type       string                           `json:"type"`
}

type EmployeeResponse struct {
	Data    EmployeeResponseData `json:"data"`
	Success bool                 `json:"success"`
}
