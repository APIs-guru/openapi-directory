import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDatabaseImportRequestBodyFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostDatabaseImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  formData?: PostDatabaseImportRequestBodyFormData;

  @Metadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostDatabaseImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostDatabaseImportRequestBody;

  @Metadata()
  security: PostDatabaseImportSecurity;
}


export class PostDatabaseImport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDatabaseImport200ApplicationJsonObject?: PostDatabaseImport200ApplicationJson;

  @Metadata()
  postDatabaseImport400ApplicationJsonObject?: PostDatabaseImport400ApplicationJson;

  @Metadata()
  postDatabaseImport401ApplicationJsonObject?: PostDatabaseImport401ApplicationJson;

  @Metadata()
  postDatabaseImport422ApplicationJsonObject?: PostDatabaseImport422ApplicationJson;

  @Metadata()
  postDatabaseImport500ApplicationJsonObject?: PostDatabaseImport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
