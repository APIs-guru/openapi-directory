import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableJuniperSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EnableJuniperSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class EnableJuniperSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnableJuniperSwitchPathParams;

  @Metadata()
  security: EnableJuniperSwitchSecurity;
}


export class EnableJuniperSwitchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
