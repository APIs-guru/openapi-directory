import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostChartImportRequestBodyFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=formData" })
  formData: string;
}


export class PostChartImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  formData?: PostChartImportRequestBodyFormData;

  @SpeakeasyMetadata({ data: "multipart_form, name=overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=passwords" })
  passwords?: string;
}


export class PostChartImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostChartImport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostChartImportRequestBody;

  @SpeakeasyMetadata()
  security: PostChartImportSecurity;
}


export class PostChartImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postChartImport200ApplicationJsonObject?: PostChartImport200ApplicationJson;

  @SpeakeasyMetadata()
  postChartImport400ApplicationJsonObject?: PostChartImport400ApplicationJson;

  @SpeakeasyMetadata()
  postChartImport401ApplicationJsonObject?: PostChartImport401ApplicationJson;

  @SpeakeasyMetadata()
  postChartImport422ApplicationJsonObject?: PostChartImport422ApplicationJson;

  @SpeakeasyMetadata()
  postChartImport500ApplicationJsonObject?: PostChartImport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
