import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBenefitsDocumentUploadStatusReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetBenefitsDocumentUploadStatusReportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DocumentUploadStatusGuidList;

  @Metadata()
  security: GetBenefitsDocumentUploadStatusReportSecurity;
}


export class GetBenefitsDocumentUploadStatusReport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: any[];
}


export class GetBenefitsDocumentUploadStatusReport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatusReport403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatusReport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: any[];
}


export class GetBenefitsDocumentUploadStatusReport429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatusReport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadStatusReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBenefitsDocumentUploadStatusReport200ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport200ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatusReport401ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport401ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatusReport403ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport403ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatusReport422ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport422ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatusReport429ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport429ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadStatusReport500ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport500ApplicationJson;
}
