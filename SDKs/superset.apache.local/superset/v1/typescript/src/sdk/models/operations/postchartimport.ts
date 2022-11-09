import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostChartImportRequestBodyFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostChartImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  formData?: PostChartImportRequestBodyFormData;

  @Metadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostChartImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostChartImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostChartImportRequestBody;

  @Metadata()
  security: PostChartImportSecurity;
}


export class PostChartImport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postChartImport200ApplicationJsonObject?: PostChartImport200ApplicationJson;

  @Metadata()
  postChartImport400ApplicationJsonObject?: PostChartImport400ApplicationJson;

  @Metadata()
  postChartImport401ApplicationJsonObject?: PostChartImport401ApplicationJson;

  @Metadata()
  postChartImport422ApplicationJsonObject?: PostChartImport422ApplicationJson;

  @Metadata()
  postChartImport500ApplicationJsonObject?: PostChartImport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
