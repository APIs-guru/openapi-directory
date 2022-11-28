import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFirewallRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFirewallRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetFirewallRuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFirewallRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFirewallRulePathParams;

  @SpeakeasyMetadata()
  queryParams: GetFirewallRuleQueryParams;

  @SpeakeasyMetadata()
  security: GetFirewallRuleSecurity;
}


export class GetFirewallRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  baseFirewallRule?: shared.BaseFirewallRule;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
