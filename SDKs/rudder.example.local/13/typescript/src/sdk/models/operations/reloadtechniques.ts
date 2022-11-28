import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReloadTechniques200ApplicationJsonActionEnum {
    ReloadTechniques = "reloadTechniques"
}

export enum ReloadTechniques200ApplicationJsonDataTechniquesEnum {
    Started = "Started"
}


export class ReloadTechniques200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=techniques" })
  techniques: ReloadTechniques200ApplicationJsonDataTechniquesEnum;
}

export enum ReloadTechniques200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadTechniques200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadTechniques200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReloadTechniques200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadTechniques200ApplicationJsonResultEnum;
}


export class ReloadTechniquesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reloadTechniques200ApplicationJsonObject?: ReloadTechniques200ApplicationJson;
}
