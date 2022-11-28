import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}

export enum UpdateRule200ApplicationJsonActionEnum {
    UpdateRule = "updateRule"
}


export class UpdateRule200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.RuleWithCategory })
  rules: shared.RuleWithCategory[];
}

export enum UpdateRule200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateRule200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateRule200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateRule200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateRule200ApplicationJsonResultEnum;
}


export class UpdateRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RuleWithCategory;
}


export class UpdateRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateRule200ApplicationJsonObject?: UpdateRule200ApplicationJson;
}
