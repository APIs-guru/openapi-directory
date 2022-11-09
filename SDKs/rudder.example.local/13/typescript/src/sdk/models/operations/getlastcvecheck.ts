import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLastCveCheck200ApplicationJsonActionEnum {
    GetLastCveCheck = "getLastCVECheck"
}


export class GetLastCveCheck200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CVEChecks", elemType: shared.CveCheck })
  cveChecks: shared.CveCheck[];
}

export enum GetLastCveCheck200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetLastCveCheck200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetLastCveCheck200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetLastCveCheck200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetLastCveCheck200ApplicationJsonResultEnum;
}


export class GetLastCveCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLastCveCheck200ApplicationJsonObject?: GetLastCveCheck200ApplicationJson;
}
