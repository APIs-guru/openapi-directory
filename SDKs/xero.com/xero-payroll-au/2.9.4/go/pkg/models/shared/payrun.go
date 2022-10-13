package shared

type PayRun struct {
	Deductions            *float64          `json:"Deductions"`
	NetPay                *float64          `json:"NetPay"`
	PayRunID              *string           `json:"PayRunID"`
	PayRunPeriodEndDate   *string           `json:"PayRunPeriodEndDate"`
	PayRunPeriodStartDate *string           `json:"PayRunPeriodStartDate"`
	PayRunStatus          *PayRunStatusEnum `json:"PayRunStatus"`
	PaymentDate           *string           `json:"PaymentDate"`
	PayrollCalendarID     string            `json:"PayrollCalendarID"`
	PayslipMessage        *string           `json:"PayslipMessage"`
	Payslips              []PayslipSummary  `json:"Payslips"`
	Reimbursement         *float64          `json:"Reimbursement"`
	Super                 *float64          `json:"Super"`
	Tax                   *float64          `json:"Tax"`
	UpdatedDateUtc        *string           `json:"UpdatedDateUTC"`
	ValidationErrors      []ValidationError `json:"ValidationErrors"`
	Wages                 *float64          `json:"Wages"`
}
