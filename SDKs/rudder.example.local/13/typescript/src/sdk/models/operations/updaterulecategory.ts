import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRuleCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" })
  ruleCategoryId: string;
}


export class UpdateRuleCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRuleCategoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RuleCategoryUpdate;
}

export enum UpdateRuleCategory200ApplicationJsonActionEnum {
    UpdateRuleCategory = "UpdateRuleCategory"
}


export class UpdateRuleCategory200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ruleCategories", elemType: shared.RuleCategory })
  ruleCategories: shared.RuleCategory[];
}

export enum UpdateRuleCategory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateRuleCategory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateRuleCategory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateRuleCategory200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateRuleCategory200ApplicationJsonResultEnum;
}


export class UpdateRuleCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateRuleCategory200ApplicationJsonObject?: UpdateRuleCategory200ApplicationJson;
}
