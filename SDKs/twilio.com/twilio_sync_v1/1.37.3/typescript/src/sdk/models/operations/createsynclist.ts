import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncListServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateSyncListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncListCreateSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncListCreateSyncListRequest;

  @SpeakeasyMetadata()
  security: CreateSyncListSecurity;
}


export class CreateSyncListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
