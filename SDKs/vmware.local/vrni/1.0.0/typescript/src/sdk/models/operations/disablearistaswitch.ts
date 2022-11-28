import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisableAristaSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DisableAristaSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DisableAristaSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisableAristaSwitchPathParams;

  @SpeakeasyMetadata()
  security: DisableAristaSwitchSecurity;
}


export class DisableAristaSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
