import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOpenapiVersionOpenapiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetOpenapiVersionOpenapiSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetOpenapiVersionOpenapiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOpenapiVersionOpenapiPathParams;

  @Metadata()
  security: GetOpenapiVersionOpenapiSecurity;
}


export class GetOpenapiVersionOpenapi404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetOpenapiVersionOpenapi500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetOpenapiVersionOpenapiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOpenapiVersionOpenapi200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  getOpenapiVersionOpenapi404ApplicationJsonObject?: GetOpenapiVersionOpenapi404ApplicationJson;

  @Metadata()
  getOpenapiVersionOpenapi500ApplicationJsonObject?: GetOpenapiVersionOpenapi500ApplicationJson;

  @Metadata()
  statusCode: number;
}
