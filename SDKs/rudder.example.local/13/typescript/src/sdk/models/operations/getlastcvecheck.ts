import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetLastCveCheck200ApplicationJsonActionEnum {
    GetLastCveCheck = "getLastCVECheck"
}


export class GetLastCveCheck200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CVEChecks", elemType: shared.CveCheck })
  cveChecks: shared.CveCheck[];
}

export enum GetLastCveCheck200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetLastCveCheck200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetLastCveCheck200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetLastCveCheck200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetLastCveCheck200ApplicationJsonResultEnum;
}


export class GetLastCveCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLastCveCheck200ApplicationJsonObject?: GetLastCveCheck200ApplicationJson;
}
