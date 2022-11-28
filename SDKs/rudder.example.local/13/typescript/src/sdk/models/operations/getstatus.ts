import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStatus200ApplicationJsonActionEnum {
    GetStatus = "getStatus"
}

export enum GetStatus200ApplicationJsonDataGlobalEnum {
    Ok = "OK"
}


// GetStatus200ApplicationJsonData
/** 
 * Status of the service
**/
export class GetStatus200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: GetStatus200ApplicationJsonDataGlobalEnum;
}

export enum GetStatus200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetStatus200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetStatus200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetStatus200ApplicationJsonResultEnum;
}


export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStatus200ApplicationJsonObject?: GetStatus200ApplicationJson;
}
