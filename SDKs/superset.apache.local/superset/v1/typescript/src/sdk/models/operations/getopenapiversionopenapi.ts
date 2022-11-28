import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOpenapiVersionOpenapiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetOpenapiVersionOpenapiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetOpenapiVersionOpenapi404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetOpenapiVersionOpenapi500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetOpenapiVersionOpenapiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOpenapiVersionOpenapiPathParams;

  @SpeakeasyMetadata()
  security: GetOpenapiVersionOpenapiSecurity;
}


export class GetOpenapiVersionOpenapiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOpenapiVersionOpenapi200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  getOpenapiVersionOpenapi404ApplicationJsonObject?: GetOpenapiVersionOpenapi404ApplicationJson;

  @SpeakeasyMetadata()
  getOpenapiVersionOpenapi500ApplicationJsonObject?: GetOpenapiVersionOpenapi500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
