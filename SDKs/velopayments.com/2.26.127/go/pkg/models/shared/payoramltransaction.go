package shared

import (
	"time"
)

type PayorAmlTransaction struct {
	Credit                *int64
	CreditCurrency        *string
	DateFundingRequested  *string
	Debit                 *int64
	DebitCurrency         *string
	FundingType           *string
	FxApplied             *float64
	PayeeEmail            *string
	PayeeName             *string
	PayeeType             *string
	PaymentAmount         *int64
	PaymentCurrency       *string
	PaymentMemo           *string
	PaymentRails          *string
	PaymentStatus         *string
	PayorPaymentID        *string
	RejectReason          *string
	RemoteID              *string
	ReportTransactionType *string
	ReturnCode            *string
	ReturnDescription     *string
	ReturnFee             *string
	ReturnFeeCurrency     *string
	ReturnFeeDescription  *string
	SourceAccount         *string
	TransactionDate       *time.Time
	TransactionTime       *string
}
