package shared




type TransactionStatusEnum string

const (
    TransactionStatusEnumPending TransactionStatusEnum = "pending"
TransactionStatusEnumPosted TransactionStatusEnum = "posted"
)



type TransactionTypeEnum string

const (
    TransactionTypeEnumDebit TransactionTypeEnum = "debit"
TransactionTypeEnumCredit TransactionTypeEnum = "credit"
)


type Transaction struct {
    Amount *float64 `json:"amount,omitempty"`
    Category *Category `json:"category,omitempty"`
    ChequeNumber *string `json:"cheque_number,omitempty"`
    ClosingBalance *float64 `json:"closing_balance,omitempty"`
    Date *string `json:"date,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsTransfer *bool `json:"is_transfer,omitempty"`
    Labels []string `json:"labels,omitempty"`
    Memo *string `json:"memo,omitempty"`
    Note *string `json:"note,omitempty"`
    OriginalPayee *string `json:"original_payee,omitempty"`
    Payee *string `json:"payee,omitempty"`
    Status *TransactionStatusEnum `json:"status,omitempty"`
    TransactionAccount *TransactionAccount `json:"transaction_account,omitempty"`
    Type *TransactionTypeEnum `json:"type,omitempty"`
    UploadSource *string `json:"upload_source,omitempty"`
    
}

