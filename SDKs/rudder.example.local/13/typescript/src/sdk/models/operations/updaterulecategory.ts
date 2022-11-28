import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRuleCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" })
  ruleCategoryId: string;
}

export enum UpdateRuleCategory200ApplicationJsonActionEnum {
    UpdateRuleCategory = "UpdateRuleCategory"
}


export class UpdateRuleCategory200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ruleCategories", elemType: shared.RuleCategory })
  ruleCategories: shared.RuleCategory[];
}

export enum UpdateRuleCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateRuleCategory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateRuleCategory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateRuleCategory200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateRuleCategory200ApplicationJsonResultEnum;
}


export class UpdateRuleCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRuleCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RuleCategoryUpdate;
}


export class UpdateRuleCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateRuleCategory200ApplicationJsonObject?: UpdateRuleCategory200ApplicationJson;
}
