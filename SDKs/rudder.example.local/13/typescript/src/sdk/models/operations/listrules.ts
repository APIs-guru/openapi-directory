import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListRules200ApplicationJsonActionEnum {
    ListRules = "listRules"
}


export class ListRules200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: shared.Rule[];
}

export enum ListRules200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListRules200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListRules200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListRules200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListRules200ApplicationJsonResultEnum;
}


export class ListRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listRules200ApplicationJsonObject?: ListRules200ApplicationJson;
}
