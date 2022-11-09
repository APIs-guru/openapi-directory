import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPAYMENTS_SERVERS = [
	"https://api.twilio.com",
];



export class CreatePaymentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class CreatePaymentsCreatePaymentsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=BankAccountType;" })
  bankAccountType?: shared.PaymentsEnumBankAccountTypeEnum;

  @Metadata({ data: "form, name=ChargeAmount;" })
  chargeAmount?: number;

  @Metadata({ data: "form, name=Currency;" })
  currency?: string;

  @Metadata({ data: "form, name=Description;" })
  description?: string;

  @Metadata({ data: "form, name=IdempotencyKey;" })
  idempotencyKey: string;

  @Metadata({ data: "form, name=Input;" })
  input?: string;

  @Metadata({ data: "form, name=MinPostalCodeLength;" })
  minPostalCodeLength?: number;

  @Metadata({ data: "form, name=Parameter;" })
  parameter?: any;

  @Metadata({ data: "form, name=PaymentConnector;" })
  paymentConnector?: string;

  @Metadata({ data: "form, name=PaymentMethod;" })
  paymentMethod?: shared.PaymentsEnumPaymentMethodEnum;

  @Metadata({ data: "form, name=PostalCode;" })
  postalCode?: boolean;

  @Metadata({ data: "form, name=SecurityCode;" })
  securityCode?: boolean;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback: string;

  @Metadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @Metadata({ data: "form, name=TokenType;" })
  tokenType?: shared.PaymentsEnumTokenTypeEnum;

  @Metadata({ data: "form, name=ValidCardTypes;" })
  validCardTypes?: string;
}


export class CreatePaymentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePaymentsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreatePaymentsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePaymentsCreatePaymentsRequest;

  @Metadata()
  security: CreatePaymentsSecurity;
}


export class CreatePaymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
