import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: string;
}


export class GetSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingPathParams;
}

export enum GetSetting200ApplicationJsonActionEnum {
    GetSetting = "getSetting"
}


// GetSetting200ApplicationJsonData
/** 
 * Information about the setting
**/
export class GetSetting200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=settingId" })
  settingId?: string;
}

export enum GetSetting200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetSetting200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetSetting200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetSetting200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: GetSetting200ApplicationJsonResultEnum;
}


export class GetSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSetting200ApplicationJsonObject?: GetSetting200ApplicationJson;
}
