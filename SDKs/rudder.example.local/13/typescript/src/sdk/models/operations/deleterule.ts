import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class DeleteRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRulePathParams;
}

export enum DeleteRule200ApplicationJsonActionEnum {
    DeleteRule = "deleteRule"
}


export class DeleteRule200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum DeleteRule200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteRule200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteRule200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteRule200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteRule200ApplicationJsonResultEnum;
}


export class DeleteRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteRule200ApplicationJsonObject?: DeleteRule200ApplicationJson;
}
