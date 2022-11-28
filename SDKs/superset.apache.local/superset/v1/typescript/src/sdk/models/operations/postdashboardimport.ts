import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDashboardImportRequestBodyFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostDashboardImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  formData?: PostDashboardImportRequestBodyFormData;

  @SpeakeasyMetadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostDashboardImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDashboardImport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostDashboardImportRequestBody;

  @SpeakeasyMetadata()
  security: PostDashboardImportSecurity;
}


export class PostDashboardImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDashboardImport200ApplicationJsonObject?: PostDashboardImport200ApplicationJson;

  @SpeakeasyMetadata()
  postDashboardImport400ApplicationJsonObject?: PostDashboardImport400ApplicationJson;

  @SpeakeasyMetadata()
  postDashboardImport401ApplicationJsonObject?: PostDashboardImport401ApplicationJson;

  @SpeakeasyMetadata()
  postDashboardImport422ApplicationJsonObject?: PostDashboardImport422ApplicationJson;

  @SpeakeasyMetadata()
  postDashboardImport500ApplicationJsonObject?: PostDashboardImport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
