import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReloadGroups200ApplicationJsonActionEnum {
    ReloadGroups = "reloadGroups"
}

export enum ReloadGroups200ApplicationJsonDataGroupsEnum {
    Started = "Started"
}


export class ReloadGroups200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: ReloadGroups200ApplicationJsonDataGroupsEnum;
}

export enum ReloadGroups200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadGroups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadGroups200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReloadGroups200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadGroups200ApplicationJsonResultEnum;
}


export class ReloadGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reloadGroups200ApplicationJsonObject?: ReloadGroups200ApplicationJson;
}
