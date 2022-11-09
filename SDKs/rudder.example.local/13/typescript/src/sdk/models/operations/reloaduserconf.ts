import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReloadUserConf200ApplicationJsonActionEnum {
    ReloadUserConf = "reloadUserConf"
}


export class ReloadUserConf200ApplicationJsonDataReload extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: string;
}


export class ReloadUserConf200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=reload" })
  reload: ReloadUserConf200ApplicationJsonDataReload;
}

export enum ReloadUserConf200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadUserConf200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadUserConf200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReloadUserConf200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReloadUserConf200ApplicationJsonResultEnum;
}


export class ReloadUserConfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reloadUserConf200ApplicationJsonObject?: ReloadUserConf200ApplicationJson;
}
