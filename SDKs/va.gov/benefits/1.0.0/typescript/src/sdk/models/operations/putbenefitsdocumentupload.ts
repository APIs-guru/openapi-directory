import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutBenefitsDocumentUploadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-MD5" })
  contentMd5?: string;
}


export class PutBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class PutBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: any[];
}


export class PutBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class PutBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutBenefitsDocumentUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutBenefitsDocumentUploadHeaders;
}


export class PutBenefitsDocumentUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putBenefitsDocumentUpload401ApplicationJsonObject?: PutBenefitsDocumentUpload401ApplicationJson;

  @SpeakeasyMetadata()
  putBenefitsDocumentUpload422ApplicationJsonObject?: PutBenefitsDocumentUpload422ApplicationJson;

  @SpeakeasyMetadata()
  putBenefitsDocumentUpload429ApplicationJsonObject?: PutBenefitsDocumentUpload429ApplicationJson;

  @SpeakeasyMetadata()
  putBenefitsDocumentUpload500ApplicationJsonObject?: PutBenefitsDocumentUpload500ApplicationJson;
}
