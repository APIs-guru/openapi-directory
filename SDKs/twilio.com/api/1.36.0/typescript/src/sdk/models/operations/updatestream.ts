import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESTREAM_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateStreamUpdateStreamRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.StreamEnumUpdateStatusEnum;
}


export class UpdateStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateStreamRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateStreamPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateStreamUpdateStreamRequest;

  @Metadata()
  security: UpdateStreamSecurity;
}


export class UpdateStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallStream?: shared.ApiV2010AccountCallStream;
}
