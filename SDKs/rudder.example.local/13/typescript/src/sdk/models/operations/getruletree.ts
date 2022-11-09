import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRuleTree200ApplicationJsonActionEnum {
    GetRuleTree = "GetRuleTree"
}


export class GetRuleTree200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ruleCategories" })
  ruleCategories: Map<string, any>;
}

export enum GetRuleTree200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetRuleTree200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetRuleTree200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetRuleTree200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetRuleTree200ApplicationJsonResultEnum;
}


export class GetRuleTreeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRuleTree200ApplicationJsonObject?: GetRuleTree200ApplicationJson;

  @Metadata()
  statusCode: number;
}
