import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFirewallQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFirewallPathParams;

  @Metadata()
  queryParams: GetFirewallQueryParams;

  @Metadata()
  security: GetFirewallSecurity;
}


export class GetFirewallResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseFirewallRule?: shared.BaseFirewallRule;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
