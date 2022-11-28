import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableBrocadeSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EnableBrocadeSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class EnableBrocadeSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnableBrocadeSwitchPathParams;

  @SpeakeasyMetadata()
  security: EnableBrocadeSwitchSecurity;
}


export class EnableBrocadeSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
