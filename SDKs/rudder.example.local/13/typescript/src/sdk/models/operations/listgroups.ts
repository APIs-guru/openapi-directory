import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListGroups200ApplicationJsonActionEnum {
    ListGroups = "listGroups"
}


export class ListGroups200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum ListGroups200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListGroups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListGroups200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListGroups200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListGroups200ApplicationJsonResultEnum;
}


export class ListGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listGroups200ApplicationJsonObject?: ListGroups200ApplicationJson;
}
