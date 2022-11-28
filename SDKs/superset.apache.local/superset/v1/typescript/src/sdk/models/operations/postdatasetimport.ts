import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDatasetImportRequestBodyFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostDatasetImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  formData?: PostDatasetImportRequestBodyFormData;

  @SpeakeasyMetadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostDatasetImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatasetImport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostDatasetImportRequestBody;

  @SpeakeasyMetadata()
  security: PostDatasetImportSecurity;
}


export class PostDatasetImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDatasetImport200ApplicationJsonObject?: PostDatasetImport200ApplicationJson;

  @SpeakeasyMetadata()
  postDatasetImport400ApplicationJsonObject?: PostDatasetImport400ApplicationJson;

  @SpeakeasyMetadata()
  postDatasetImport401ApplicationJsonObject?: PostDatasetImport401ApplicationJson;

  @SpeakeasyMetadata()
  postDatasetImport422ApplicationJsonObject?: PostDatasetImport422ApplicationJson;

  @SpeakeasyMetadata()
  postDatasetImport500ApplicationJsonObject?: PostDatasetImport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
