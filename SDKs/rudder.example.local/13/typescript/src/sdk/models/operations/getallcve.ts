import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAllCve200ApplicationJsonActionEnum {
    GetAllCve = "getAllCve"
}


export class GetAllCve200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CVEs", elemType: shared.CveDetails })
  cvEs: shared.CveDetails[];
}

export enum GetAllCve200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetAllCve200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetAllCve200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetAllCve200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetAllCve200ApplicationJsonResultEnum;
}


export class GetAllCveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllCve200ApplicationJsonObject?: GetAllCve200ApplicationJson;
}
