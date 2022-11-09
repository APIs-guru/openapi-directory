import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

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
  @Metadata({ data: "json, name=global" })
  global?: GetStatus200ApplicationJsonDataGlobalEnum;
}

export enum GetStatus200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetStatus200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetStatus200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetStatus200ApplicationJsonResultEnum;
}


export class GetStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatus200ApplicationJsonObject?: GetStatus200ApplicationJson;
}
