import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncMapServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateSyncMapPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncMapCreateSyncMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncMapSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncMapPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncMapCreateSyncMapRequest;

  @SpeakeasyMetadata()
  security: CreateSyncMapSecurity;
}


export class CreateSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
