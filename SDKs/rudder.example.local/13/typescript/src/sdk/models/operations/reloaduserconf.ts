import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReloadUserConf200ApplicationJsonActionEnum {
    ReloadUserConf = "reloadUserConf"
}


export class ReloadUserConf200ApplicationJsonDataReload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}


export class ReloadUserConf200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reload" })
  reload: ReloadUserConf200ApplicationJsonDataReload;
}

export enum ReloadUserConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadUserConf200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadUserConf200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReloadUserConf200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadUserConf200ApplicationJsonResultEnum;
}


export class ReloadUserConfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reloadUserConf200ApplicationJsonObject?: ReloadUserConf200ApplicationJson;
}
