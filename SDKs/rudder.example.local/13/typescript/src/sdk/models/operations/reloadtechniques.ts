import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReloadTechniques200ApplicationJsonActionEnum {
    ReloadTechniques = "reloadTechniques"
}

export enum ReloadTechniques200ApplicationJsonDataTechniquesEnum {
    Started = "Started"
}


export class ReloadTechniques200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=techniques" })
  techniques: ReloadTechniques200ApplicationJsonDataTechniquesEnum;
}

export enum ReloadTechniques200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadTechniques200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadTechniques200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReloadTechniques200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReloadTechniques200ApplicationJsonResultEnum;
}


export class ReloadTechniquesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reloadTechniques200ApplicationJsonObject?: ReloadTechniques200ApplicationJson;
}
