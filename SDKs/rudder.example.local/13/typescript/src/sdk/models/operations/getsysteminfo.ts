import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSystemInfo200ApplicationJsonActionEnum {
    GetSystemInfo = "getSystemInfo"
}


// GetSystemInfo200ApplicationJsonData
/** 
 * Information about the service
**/
export class GetSystemInfo200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rudder" })
  rudder: any;
}

export enum GetSystemInfo200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetSystemInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetSystemInfo200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetSystemInfo200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetSystemInfo200ApplicationJsonResultEnum;
}


export class GetSystemInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSystemInfo200ApplicationJsonObject?: GetSystemInfo200ApplicationJson;
}
