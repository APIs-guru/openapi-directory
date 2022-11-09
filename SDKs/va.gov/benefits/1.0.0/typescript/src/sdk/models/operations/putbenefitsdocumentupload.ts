import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutBenefitsDocumentUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-MD5" })
  contentMd5?: string;
}


export class PutBenefitsDocumentUploadRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutBenefitsDocumentUploadHeaders;
}


export class PutBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class PutBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: any[];
}


export class PutBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class PutBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutBenefitsDocumentUploadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  putBenefitsDocumentUpload401ApplicationJsonObject?: PutBenefitsDocumentUpload401ApplicationJson;

  @Metadata()
  putBenefitsDocumentUpload422ApplicationJsonObject?: PutBenefitsDocumentUpload422ApplicationJson;

  @Metadata()
  putBenefitsDocumentUpload429ApplicationJsonObject?: PutBenefitsDocumentUpload429ApplicationJson;

  @Metadata()
  putBenefitsDocumentUpload500ApplicationJsonObject?: PutBenefitsDocumentUpload500ApplicationJson;
}
