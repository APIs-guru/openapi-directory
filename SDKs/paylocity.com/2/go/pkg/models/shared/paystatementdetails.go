package shared



type PayStatementDetails struct {
    Amount *float64 `json:"amount,omitempty"`
    CheckDate *string `json:"checkDate,omitempty"`
    Det *string `json:"det,omitempty"`
    DetCode *string `json:"detCode,omitempty"`
    DetType *string `json:"detType,omitempty"`
    EligibleCompensation *float64 `json:"eligibleCompensation,omitempty"`
    Hours *float64 `json:"hours,omitempty"`
    Rate *float64 `json:"rate,omitempty"`
    TransactionNumber *int64 `json:"transactionNumber,omitempty"`
    TransactionType *string `json:"transactionType,omitempty"`
    Year *int64 `json:"year,omitempty"`
    
}

