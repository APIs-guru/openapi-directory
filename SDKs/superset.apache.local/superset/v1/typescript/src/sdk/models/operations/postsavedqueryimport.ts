import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSavedQueryImportRequestBodyFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostSavedQueryImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  formData?: PostSavedQueryImportRequestBodyFormData;

  @SpeakeasyMetadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostSavedQueryImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostSavedQueryImport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostSavedQueryImportRequestBody;

  @SpeakeasyMetadata()
  security: PostSavedQueryImportSecurity;
}


export class PostSavedQueryImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSavedQueryImport200ApplicationJsonObject?: PostSavedQueryImport200ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQueryImport400ApplicationJsonObject?: PostSavedQueryImport400ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQueryImport401ApplicationJsonObject?: PostSavedQueryImport401ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQueryImport422ApplicationJsonObject?: PostSavedQueryImport422ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQueryImport500ApplicationJsonObject?: PostSavedQueryImport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
