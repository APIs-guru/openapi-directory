package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPaymentsAuditV4StatusEnum string

const (
	ListPaymentsAuditV4StatusEnumAccepted             ListPaymentsAuditV4StatusEnum = "ACCEPTED"
	ListPaymentsAuditV4StatusEnumAwaitingFunds        ListPaymentsAuditV4StatusEnum = "AWAITING_FUNDS"
	ListPaymentsAuditV4StatusEnumFunded               ListPaymentsAuditV4StatusEnum = "FUNDED"
	ListPaymentsAuditV4StatusEnumUnfunded             ListPaymentsAuditV4StatusEnum = "UNFUNDED"
	ListPaymentsAuditV4StatusEnumBankPaymentRequested ListPaymentsAuditV4StatusEnum = "BANK_PAYMENT_REQUESTED"
	ListPaymentsAuditV4StatusEnumRejected             ListPaymentsAuditV4StatusEnum = "REJECTED"
	ListPaymentsAuditV4StatusEnumAcceptedByRails      ListPaymentsAuditV4StatusEnum = "ACCEPTED_BY_RAILS"
	ListPaymentsAuditV4StatusEnumConfirmed            ListPaymentsAuditV4StatusEnum = "CONFIRMED"
	ListPaymentsAuditV4StatusEnumFailed               ListPaymentsAuditV4StatusEnum = "FAILED"
	ListPaymentsAuditV4StatusEnumReturned             ListPaymentsAuditV4StatusEnum = "RETURNED"
	ListPaymentsAuditV4StatusEnumWithdrawn            ListPaymentsAuditV4StatusEnum = "WITHDRAWN"
)

type ListPaymentsAuditV4TransmissionTypeEnum string

const (
	ListPaymentsAuditV4TransmissionTypeEnumAch        ListPaymentsAuditV4TransmissionTypeEnum = "ACH"
	ListPaymentsAuditV4TransmissionTypeEnumSameDayAch ListPaymentsAuditV4TransmissionTypeEnum = "SAME_DAY_ACH"
	ListPaymentsAuditV4TransmissionTypeEnumWire       ListPaymentsAuditV4TransmissionTypeEnum = "WIRE"
)

type ListPaymentsAuditV4QueryParams struct {
	Page              *int32                                   `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                                   `queryParam:"style=form,explode=true,name=pageSize"`
	PayeeID           *string                                  `queryParam:"style=form,explode=true,name=payeeId"`
	PaymentAmountFrom *int32                                   `queryParam:"style=form,explode=true,name=paymentAmountFrom"`
	PaymentAmountTo   *int32                                   `queryParam:"style=form,explode=true,name=paymentAmountTo"`
	PaymentCurrency   *string                                  `queryParam:"style=form,explode=true,name=paymentCurrency"`
	PaymentMemo       *string                                  `queryParam:"style=form,explode=true,name=paymentMemo"`
	PayorID           *string                                  `queryParam:"style=form,explode=true,name=payorId"`
	PayorName         *string                                  `queryParam:"style=form,explode=true,name=payorName"`
	RemoteID          *string                                  `queryParam:"style=form,explode=true,name=remoteId"`
	RemoteSystemID    *string                                  `queryParam:"style=form,explode=true,name=remoteSystemId"`
	Sensitive         *bool                                    `queryParam:"style=form,explode=true,name=sensitive"`
	Sort              *string                                  `queryParam:"style=form,explode=true,name=sort"`
	SourceAccountName *string                                  `queryParam:"style=form,explode=true,name=sourceAccountName"`
	SourceAmountFrom  *int32                                   `queryParam:"style=form,explode=true,name=sourceAmountFrom"`
	SourceAmountTo    *int32                                   `queryParam:"style=form,explode=true,name=sourceAmountTo"`
	SourceCurrency    *string                                  `queryParam:"style=form,explode=true,name=sourceCurrency"`
	Status            *ListPaymentsAuditV4StatusEnum           `queryParam:"style=form,explode=true,name=status"`
	SubmittedDateFrom *time.Time                               `queryParam:"style=form,explode=true,name=submittedDateFrom"`
	SubmittedDateTo   *time.Time                               `queryParam:"style=form,explode=true,name=submittedDateTo"`
	TransmissionType  *ListPaymentsAuditV4TransmissionTypeEnum `queryParam:"style=form,explode=true,name=transmissionType"`
}

type ListPaymentsAuditV4Request struct {
	QueryParams ListPaymentsAuditV4QueryParams
}

type ListPaymentsAuditV4Response struct {
	ContentType            string
	ListPaymentsResponseV4 *shared.ListPaymentsResponseV4
	StatusCode             int64
	InlineResponse400      *interface{}
	InlineResponse401      *interface{}
	InlineResponse403      *interface{}
}
