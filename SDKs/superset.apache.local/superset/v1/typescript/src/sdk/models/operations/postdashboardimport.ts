import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDashboardImportRequestBodyFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostDashboardImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  formData?: PostDashboardImportRequestBodyFormData;

  @Metadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostDashboardImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDashboardImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostDashboardImportRequestBody;

  @Metadata()
  security: PostDashboardImportSecurity;
}


export class PostDashboardImport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDashboardImport200ApplicationJsonObject?: PostDashboardImport200ApplicationJson;

  @Metadata()
  postDashboardImport400ApplicationJsonObject?: PostDashboardImport400ApplicationJson;

  @Metadata()
  postDashboardImport401ApplicationJsonObject?: PostDashboardImport401ApplicationJson;

  @Metadata()
  postDashboardImport422ApplicationJsonObject?: PostDashboardImport422ApplicationJson;

  @Metadata()
  postDashboardImport500ApplicationJsonObject?: PostDashboardImport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
