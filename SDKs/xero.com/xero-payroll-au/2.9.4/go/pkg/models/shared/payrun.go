package shared

type PayRun struct {
	Deductions            *float64          `json:"Deductions,omitempty"`
	NetPay                *float64          `json:"NetPay,omitempty"`
	PayRunID              *string           `json:"PayRunID,omitempty"`
	PayRunPeriodEndDate   *string           `json:"PayRunPeriodEndDate,omitempty"`
	PayRunPeriodStartDate *string           `json:"PayRunPeriodStartDate,omitempty"`
	PayRunStatus          *PayRunStatusEnum `json:"PayRunStatus,omitempty"`
	PaymentDate           *string           `json:"PaymentDate,omitempty"`
	PayrollCalendarID     string            `json:"PayrollCalendarID"`
	PayslipMessage        *string           `json:"PayslipMessage,omitempty"`
	Payslips              []PayslipSummary  `json:"Payslips,omitempty"`
	Reimbursement         *float64          `json:"Reimbursement,omitempty"`
	Super                 *float64          `json:"Super,omitempty"`
	Tax                   *float64          `json:"Tax,omitempty"`
	UpdatedDateUtc        *string           `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors      []ValidationError `json:"ValidationErrors,omitempty"`
	Wages                 *float64          `json:"Wages,omitempty"`
}
