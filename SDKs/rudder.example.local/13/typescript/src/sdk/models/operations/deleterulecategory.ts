import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRuleCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" })
  ruleCategoryId: string;
}

export enum DeleteRuleCategory200ApplicationJsonActionEnum {
    DeleteRuleCategory = "DeleteRuleCategory"
}


export class DeleteRuleCategory200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.RuleCategory })
  groupCategories: shared.RuleCategory[];
}

export enum DeleteRuleCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteRuleCategory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteRuleCategory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteRuleCategory200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteRuleCategory200ApplicationJsonResultEnum;
}


export class DeleteRuleCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRuleCategoryPathParams;
}


export class DeleteRuleCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteRuleCategory200ApplicationJsonObject?: DeleteRuleCategory200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
