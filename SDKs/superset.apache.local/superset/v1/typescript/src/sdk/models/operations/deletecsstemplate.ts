import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCssTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteCssTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteCssTemplate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteCssTemplateQueryParams;

  @SpeakeasyMetadata()
  security: DeleteCssTemplateSecurity;
}


export class DeleteCssTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCssTemplate200ApplicationJsonObject?: DeleteCssTemplate200ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplate401ApplicationJsonObject?: DeleteCssTemplate401ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplate404ApplicationJsonObject?: DeleteCssTemplate404ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplate422ApplicationJsonObject?: DeleteCssTemplate422ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplate500ApplicationJsonObject?: DeleteCssTemplate500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
