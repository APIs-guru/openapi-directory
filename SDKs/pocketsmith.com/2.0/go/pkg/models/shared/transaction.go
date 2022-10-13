package shared

type TransactionStatusEnum string

const (
	TransactionStatusEnumPending TransactionStatusEnum = "pending"
	TransactionStatusEnumPosted  TransactionStatusEnum = "posted"
)

type TransactionTypeEnum string

const (
	TransactionTypeEnumDebit  TransactionTypeEnum = "debit"
	TransactionTypeEnumCredit TransactionTypeEnum = "credit"
)

type Transaction struct {
	Amount             *float64               `json:"amount"`
	Category           *Category              `json:"category"`
	ChequeNumber       *string                `json:"cheque_number"`
	ClosingBalance     *float64               `json:"closing_balance"`
	Date               *string                `json:"date"`
	ID                 *int64                 `json:"id"`
	IsTransfer         *bool                  `json:"is_transfer"`
	Labels             []string               `json:"labels"`
	Memo               *string                `json:"memo"`
	Note               *string                `json:"note"`
	OriginalPayee      *string                `json:"original_payee"`
	Payee              *string                `json:"payee"`
	Status             *TransactionStatusEnum `json:"status"`
	TransactionAccount *TransactionAccount    `json:"transaction_account"`
	Type               *TransactionTypeEnum   `json:"type"`
	UploadSource       *string                `json:"upload_source"`
}
