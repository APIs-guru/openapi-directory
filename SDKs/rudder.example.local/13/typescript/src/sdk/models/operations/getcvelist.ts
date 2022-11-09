import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// GetCveListRequestBody
/** 
 * cveList
**/
export class GetCveListRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cveIds" })
  cveIds?: string[];
}


export class GetCveListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: GetCveListRequestBody;
}

export enum GetCveList200ApplicationJsonActionEnum {
    GetCveList = "getCVEList"
}


export class GetCveList200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CVEs", elemType: shared.CveDetails })
  cvEs: shared.CveDetails[];
}

export enum GetCveList200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetCveList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetCveList200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetCveList200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetCveList200ApplicationJsonResultEnum;
}


export class GetCveListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCveList200ApplicationJsonObject?: GetCveList200ApplicationJson;
}
