import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



// GetCveListRequestBody
/** 
 * cveList
**/
export class GetCveListRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cveIds" })
  cveIds?: string[];
}

export enum GetCveList200ApplicationJsonActionEnum {
    GetCveList = "getCVEList"
}


export class GetCveList200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CVEs", elemType: shared.CveDetails })
  cvEs: shared.CveDetails[];
}

export enum GetCveList200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetCveList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetCveList200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetCveList200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetCveList200ApplicationJsonResultEnum;
}


export class GetCveListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GetCveListRequestBody;
}


export class GetCveListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCveList200ApplicationJsonObject?: GetCveList200ApplicationJson;
}
