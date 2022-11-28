import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: ReloadAll200ApplicationJsonDataGroupsEnum;

  @SpeakeasyMetadata({ data: "json, name=techniques" })
  techniques: ReloadAll200ApplicationJsonDataTechniquesEnum;
}

export enum ReloadAll200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadAll200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadAll200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReloadAll200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadAll200ApplicationJsonResultEnum;
}


export class ReloadAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reloadAll200ApplicationJsonObject?: ReloadAll200ApplicationJson;
}
