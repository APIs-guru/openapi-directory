import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListDirectives200ApplicationJsonActionEnum {
    ListDirectives = "listDirectives"
}


export class ListDirectives200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum ListDirectives200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListDirectives200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListDirectives200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListDirectives200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListDirectives200ApplicationJsonResultEnum;
}


export class ListDirectivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDirectives200ApplicationJsonObject?: ListDirectives200ApplicationJson;
}
