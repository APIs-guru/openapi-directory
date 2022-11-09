import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateCveRequestBody
/** 
 * CVE update config
**/
export class UpdateCveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=years" })
  years?: string[];
}


export class UpdateCveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateCveRequestBody;
}

export enum UpdateCve200ApplicationJsonActionEnum {
    UpdateCve = "updateCVE"
}


export class UpdateCve200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CVEs" })
  cvEs: number;
}

export enum UpdateCve200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateCve200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateCve200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateCve200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateCve200ApplicationJsonResultEnum;
}


export class UpdateCveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCve200ApplicationJsonObject?: UpdateCve200ApplicationJson;
}
