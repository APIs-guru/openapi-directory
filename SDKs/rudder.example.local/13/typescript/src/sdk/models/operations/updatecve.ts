import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateCveRequestBody
/** 
 * CVE update config
**/
export class UpdateCveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=years" })
  years?: string[];
}

export enum UpdateCve200ApplicationJsonActionEnum {
    UpdateCve = "updateCVE"
}


export class UpdateCve200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CVEs" })
  cvEs: number;
}

export enum UpdateCve200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateCve200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateCve200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateCve200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateCve200ApplicationJsonResultEnum;
}


export class UpdateCveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateCveRequestBody;
}


export class UpdateCveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCve200ApplicationJsonObject?: UpdateCve200ApplicationJson;
}
