import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESTREAMMESSAGE_SERVERS = [
	"https://sync.twilio.com",
];



export class CreateStreamMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=StreamSid" })
  streamSid: string;
}


export class CreateStreamMessageCreateStreamMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data: any;
}


export class CreateStreamMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateStreamMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateStreamMessagePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateStreamMessageCreateStreamMessageRequest;

  @Metadata()
  security: CreateStreamMessageSecurity;
}


export class CreateStreamMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncStreamStreamMessage?: shared.SyncV1ServiceSyncStreamStreamMessage;
}
