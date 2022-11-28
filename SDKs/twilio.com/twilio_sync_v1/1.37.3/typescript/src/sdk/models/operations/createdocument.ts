import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDocumentServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateDocumentCreateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data?: any;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDocumentCreateDocumentRequest;

  @SpeakeasyMetadata()
  security: CreateDocumentSecurity;
}


export class CreateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
