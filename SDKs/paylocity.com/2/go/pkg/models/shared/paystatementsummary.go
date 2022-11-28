package shared

// PayStatementSummary
// The pay statement summary model
type PayStatementSummary struct {
	AutoPay             *bool    `json:"autoPay,omitempty"`
	BeginDate           *string  `json:"beginDate,omitempty"`
	CheckDate           *string  `json:"checkDate,omitempty"`
	CheckNumber         *int64   `json:"checkNumber,omitempty"`
	DirectDepositAmount *float64 `json:"directDepositAmount,omitempty"`
	EndDate             *string  `json:"endDate,omitempty"`
	GrossPay            *float64 `json:"grossPay,omitempty"`
	Hours               *float64 `json:"hours,omitempty"`
	NetCheck            *float64 `json:"netCheck,omitempty"`
	NetPay              *float64 `json:"netPay,omitempty"`
	OvertimeDollars     *float64 `json:"overtimeDollars,omitempty"`
	OvertimeHours       *float64 `json:"overtimeHours,omitempty"`
	Process             *int64   `json:"process,omitempty"`
	RegularDollars      *float64 `json:"regularDollars,omitempty"`
	RegularHours        *float64 `json:"regularHours,omitempty"`
	TransactionNumber   *int64   `json:"transactionNumber,omitempty"`
	VoucherNumber       *int64   `json:"voucherNumber,omitempty"`
	WorkersCompCode     *string  `json:"workersCompCode,omitempty"`
	Year                *int64   `json:"year,omitempty"`
}
