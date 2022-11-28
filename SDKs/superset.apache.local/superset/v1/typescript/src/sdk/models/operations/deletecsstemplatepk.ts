import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCssTemplatePkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteCssTemplatePkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteCssTemplatePk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCssTemplatePkPathParams;

  @SpeakeasyMetadata()
  security: DeleteCssTemplatePkSecurity;
}


export class DeleteCssTemplatePkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCssTemplatePk200ApplicationJsonObject?: DeleteCssTemplatePk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplatePk404ApplicationJsonObject?: DeleteCssTemplatePk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplatePk422ApplicationJsonObject?: DeleteCssTemplatePk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteCssTemplatePk500ApplicationJsonObject?: DeleteCssTemplatePk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
