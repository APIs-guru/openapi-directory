import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSUPPORTINGDOCUMENTTYPE_SERVERS = [
	"https://trusthub.twilio.com",
];



export class FetchSupportingDocumentTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchSupportingDocumentTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSupportingDocumentTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSupportingDocumentTypePathParams;

  @Metadata()
  security: FetchSupportingDocumentTypeSecurity;
}


export class FetchSupportingDocumentTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1SupportingDocumentType?: shared.TrusthubV1SupportingDocumentType;
}
