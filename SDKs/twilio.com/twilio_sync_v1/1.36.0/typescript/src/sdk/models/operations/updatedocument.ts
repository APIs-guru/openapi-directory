import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEDOCUMENT_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDocumentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateDocumentUpdateDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data?: any;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateDocumentPathParams;

  @Metadata()
  headers: UpdateDocumentHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDocumentUpdateDocumentRequest;

  @Metadata()
  security: UpdateDocumentSecurity;
}


export class UpdateDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
