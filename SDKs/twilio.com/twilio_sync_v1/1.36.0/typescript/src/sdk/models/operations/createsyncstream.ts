import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCSTREAM_SERVERS = [
	"https://sync.twilio.com",
];



export class CreateSyncStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncStreamCreateSyncStreamRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncStreamRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncStreamPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncStreamCreateSyncStreamRequest;

  @Metadata()
  security: CreateSyncStreamSecurity;
}


export class CreateSyncStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
