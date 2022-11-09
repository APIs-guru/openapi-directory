import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class UpdateRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RuleWithCategory;
}

export enum UpdateRule200ApplicationJsonActionEnum {
    UpdateRule = "updateRule"
}


export class UpdateRule200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.RuleWithCategory })
  rules: shared.RuleWithCategory[];
}

export enum UpdateRule200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateRule200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateRule200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateRule200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateRule200ApplicationJsonResultEnum;
}


export class UpdateRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateRule200ApplicationJsonObject?: UpdateRule200ApplicationJson;
}
