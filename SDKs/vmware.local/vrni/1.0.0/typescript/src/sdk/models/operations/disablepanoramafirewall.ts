import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisablePanoramaFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DisablePanoramaFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DisablePanoramaFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisablePanoramaFirewallPathParams;

  @Metadata()
  security: DisablePanoramaFirewallSecurity;
}


export class DisablePanoramaFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
