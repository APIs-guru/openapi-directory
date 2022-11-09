import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListGroups200ApplicationJsonActionEnum {
    ListGroups = "listGroups"
}


export class ListGroups200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum ListGroups200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListGroups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListGroups200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListGroups200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListGroups200ApplicationJsonResultEnum;
}


export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listGroups200ApplicationJsonObject?: ListGroups200ApplicationJson;
}
