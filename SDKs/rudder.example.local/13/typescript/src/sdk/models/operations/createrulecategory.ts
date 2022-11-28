import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateRuleCategory200ApplicationJsonActionEnum {
    CreateRuleCategory = "CreateRuleCategory"
}


export class CreateRuleCategory200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ruleCategories", elemType: shared.RuleCategory })
  ruleCategories: shared.RuleCategory[];
}

export enum CreateRuleCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateRuleCategory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateRuleCategory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateRuleCategory200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateRuleCategory200ApplicationJsonResultEnum;
}


export class CreateRuleCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RuleCategory;
}


export class CreateRuleCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRuleCategory200ApplicationJsonObject?: CreateRuleCategory200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
