import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESINKVALIDATE_SERVERS = [
	"https://events.twilio.com",
];



export class CreateSinkValidatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class CreateSinkValidateCreateSinkValidateRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=TestId;" })
  testId: string;
}


export class CreateSinkValidateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSinkValidateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSinkValidatePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSinkValidateCreateSinkValidateRequest;

  @Metadata()
  security: CreateSinkValidateSecurity;
}


export class CreateSinkValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1SinkSinkValidate?: shared.EventsV1SinkSinkValidate;
}
