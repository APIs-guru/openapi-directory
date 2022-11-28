import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDatabaseImportRequestBodyFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostDatabaseImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  formData?: PostDatabaseImportRequestBodyFormData;

  @SpeakeasyMetadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostDatabaseImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseImport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostDatabaseImportRequestBody;

  @SpeakeasyMetadata()
  security: PostDatabaseImportSecurity;
}


export class PostDatabaseImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDatabaseImport200ApplicationJsonObject?: PostDatabaseImport200ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseImport400ApplicationJsonObject?: PostDatabaseImport400ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseImport401ApplicationJsonObject?: PostDatabaseImport401ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseImport422ApplicationJsonObject?: PostDatabaseImport422ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseImport500ApplicationJsonObject?: PostDatabaseImport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
