import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCLIST_SERVERS = [
	"https://sync.twilio.com",
];



export class CreateSyncListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncListCreateSyncListRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncListPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncListCreateSyncListRequest;

  @Metadata()
  security: CreateSyncListSecurity;
}


export class CreateSyncListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
