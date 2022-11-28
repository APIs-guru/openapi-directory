import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncDocumentServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateSyncDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncDocumentCreateSyncDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data?: any;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncDocumentCreateSyncDocumentRequest;

  @SpeakeasyMetadata()
  security: CreateSyncDocumentSecurity;
}


export class CreateSyncDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
