import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSystemInfo200ApplicationJsonActionEnum {
    GetSystemInfo = "getSystemInfo"
}


// GetSystemInfo200ApplicationJsonData
/** 
 * Information about the service
**/
export class GetSystemInfo200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rudder" })
  rudder: any;
}

export enum GetSystemInfo200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetSystemInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetSystemInfo200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetSystemInfo200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetSystemInfo200ApplicationJsonResultEnum;
}


export class GetSystemInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSystemInfo200ApplicationJsonObject?: GetSystemInfo200ApplicationJson;
}
