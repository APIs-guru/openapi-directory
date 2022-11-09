import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCssTemplatePkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteCssTemplatePkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteCssTemplatePkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCssTemplatePkPathParams;

  @Metadata()
  security: DeleteCssTemplatePkSecurity;
}


export class DeleteCssTemplatePk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplatePkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCssTemplatePk200ApplicationJsonObject?: DeleteCssTemplatePk200ApplicationJson;

  @Metadata()
  deleteCssTemplatePk404ApplicationJsonObject?: DeleteCssTemplatePk404ApplicationJson;

  @Metadata()
  deleteCssTemplatePk422ApplicationJsonObject?: DeleteCssTemplatePk422ApplicationJson;

  @Metadata()
  deleteCssTemplatePk500ApplicationJsonObject?: DeleteCssTemplatePk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
