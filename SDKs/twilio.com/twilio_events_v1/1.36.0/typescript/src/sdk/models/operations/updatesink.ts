import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESINK_SERVERS = [
	"https://events.twilio.com",
];



export class UpdateSinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSinkUpdateSinkRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Description;" })
  description: string;
}


export class UpdateSinkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSinkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSinkPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSinkUpdateSinkRequest;

  @Metadata()
  security: UpdateSinkSecurity;
}


export class UpdateSinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1Sink?: shared.EventsV1Sink;
}
