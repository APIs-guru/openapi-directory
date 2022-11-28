import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBenefitsDocumentUploadDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBenefitsDocumentUploadDownloadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetBenefitsDocumentUploadDownload401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadDownload403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadDownload404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadDownload429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadDownload500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBenefitsDocumentUploadDownloadPathParams;

  @SpeakeasyMetadata()
  security: GetBenefitsDocumentUploadDownloadSecurity;
}


export class GetBenefitsDocumentUploadDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadDownload200ApplicationZipBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadDownload401ApplicationJsonObject?: GetBenefitsDocumentUploadDownload401ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadDownload403ApplicationJsonObject?: GetBenefitsDocumentUploadDownload403ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadDownload404ApplicationJsonObject?: GetBenefitsDocumentUploadDownload404ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadDownload429ApplicationJsonObject?: GetBenefitsDocumentUploadDownload429ApplicationJson;

  @SpeakeasyMetadata()
  getBenefitsDocumentUploadDownload500ApplicationJsonObject?: GetBenefitsDocumentUploadDownload500ApplicationJson;
}
