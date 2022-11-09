import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifySettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: string;
}


export class ModifySettingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ModifySettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ModifySettingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ModifySettingRequestBody;
}

export enum ModifySetting200ApplicationJsonActionEnum {
    ModifySetting = "modifySetting"
}


// ModifySetting200ApplicationJsonData
/** 
 * Information about the setting
**/
export class ModifySetting200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=settingId" })
  settingId?: string;
}

export enum ModifySetting200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ModifySetting200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ModifySetting200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ModifySetting200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: ModifySetting200ApplicationJsonResultEnum;
}


export class ModifySettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  modifySetting200ApplicationJsonObject?: ModifySetting200ApplicationJson;
}
