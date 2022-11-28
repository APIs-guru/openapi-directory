import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncListServerList = [
	"https://sync.twilio.com",
] as const;


export class UpdateSyncListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncListUpdateSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSyncListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncListUpdateSyncListRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncListSecurity;
}


export class UpdateSyncListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
