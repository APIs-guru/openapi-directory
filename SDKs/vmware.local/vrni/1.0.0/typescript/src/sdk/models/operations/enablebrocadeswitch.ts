import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableBrocadeSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EnableBrocadeSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class EnableBrocadeSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnableBrocadeSwitchPathParams;

  @Metadata()
  security: EnableBrocadeSwitchSecurity;
}


export class EnableBrocadeSwitchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
