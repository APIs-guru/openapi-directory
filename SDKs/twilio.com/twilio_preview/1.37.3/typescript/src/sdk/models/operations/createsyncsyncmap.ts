import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncSyncMapServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateSyncSyncMapPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncMapCreateSyncSyncMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncSyncMapSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncSyncMapPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncMapCreateSyncSyncMapRequest;

  @SpeakeasyMetadata()
  security: CreateSyncSyncMapSecurity;
}


export class CreateSyncSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncMap?: shared.PreviewSyncServiceSyncMap;
}
