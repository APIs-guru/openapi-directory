package shared

type EmployeesResponseDataAttributes struct {
	AbsenceEntitlement *AbsenceEntitlement `json:"absence_entitlement,omitempty"`
	ContractEndDate    *Attribute          `json:"contract_end_date,omitempty"`
	CostCenters        *CostCenters        `json:"cost_centers,omitempty"`
	CreatedAt          *Attribute          `json:"created_at,omitempty"`
	Department         *Department         `json:"department,omitempty"`
	Email              *Attribute          `json:"email,omitempty"`
	EmploymentType     *Attribute          `json:"employment_type,omitempty"`
	FirstName          *Attribute          `json:"first_name,omitempty"`
	FixSalary          *Attribute          `json:"fix_salary,omitempty"`
	Gender             *Attribute          `json:"gender,omitempty"`
	HireDate           *Attribute          `json:"hire_date,omitempty"`
	HolidayCalendar    *HolidayCalendar    `json:"holiday_calendar,omitempty"`
	HourlySalary       *Attribute          `json:"hourly_salary,omitempty"`
	ID                 *Attribute          `json:"id,omitempty"`
	LastName           *Attribute          `json:"last_name,omitempty"`
	Office             *Office             `json:"office,omitempty"`
	Position           *Attribute          `json:"position,omitempty"`
	ProbationPeriodEnd *Attribute          `json:"probation_period_end,omitempty"`
	Status             *Attribute          `json:"status,omitempty"`
	Supervisor         *Supervisor         `json:"supervisor,omitempty"`
	TerminationDate    *Attribute          `json:"termination_date,omitempty"`
	TerminationReason  *Attribute          `json:"termination_reason,omitempty"`
	TerminationType    *Attribute          `json:"termination_type,omitempty"`
	VacationDayBalance *Attribute          `json:"vacation_day_balance,omitempty"`
	WeeklyWorkingHours *Attribute          `json:"weekly_working_hours,omitempty"`
	WorkSchedule       *WorkSchedule       `json:"work_schedule,omitempty"`
}

type EmployeesResponseData struct {
	Attributes []EmployeesResponseDataAttributes `json:"attributes"`
	Type       string                            `json:"type"`
}

type EmployeesResponse struct {
	Data    []EmployeesResponseData `json:"data"`
	Success bool                    `json:"success"`
}
