import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: string;
}

export enum GetSetting200ApplicationJsonActionEnum {
    GetSetting = "getSetting"
}


// GetSetting200ApplicationJsonData
/** 
 * Information about the setting
**/
export class GetSetting200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settingId" })
  settingId?: string;
}

export enum GetSetting200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetSetting200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetSetting200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetSetting200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetSetting200ApplicationJsonResultEnum;
}


export class GetSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingPathParams;
}


export class GetSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSetting200ApplicationJsonObject?: GetSetting200ApplicationJson;
}
