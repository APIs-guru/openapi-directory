import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchHostedNumbersAuthorizationDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchHostedNumbersAuthorizationDocumentPathParams;

  @Metadata()
  security: FetchHostedNumbersAuthorizationDocumentSecurity;
}


export class FetchHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
