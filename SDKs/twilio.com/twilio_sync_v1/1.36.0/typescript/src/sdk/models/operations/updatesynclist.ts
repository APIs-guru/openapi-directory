import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCLIST_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateSyncListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncListUpdateSyncListRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSyncListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncListPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncListUpdateSyncListRequest;

  @Metadata()
  security: UpdateSyncListSecurity;
}


export class UpdateSyncListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
