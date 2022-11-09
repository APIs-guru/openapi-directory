import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBenefitsDocumentUploadStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBenefitsDocumentUploadStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetBenefitsDocumentUploadStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBenefitsDocumentUploadStatusPathParams;

  @Metadata()
  security: GetBenefitsDocumentUploadStatusSecurity;
}


export class GetBenefitsDocumentUploadStatus401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatus403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatus404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadStatus429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatus500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBenefitsDocumentUploadStatus200ApplicationJsonAny?: any;

  @Metadata()
  getBenefitsDocumentUploadStatus401ApplicationJsonObject?: GetBenefitsDocumentUploadStatus401ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatus403ApplicationJsonObject?: GetBenefitsDocumentUploadStatus403ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatus404ApplicationJsonObject?: GetBenefitsDocumentUploadStatus404ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatus429ApplicationJsonObject?: GetBenefitsDocumentUploadStatus429ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatus500ApplicationJsonObject?: GetBenefitsDocumentUploadStatus500ApplicationJson;
}
