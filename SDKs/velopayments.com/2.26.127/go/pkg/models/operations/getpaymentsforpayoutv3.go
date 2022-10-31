package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentsForPayoutV3PathParams struct {
	PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
}

type GetPaymentsForPayoutV3StatusEnum string

const (
	GetPaymentsForPayoutV3StatusEnumAccepted     GetPaymentsForPayoutV3StatusEnum = "ACCEPTED"
	GetPaymentsForPayoutV3StatusEnumRejected     GetPaymentsForPayoutV3StatusEnum = "REJECTED"
	GetPaymentsForPayoutV3StatusEnumWithdrawn    GetPaymentsForPayoutV3StatusEnum = "WITHDRAWN"
	GetPaymentsForPayoutV3StatusEnumWithdrawable GetPaymentsForPayoutV3StatusEnum = "WITHDRAWABLE"
)

type GetPaymentsForPayoutV3TransmissionTypeEnum string

const (
	GetPaymentsForPayoutV3TransmissionTypeEnumAch        GetPaymentsForPayoutV3TransmissionTypeEnum = "ACH"
	GetPaymentsForPayoutV3TransmissionTypeEnumSameDayAch GetPaymentsForPayoutV3TransmissionTypeEnum = "SAME_DAY_ACH"
	GetPaymentsForPayoutV3TransmissionTypeEnumWire       GetPaymentsForPayoutV3TransmissionTypeEnum = "WIRE"
)

type GetPaymentsForPayoutV3QueryParams struct {
	Page              *int32                                      `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                                      `queryParam:"style=form,explode=true,name=pageSize"`
	PaymentMemo       *string                                     `queryParam:"style=form,explode=true,name=paymentMemo"`
	PayorPaymentID    *string                                     `queryParam:"style=form,explode=true,name=payorPaymentId"`
	RemoteID          *string                                     `queryParam:"style=form,explode=true,name=remoteId"`
	SourceAccountName *string                                     `queryParam:"style=form,explode=true,name=sourceAccountName"`
	Status            *GetPaymentsForPayoutV3StatusEnum           `queryParam:"style=form,explode=true,name=status"`
	TransmissionType  *GetPaymentsForPayoutV3TransmissionTypeEnum `queryParam:"style=form,explode=true,name=transmissionType"`
}

type GetPaymentsForPayoutV3Request struct {
	PathParams  GetPaymentsForPayoutV3PathParams
	QueryParams GetPaymentsForPayoutV3QueryParams
}

type GetPaymentsForPayoutV3Response struct {
	ContentType             string
	PagedPaymentsResponseV3 *shared.PagedPaymentsResponseV3
	StatusCode              int64
	InlineResponse404       *interface{}
}
