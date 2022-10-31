package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPaymentsAuditV3StatusEnum string

const (
	ListPaymentsAuditV3StatusEnumAccepted             ListPaymentsAuditV3StatusEnum = "ACCEPTED"
	ListPaymentsAuditV3StatusEnumAwaitingFunds        ListPaymentsAuditV3StatusEnum = "AWAITING_FUNDS"
	ListPaymentsAuditV3StatusEnumFunded               ListPaymentsAuditV3StatusEnum = "FUNDED"
	ListPaymentsAuditV3StatusEnumUnfunded             ListPaymentsAuditV3StatusEnum = "UNFUNDED"
	ListPaymentsAuditV3StatusEnumBankPaymentRequested ListPaymentsAuditV3StatusEnum = "BANK_PAYMENT_REQUESTED"
	ListPaymentsAuditV3StatusEnumRejected             ListPaymentsAuditV3StatusEnum = "REJECTED"
	ListPaymentsAuditV3StatusEnumAcceptedByRails      ListPaymentsAuditV3StatusEnum = "ACCEPTED_BY_RAILS"
	ListPaymentsAuditV3StatusEnumConfirmed            ListPaymentsAuditV3StatusEnum = "CONFIRMED"
	ListPaymentsAuditV3StatusEnumFailed               ListPaymentsAuditV3StatusEnum = "FAILED"
	ListPaymentsAuditV3StatusEnumReturned             ListPaymentsAuditV3StatusEnum = "RETURNED"
	ListPaymentsAuditV3StatusEnumWithdrawn            ListPaymentsAuditV3StatusEnum = "WITHDRAWN"
)

type ListPaymentsAuditV3QueryParams struct {
	Page              *int32                         `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                         `queryParam:"style=form,explode=true,name=pageSize"`
	PayeeID           *string                        `queryParam:"style=form,explode=true,name=payeeId"`
	PaymentAmountFrom *int32                         `queryParam:"style=form,explode=true,name=paymentAmountFrom"`
	PaymentAmountTo   *int32                         `queryParam:"style=form,explode=true,name=paymentAmountTo"`
	PaymentCurrency   *string                        `queryParam:"style=form,explode=true,name=paymentCurrency"`
	PaymentMemo       *string                        `queryParam:"style=form,explode=true,name=paymentMemo"`
	PayorID           *string                        `queryParam:"style=form,explode=true,name=payorId"`
	PayorName         *string                        `queryParam:"style=form,explode=true,name=payorName"`
	RemoteID          *string                        `queryParam:"style=form,explode=true,name=remoteId"`
	Sensitive         *bool                          `queryParam:"style=form,explode=true,name=sensitive"`
	Sort              *string                        `queryParam:"style=form,explode=true,name=sort"`
	SourceAccountName *string                        `queryParam:"style=form,explode=true,name=sourceAccountName"`
	SourceAmountFrom  *int32                         `queryParam:"style=form,explode=true,name=sourceAmountFrom"`
	SourceAmountTo    *int32                         `queryParam:"style=form,explode=true,name=sourceAmountTo"`
	SourceCurrency    *string                        `queryParam:"style=form,explode=true,name=sourceCurrency"`
	Status            *ListPaymentsAuditV3StatusEnum `queryParam:"style=form,explode=true,name=status"`
	SubmittedDateFrom *time.Time                     `queryParam:"style=form,explode=true,name=submittedDateFrom"`
	SubmittedDateTo   *time.Time                     `queryParam:"style=form,explode=true,name=submittedDateTo"`
}

type ListPaymentsAuditV3Request struct {
	QueryParams ListPaymentsAuditV3QueryParams
}

type ListPaymentsAuditV3Response struct {
	ContentType            string
	ListPaymentsResponseV3 *shared.ListPaymentsResponseV3
	StatusCode             int64
	InlineResponse400      *interface{}
	InlineResponse401      *interface{}
	InlineResponse403      *interface{}
}
