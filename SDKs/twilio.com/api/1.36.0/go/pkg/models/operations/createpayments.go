package operations

import (
	"openapi/pkg/models/shared"
)

var CreatePaymentsServers = []string{
	"https://api.twilio.com",
}

type CreatePaymentsPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type CreatePaymentsRequestBodyCreatePaymentsRequest struct {
	BankAccountType     *shared.PaymentsEnumBankAccountTypeEnum `form:"name=BankAccountType"`
	ChargeAmount        *float64                                `form:"name=ChargeAmount"`
	Currency            *string                                 `form:"name=Currency"`
	Description         *string                                 `form:"name=Description"`
	IdempotencyKey      string                                  `form:"name=IdempotencyKey"`
	Input               *string                                 `form:"name=Input"`
	MinPostalCodeLength *int64                                  `form:"name=MinPostalCodeLength"`
	Parameter           *interface{}                            `form:"name=Parameter"`
	PaymentConnector    *string                                 `form:"name=PaymentConnector"`
	PaymentMethod       *shared.PaymentsEnumPaymentMethodEnum   `form:"name=PaymentMethod"`
	PostalCode          *bool                                   `form:"name=PostalCode"`
	SecurityCode        *bool                                   `form:"name=SecurityCode"`
	StatusCallback      string                                  `form:"name=StatusCallback"`
	Timeout             *int64                                  `form:"name=Timeout"`
	TokenType           *shared.PaymentsEnumTokenTypeEnum       `form:"name=TokenType"`
	ValidCardTypes      *string                                 `form:"name=ValidCardTypes"`
}

type CreatePaymentsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreatePaymentsRequest struct {
	ServerURL  *string
	PathParams CreatePaymentsPathParams
	Request    *CreatePaymentsRequestBodyCreatePaymentsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreatePaymentsSecurity
}

type CreatePaymentsResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountCallPayments *shared.APIV2010AccountCallPayments
}
