import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCSYNCMAP_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateSyncSyncMapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncMapCreateSyncSyncMapRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncSyncMapSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncMapRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncSyncMapPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncMapCreateSyncSyncMapRequest;

  @Metadata()
  security: CreateSyncSyncMapSecurity;
}


export class CreateSyncSyncMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncMap?: shared.PreviewSyncServiceSyncMap;
}
