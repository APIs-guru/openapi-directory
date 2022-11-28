import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateRule200ApplicationJsonActionEnum {
    CreateRule = "createRule"
}


export class CreateRule200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum CreateRule200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateRule200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateRule200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateRule200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateRule200ApplicationJsonResultEnum;
}


export class CreateRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.RuleNew;
}


export class CreateRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createRule200ApplicationJsonObject?: CreateRule200ApplicationJson;
}
