import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBenefitsDocumentUploadStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBenefitsDocumentUploadStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetBenefitsDocumentUploadStatus401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatus403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatus404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadStatus429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadStatus500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBenefitsDocumentUploadStatusPathParams;

  @SpeakeasyMetadata()
  security: GetBenefitsDocumentUploadStatusSecurity;
}


export class GetBenefitsDocumentUploadStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatus200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatus401ApplicationJsonObject?: GetBenefitsDocumentUploadStatus401ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatus403ApplicationJsonObject?: GetBenefitsDocumentUploadStatus403ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatus404ApplicationJsonObject?: GetBenefitsDocumentUploadStatus404ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatus429ApplicationJsonObject?: GetBenefitsDocumentUploadStatus429ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadStatus500ApplicationJsonObject?: GetBenefitsDocumentUploadStatus500ApplicationJson;
}
