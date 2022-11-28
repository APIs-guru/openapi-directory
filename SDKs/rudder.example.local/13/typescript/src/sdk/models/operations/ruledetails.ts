import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RuleDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}

export enum RuleDetails200ApplicationJsonActionEnum {
    RuleDetails = "ruleDetails"
}


export class RuleDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum RuleDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class RuleDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RuleDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: RuleDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: RuleDetails200ApplicationJsonResultEnum;
}


export class RuleDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RuleDetailsPathParams;
}


export class RuleDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ruleDetails200ApplicationJsonObject?: RuleDetails200ApplicationJson;
}
