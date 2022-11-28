import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAllSettings200ApplicationJsonActionEnum {
    GetAllSettings = "getAllSettings"
}


// GetAllSettings200ApplicationJsonData
/** 
 * Information about the setting
**/
export class GetAllSettings200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: any;
}

export enum GetAllSettings200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetAllSettings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetAllSettings200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetAllSettings200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetAllSettings200ApplicationJsonResultEnum;
}


export class GetAllSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllSettings200ApplicationJsonObject?: GetAllSettings200ApplicationJson;
}
