import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAllCve200ApplicationJsonActionEnum {
    GetAllCve = "getAllCve"
}


export class GetAllCve200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CVEs", elemType: shared.CveDetails })
  cvEs: shared.CveDetails[];
}

export enum GetAllCve200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetAllCve200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetAllCve200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetAllCve200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetAllCve200ApplicationJsonResultEnum;
}


export class GetAllCveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllCve200ApplicationJsonObject?: GetAllCve200ApplicationJson;
}
