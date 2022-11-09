import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCMAP_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateSyncMapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncMapUpdateSyncMapRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSyncMapSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncMapRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncMapPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncMapUpdateSyncMapRequest;

  @Metadata()
  security: UpdateSyncMapSecurity;
}


export class UpdateSyncMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
