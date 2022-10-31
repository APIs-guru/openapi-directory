package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPaymentsForPayoutV4PathParams struct {
	PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
}

type GetPaymentsForPayoutV4StatusEnum string

const (
	GetPaymentsForPayoutV4StatusEnumAccepted             GetPaymentsForPayoutV4StatusEnum = "ACCEPTED"
	GetPaymentsForPayoutV4StatusEnumAwaitingFunds        GetPaymentsForPayoutV4StatusEnum = "AWAITING_FUNDS"
	GetPaymentsForPayoutV4StatusEnumFunded               GetPaymentsForPayoutV4StatusEnum = "FUNDED"
	GetPaymentsForPayoutV4StatusEnumUnfunded             GetPaymentsForPayoutV4StatusEnum = "UNFUNDED"
	GetPaymentsForPayoutV4StatusEnumBankPaymentRequested GetPaymentsForPayoutV4StatusEnum = "BANK_PAYMENT_REQUESTED"
	GetPaymentsForPayoutV4StatusEnumRejected             GetPaymentsForPayoutV4StatusEnum = "REJECTED"
	GetPaymentsForPayoutV4StatusEnumAcceptedByRails      GetPaymentsForPayoutV4StatusEnum = "ACCEPTED_BY_RAILS"
	GetPaymentsForPayoutV4StatusEnumConfirmed            GetPaymentsForPayoutV4StatusEnum = "CONFIRMED"
	GetPaymentsForPayoutV4StatusEnumFailed               GetPaymentsForPayoutV4StatusEnum = "FAILED"
	GetPaymentsForPayoutV4StatusEnumReturned             GetPaymentsForPayoutV4StatusEnum = "RETURNED"
	GetPaymentsForPayoutV4StatusEnumWithdrawn            GetPaymentsForPayoutV4StatusEnum = "WITHDRAWN"
)

type GetPaymentsForPayoutV4TransmissionTypeEnum string

const (
	GetPaymentsForPayoutV4TransmissionTypeEnumAch        GetPaymentsForPayoutV4TransmissionTypeEnum = "ACH"
	GetPaymentsForPayoutV4TransmissionTypeEnumSameDayAch GetPaymentsForPayoutV4TransmissionTypeEnum = "SAME_DAY_ACH"
	GetPaymentsForPayoutV4TransmissionTypeEnumWire       GetPaymentsForPayoutV4TransmissionTypeEnum = "WIRE"
)

type GetPaymentsForPayoutV4QueryParams struct {
	Page              *int32                                      `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                                      `queryParam:"style=form,explode=true,name=pageSize"`
	PaymentAmountFrom *int32                                      `queryParam:"style=form,explode=true,name=paymentAmountFrom"`
	PaymentAmountTo   *int32                                      `queryParam:"style=form,explode=true,name=paymentAmountTo"`
	RemoteID          *string                                     `queryParam:"style=form,explode=true,name=remoteId"`
	RemoteSystemID    *string                                     `queryParam:"style=form,explode=true,name=remoteSystemId"`
	Sensitive         *bool                                       `queryParam:"style=form,explode=true,name=sensitive"`
	Sort              *string                                     `queryParam:"style=form,explode=true,name=sort"`
	SourceAmountFrom  *int32                                      `queryParam:"style=form,explode=true,name=sourceAmountFrom"`
	SourceAmountTo    *int32                                      `queryParam:"style=form,explode=true,name=sourceAmountTo"`
	Status            *GetPaymentsForPayoutV4StatusEnum           `queryParam:"style=form,explode=true,name=status"`
	SubmittedDateFrom *time.Time                                  `queryParam:"style=form,explode=true,name=submittedDateFrom"`
	SubmittedDateTo   *time.Time                                  `queryParam:"style=form,explode=true,name=submittedDateTo"`
	TransmissionType  *GetPaymentsForPayoutV4TransmissionTypeEnum `queryParam:"style=form,explode=true,name=transmissionType"`
}

type GetPaymentsForPayoutV4Request struct {
	PathParams  GetPaymentsForPayoutV4PathParams
	QueryParams GetPaymentsForPayoutV4QueryParams
}

type GetPaymentsForPayoutV4Response struct {
	ContentType                    string
	GetPaymentsForPayoutResponseV4 *shared.GetPaymentsForPayoutResponseV4
	StatusCode                     int64
	InlineResponse400              *interface{}
	InlineResponse401              *interface{}
	InlineResponse403              *interface{}
	InlineResponse404              *interface{}
}
