import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RuleNew;
}

export enum CreateRule200ApplicationJsonActionEnum {
    CreateRule = "createRule"
}


export class CreateRule200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum CreateRule200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateRule200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateRule200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateRule200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateRule200ApplicationJsonResultEnum;
}


export class CreateRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createRule200ApplicationJsonObject?: CreateRule200ApplicationJson;
}
