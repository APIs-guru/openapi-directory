import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBenefitsDocumentUploadDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBenefitsDocumentUploadDownloadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetBenefitsDocumentUploadDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBenefitsDocumentUploadDownloadPathParams;

  @Metadata()
  security: GetBenefitsDocumentUploadDownloadSecurity;
}


export class GetBenefitsDocumentUploadDownload401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadDownload403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadDownload404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadDownload429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class GetBenefitsDocumentUploadDownload500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetBenefitsDocumentUploadDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBenefitsDocumentUploadDownload200ApplicationZipBinaryString?: Uint8Array;

  @Metadata()
  getBenefitsDocumentUploadDownload401ApplicationJsonObject?: GetBenefitsDocumentUploadDownload401ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadDownload403ApplicationJsonObject?: GetBenefitsDocumentUploadDownload403ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadDownload404ApplicationJsonObject?: GetBenefitsDocumentUploadDownload404ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadDownload429ApplicationJsonObject?: GetBenefitsDocumentUploadDownload429ApplicationJson;

  @Metadata()
  getBenefitsDocumentUploadDownload500ApplicationJsonObject?: GetBenefitsDocumentUploadDownload500ApplicationJson;
}
