import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDatasetImportRequestBodyFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostDatasetImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  formData?: PostDatasetImportRequestBodyFormData;

  @Metadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostDatasetImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatasetImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostDatasetImportRequestBody;

  @Metadata()
  security: PostDatasetImportSecurity;
}


export class PostDatasetImport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDatasetImport200ApplicationJsonObject?: PostDatasetImport200ApplicationJson;

  @Metadata()
  postDatasetImport400ApplicationJsonObject?: PostDatasetImport400ApplicationJson;

  @Metadata()
  postDatasetImport401ApplicationJsonObject?: PostDatasetImport401ApplicationJson;

  @Metadata()
  postDatasetImport422ApplicationJsonObject?: PostDatasetImport422ApplicationJson;

  @Metadata()
  postDatasetImport500ApplicationJsonObject?: PostDatasetImport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
