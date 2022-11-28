import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBenefitsDocumentUploadStatusReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetBenefitsDocumentUploadStatusReport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any[];
}


export class GetBenefitsDocumentUploadStatusReport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatusReport403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatusReport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: any[];
}


export class GetBenefitsDocumentUploadStatusReport429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatusReport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadStatusReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DocumentUploadStatusGuidList;

  @SpeakeasyMetadata()
  security: GetBenefitsDocumentUploadStatusReportSecurity;
}


export class GetBenefitsDocumentUploadStatusReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatusReport200ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport200ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatusReport401ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport401ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatusReport403ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport403ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatusReport422ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport422ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatusReport429ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport429ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatusReport500ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport500ApplicationJson;
}
