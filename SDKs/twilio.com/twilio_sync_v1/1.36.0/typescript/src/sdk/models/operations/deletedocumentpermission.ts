import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEDOCUMENTPERMISSION_SERVERS = [
	"https://sync.twilio.com",
];



export class DeleteDocumentPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class DeleteDocumentPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteDocumentPermissionPathParams;

  @Metadata()
  security: DeleteDocumentPermissionSecurity;
}


export class DeleteDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
