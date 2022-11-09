import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEPAYMENTS_SERVERS = [
	"https://api.twilio.com",
];



export class UpdatePaymentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdatePaymentsUpdatePaymentsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Capture;" })
  capture?: shared.PaymentsEnumCaptureEnum;

  @Metadata({ data: "form, name=IdempotencyKey;" })
  idempotencyKey: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.PaymentsEnumStatusEnum;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback: string;
}


export class UpdatePaymentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePaymentsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdatePaymentsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePaymentsUpdatePaymentsRequest;

  @Metadata()
  security: UpdatePaymentsSecurity;
}


export class UpdatePaymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
