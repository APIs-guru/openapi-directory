import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSinkValidateServerList = [
	"https://events.twilio.com",
] as const;


export class CreateSinkValidatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class CreateSinkValidateCreateSinkValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=TestId;" })
  testId: string;
}


export class CreateSinkValidateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSinkValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSinkValidatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSinkValidateCreateSinkValidateRequest;

  @SpeakeasyMetadata()
  security: CreateSinkValidateSecurity;
}


export class CreateSinkValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1SinkSinkValidate?: shared.EventsV1SinkSinkValidate;
}
