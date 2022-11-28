import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}

export enum DeleteRule200ApplicationJsonActionEnum {
    DeleteRule = "deleteRule"
}


export class DeleteRule200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum DeleteRule200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteRule200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteRule200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteRule200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteRule200ApplicationJsonResultEnum;
}


export class DeleteRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRulePathParams;
}


export class DeleteRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteRule200ApplicationJsonObject?: DeleteRule200ApplicationJson;
}
