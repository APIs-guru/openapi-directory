import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFirewallRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFirewallRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetFirewallRuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFirewallRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFirewallRulePathParams;

  @Metadata()
  queryParams: GetFirewallRuleQueryParams;

  @Metadata()
  security: GetFirewallRuleSecurity;
}


export class GetFirewallRuleResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseFirewallRule?: shared.BaseFirewallRule;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
