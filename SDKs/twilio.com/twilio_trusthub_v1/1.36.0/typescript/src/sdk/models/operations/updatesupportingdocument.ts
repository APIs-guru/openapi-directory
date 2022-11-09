import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESUPPORTINGDOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class UpdateSupportingDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSupportingDocumentUpdateSupportingDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateSupportingDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSupportingDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSupportingDocumentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSupportingDocumentUpdateSupportingDocumentRequest;

  @Metadata()
  security: UpdateSupportingDocumentSecurity;
}


export class UpdateSupportingDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1SupportingDocument?: shared.TrusthubV1SupportingDocument;
}
