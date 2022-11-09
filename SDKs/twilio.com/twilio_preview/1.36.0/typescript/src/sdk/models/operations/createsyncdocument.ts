import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateSyncDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncDocumentCreateSyncDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data?: any;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncDocumentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncDocumentCreateSyncDocumentRequest;

  @Metadata()
  security: CreateSyncDocumentSecurity;
}


export class CreateSyncDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
