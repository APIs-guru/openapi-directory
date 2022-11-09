import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CheckCve200ApplicationJsonActionEnum {
    CheckCve = "checkCVE"
}


export class CheckCve200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=cveChecks", elemType: shared.CveCheck })
  cveChecks: shared.CveCheck[];
}

export enum CheckCve200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CheckCve200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CheckCve200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CheckCve200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CheckCve200ApplicationJsonResultEnum;
}


export class CheckCveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkCve200ApplicationJsonObject?: CheckCve200ApplicationJson;
}
