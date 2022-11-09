import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCSTREAM_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateSyncStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncStreamUpdateSyncStreamRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSyncStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncStreamRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncStreamPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncStreamUpdateSyncStreamRequest;

  @Metadata()
  security: UpdateSyncStreamSecurity;
}


export class UpdateSyncStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
