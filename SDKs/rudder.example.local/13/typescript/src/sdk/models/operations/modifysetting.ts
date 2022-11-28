import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifySettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: string;
}


export class ModifySettingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum ModifySetting200ApplicationJsonActionEnum {
    ModifySetting = "modifySetting"
}


// ModifySetting200ApplicationJsonData
/** 
 * Information about the setting
**/
export class ModifySetting200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settingId" })
  settingId?: string;
}

export enum ModifySetting200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ModifySetting200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ModifySetting200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ModifySetting200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ModifySetting200ApplicationJsonResultEnum;
}


export class ModifySettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModifySettingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ModifySettingRequestBody;
}


export class ModifySettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  modifySetting200ApplicationJsonObject?: ModifySetting200ApplicationJson;
}
