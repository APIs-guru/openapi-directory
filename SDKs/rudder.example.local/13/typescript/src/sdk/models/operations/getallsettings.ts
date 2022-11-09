import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAllSettings200ApplicationJsonActionEnum {
    GetAllSettings = "getAllSettings"
}


// GetAllSettings200ApplicationJsonData
/** 
 * Information about the setting
**/
export class GetAllSettings200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings: any;
}

export enum GetAllSettings200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetAllSettings200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetAllSettings200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetAllSettings200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetAllSettings200ApplicationJsonResultEnum;
}


export class GetAllSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllSettings200ApplicationJsonObject?: GetAllSettings200ApplicationJson;
}
