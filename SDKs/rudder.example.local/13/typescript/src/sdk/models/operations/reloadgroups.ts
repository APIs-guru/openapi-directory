import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReloadGroups200ApplicationJsonActionEnum {
    ReloadGroups = "reloadGroups"
}

export enum ReloadGroups200ApplicationJsonDataGroupsEnum {
    Started = "Started"
}


export class ReloadGroups200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups" })
  groups: ReloadGroups200ApplicationJsonDataGroupsEnum;
}

export enum ReloadGroups200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadGroups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadGroups200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReloadGroups200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReloadGroups200ApplicationJsonResultEnum;
}


export class ReloadGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reloadGroups200ApplicationJsonObject?: ReloadGroups200ApplicationJson;
}
