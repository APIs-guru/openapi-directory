import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CheckCve200ApplicationJsonActionEnum {
    CheckCve = "checkCVE"
}


export class CheckCve200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cveChecks", elemType: shared.CveCheck })
  cveChecks: shared.CveCheck[];
}

export enum CheckCve200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CheckCve200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CheckCve200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CheckCve200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CheckCve200ApplicationJsonResultEnum;
}


export class CheckCveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkCve200ApplicationJsonObject?: CheckCve200ApplicationJson;
}
