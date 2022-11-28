import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteJuniperSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteJuniperSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DeleteJuniperSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteJuniperSwitchPathParams;

  @SpeakeasyMetadata()
  security: DeleteJuniperSwitchSecurity;
}


export class DeleteJuniperSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
