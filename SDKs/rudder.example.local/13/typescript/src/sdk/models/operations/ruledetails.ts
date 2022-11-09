import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RuleDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class RuleDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RuleDetailsPathParams;
}

export enum RuleDetails200ApplicationJsonActionEnum {
    RuleDetails = "ruleDetails"
}


export class RuleDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum RuleDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class RuleDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RuleDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: RuleDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: RuleDetails200ApplicationJsonResultEnum;
}


export class RuleDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ruleDetails200ApplicationJsonObject?: RuleDetails200ApplicationJson;
}
