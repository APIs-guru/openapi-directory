import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESUPPORTINGDOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateSupportingDocumentCreateSupportingDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Type;" })
  type: string;
}


export class CreateSupportingDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSupportingDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSupportingDocumentCreateSupportingDocumentRequest;

  @Metadata()
  security: CreateSupportingDocumentSecurity;
}


export class CreateSupportingDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1SupportingDocument?: shared.TrusthubV1SupportingDocument;
}
