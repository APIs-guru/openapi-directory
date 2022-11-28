import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSupportingDocumentServerList = [
	"https://numbers.twilio.com",
] as const;


export class CreateSupportingDocumentCreateSupportingDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: any;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: string;
}


export class CreateSupportingDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSupportingDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSupportingDocumentCreateSupportingDocumentRequest;

  @SpeakeasyMetadata()
  security: CreateSupportingDocumentSecurity;
}


export class CreateSupportingDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  numbersV2RegulatoryComplianceSupportingDocument?: shared.NumbersV2RegulatoryComplianceSupportingDocument;
}
