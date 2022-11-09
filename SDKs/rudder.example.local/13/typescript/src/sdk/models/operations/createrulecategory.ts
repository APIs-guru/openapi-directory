import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRuleCategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RuleCategory;
}

export enum CreateRuleCategory200ApplicationJsonActionEnum {
    CreateRuleCategory = "CreateRuleCategory"
}


export class CreateRuleCategory200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ruleCategories", elemType: shared.RuleCategory })
  ruleCategories: shared.RuleCategory[];
}

export enum CreateRuleCategory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateRuleCategory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateRuleCategory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateRuleCategory200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateRuleCategory200ApplicationJsonResultEnum;
}


export class CreateRuleCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRuleCategory200ApplicationJsonObject?: CreateRuleCategory200ApplicationJson;

  @Metadata()
  statusCode: number;
}
