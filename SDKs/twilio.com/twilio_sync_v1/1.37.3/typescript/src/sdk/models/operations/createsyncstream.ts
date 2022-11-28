import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncStreamServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateSyncStreamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncStreamCreateSyncStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncStreamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncStreamPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncStreamCreateSyncStreamRequest;

  @SpeakeasyMetadata()
  security: CreateSyncStreamSecurity;
}


export class CreateSyncStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
