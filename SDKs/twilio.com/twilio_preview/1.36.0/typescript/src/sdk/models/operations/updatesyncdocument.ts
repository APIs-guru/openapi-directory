import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSyncDocumentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateSyncDocumentUpdateSyncDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data: any;
}


export class UpdateSyncDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncDocumentPathParams;

  @Metadata()
  headers: UpdateSyncDocumentHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncDocumentUpdateSyncDocumentRequest;

  @Metadata()
  security: UpdateSyncDocumentSecurity;
}


export class UpdateSyncDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
