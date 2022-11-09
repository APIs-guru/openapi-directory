import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRuleCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" })
  ruleCategoryId: string;
}


export class DeleteRuleCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRuleCategoryPathParams;
}

export enum DeleteRuleCategory200ApplicationJsonActionEnum {
    DeleteRuleCategory = "DeleteRuleCategory"
}


export class DeleteRuleCategory200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupCategories", elemType: shared.RuleCategory })
  groupCategories: shared.RuleCategory[];
}

export enum DeleteRuleCategory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteRuleCategory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteRuleCategory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteRuleCategory200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteRuleCategory200ApplicationJsonResultEnum;
}


export class DeleteRuleCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteRuleCategory200ApplicationJsonObject?: DeleteRuleCategory200ApplicationJson;

  @Metadata()
  statusCode: number;
}
