package shared

type PayStatementDetails struct {
	Amount               *float64 `json:"amount"`
	CheckDate            *string  `json:"checkDate"`
	Det                  *string  `json:"det"`
	DetCode              *string  `json:"detCode"`
	DetType              *string  `json:"detType"`
	EligibleCompensation *float64 `json:"eligibleCompensation"`
	Hours                *float64 `json:"hours"`
	Rate                 *float64 `json:"rate"`
	TransactionNumber    *int64   `json:"transactionNumber"`
	TransactionType      *string  `json:"transactionType"`
	Year                 *int64   `json:"year"`
}
