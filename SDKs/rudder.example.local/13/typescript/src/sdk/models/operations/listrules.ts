import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListRules200ApplicationJsonActionEnum {
    ListRules = "listRules"
}


export class ListRules200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum ListRules200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListRules200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListRules200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListRules200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListRules200ApplicationJsonResultEnum;
}


export class ListRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listRules200ApplicationJsonObject?: ListRules200ApplicationJson;
}
