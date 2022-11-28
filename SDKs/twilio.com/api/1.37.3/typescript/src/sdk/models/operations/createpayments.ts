import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreatePaymentsServerList = [
	"https://api.twilio.com",
] as const;


export class CreatePaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class CreatePaymentsCreatePaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=BankAccountType;" })
  bankAccountType?: shared.PaymentsEnumBankAccountTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=ChargeAmount;" })
  chargeAmount?: number;

  @SpeakeasyMetadata({ data: "form, name=Currency;" })
  currency?: string;

  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" })
  idempotencyKey: string;

  @SpeakeasyMetadata({ data: "form, name=Input;" })
  input?: string;

  @SpeakeasyMetadata({ data: "form, name=MinPostalCodeLength;" })
  minPostalCodeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=Parameter;" })
  parameter?: any;

  @SpeakeasyMetadata({ data: "form, name=PaymentConnector;" })
  paymentConnector?: string;

  @SpeakeasyMetadata({ data: "form, name=PaymentMethod;" })
  paymentMethod?: shared.PaymentsEnumPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=PostalCode;" })
  postalCode?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SecurityCode;" })
  securityCode?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback: string;

  @SpeakeasyMetadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=TokenType;" })
  tokenType?: shared.PaymentsEnumTokenTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=ValidCardTypes;" })
  validCardTypes?: string;
}


export class CreatePaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreatePaymentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePaymentsCreatePaymentsRequest;

  @SpeakeasyMetadata()
  security: CreatePaymentsSecurity;
}


export class CreatePaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
