import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdatePaymentsServerList = [
	"https://api.twilio.com",
] as const;


export class UpdatePaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdatePaymentsUpdatePaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Capture;" })
  capture?: shared.PaymentsEnumCaptureEnum;

  @SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" })
  idempotencyKey: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.PaymentsEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback: string;
}


export class UpdatePaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdatePaymentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePaymentsUpdatePaymentsRequest;

  @SpeakeasyMetadata()
  security: UpdatePaymentsSecurity;
}


export class UpdatePaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
