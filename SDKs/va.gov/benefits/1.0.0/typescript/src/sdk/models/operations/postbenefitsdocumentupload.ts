import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBenefitsDocumentUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PostBenefitsDocumentUploadRequest extends SpeakeasyBase {
  @Metadata()
  security: PostBenefitsDocumentUploadSecurity;
}


export class PostBenefitsDocumentUpload202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: any;
}


export class PostBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class PostBenefitsDocumentUpload403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class PostBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: any[];
}


export class PostBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class PostBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PostBenefitsDocumentUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postBenefitsDocumentUpload202ApplicationJsonObject?: PostBenefitsDocumentUpload202ApplicationJson;

  @Metadata()
  postBenefitsDocumentUpload401ApplicationJsonObject?: PostBenefitsDocumentUpload401ApplicationJson;

  @Metadata()
  postBenefitsDocumentUpload403ApplicationJsonObject?: PostBenefitsDocumentUpload403ApplicationJson;

  @Metadata()
  postBenefitsDocumentUpload422ApplicationJsonObject?: PostBenefitsDocumentUpload422ApplicationJson;

  @Metadata()
  postBenefitsDocumentUpload429ApplicationJsonObject?: PostBenefitsDocumentUpload429ApplicationJson;

  @Metadata()
  postBenefitsDocumentUpload500ApplicationJsonObject?: PostBenefitsDocumentUpload500ApplicationJson;
}
