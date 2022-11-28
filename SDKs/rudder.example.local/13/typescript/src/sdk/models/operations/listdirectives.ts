import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListDirectives200ApplicationJsonActionEnum {
    ListDirectives = "listDirectives"
}


export class ListDirectives200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum ListDirectives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListDirectives200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListDirectives200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListDirectives200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListDirectives200ApplicationJsonResultEnum;
}


export class ListDirectivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDirectives200ApplicationJsonObject?: ListDirectives200ApplicationJson;
}
