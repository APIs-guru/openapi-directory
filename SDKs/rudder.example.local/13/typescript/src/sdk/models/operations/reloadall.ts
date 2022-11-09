import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReloadAll200ApplicationJsonActionEnum {
    ReloadAll = "reloadAll"
}

export enum ReloadAll200ApplicationJsonDataGroupsEnum {
    Started = "Started"
}

export enum ReloadAll200ApplicationJsonDataTechniquesEnum {
    Started = "Started"
}


export class ReloadAll200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups" })
  groups: ReloadAll200ApplicationJsonDataGroupsEnum;

  @Metadata({ data: "json, name=techniques" })
  techniques: ReloadAll200ApplicationJsonDataTechniquesEnum;
}

export enum ReloadAll200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadAll200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadAll200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReloadAll200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReloadAll200ApplicationJsonResultEnum;
}


export class ReloadAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reloadAll200ApplicationJsonObject?: ReloadAll200ApplicationJson;
}
