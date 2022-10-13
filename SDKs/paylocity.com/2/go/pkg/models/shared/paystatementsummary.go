package shared

type PayStatementSummary struct {
	AutoPay             *bool    `json:"autoPay"`
	BeginDate           *string  `json:"beginDate"`
	CheckDate           *string  `json:"checkDate"`
	CheckNumber         *int64   `json:"checkNumber"`
	DirectDepositAmount *float64 `json:"directDepositAmount"`
	EndDate             *string  `json:"endDate"`
	GrossPay            *float64 `json:"grossPay"`
	Hours               *float64 `json:"hours"`
	NetCheck            *float64 `json:"netCheck"`
	NetPay              *float64 `json:"netPay"`
	OvertimeDollars     *float64 `json:"overtimeDollars"`
	OvertimeHours       *float64 `json:"overtimeHours"`
	Process             *int64   `json:"process"`
	RegularDollars      *float64 `json:"regularDollars"`
	RegularHours        *float64 `json:"regularHours"`
	TransactionNumber   *int64   `json:"transactionNumber"`
	VoucherNumber       *int64   `json:"voucherNumber"`
	WorkersCompCode     *string  `json:"workersCompCode"`
	Year                *int64   `json:"year"`
}
