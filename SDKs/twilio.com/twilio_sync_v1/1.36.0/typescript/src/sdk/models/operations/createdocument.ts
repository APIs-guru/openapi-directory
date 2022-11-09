import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDOCUMENT_SERVERS = [
	"https://sync.twilio.com",
];



export class CreateDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateDocumentCreateDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data?: any;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateDocumentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDocumentCreateDocumentRequest;

  @Metadata()
  security: CreateDocumentSecurity;
}


export class CreateDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
