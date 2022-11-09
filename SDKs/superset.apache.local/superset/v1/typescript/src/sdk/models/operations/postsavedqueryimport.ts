import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSavedQueryImportRequestBodyFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostSavedQueryImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  formData?: PostSavedQueryImportRequestBodyFormData;

  @Metadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostSavedQueryImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostSavedQueryImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostSavedQueryImportRequestBody;

  @Metadata()
  security: PostSavedQueryImportSecurity;
}


export class PostSavedQueryImport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSavedQueryImport200ApplicationJsonObject?: PostSavedQueryImport200ApplicationJson;

  @Metadata()
  postSavedQueryImport400ApplicationJsonObject?: PostSavedQueryImport400ApplicationJson;

  @Metadata()
  postSavedQueryImport401ApplicationJsonObject?: PostSavedQueryImport401ApplicationJson;

  @Metadata()
  postSavedQueryImport422ApplicationJsonObject?: PostSavedQueryImport422ApplicationJson;

  @Metadata()
  postSavedQueryImport500ApplicationJsonObject?: PostSavedQueryImport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
