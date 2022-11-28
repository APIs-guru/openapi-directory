import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRuleTree200ApplicationJsonActionEnum {
    GetRuleTree = "GetRuleTree"
}


export class GetRuleTree200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ruleCategories" })
  ruleCategories: Map<string, any>;
}

export enum GetRuleTree200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetRuleTree200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetRuleTree200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetRuleTree200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetRuleTree200ApplicationJsonResultEnum;
}


export class GetRuleTreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRuleTree200ApplicationJsonObject?: GetRuleTree200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
