import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateCveCheckConfigurationRequestBody
/** 
 * CVE check config
**/
export class UpdateCveCheckConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum UpdateCveCheckConfiguration200ApplicationJsonActionEnum {
    UpdateCveCheckConfiguration = "updateCVECheckConfiguration"
}


export class UpdateCveCheckConfiguration200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum UpdateCveCheckConfiguration200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateCveCheckConfiguration200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateCveCheckConfiguration200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateCveCheckConfiguration200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateCveCheckConfiguration200ApplicationJsonResultEnum;
}


export class UpdateCveCheckConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateCveCheckConfigurationRequestBody;
}


export class UpdateCveCheckConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCveCheckConfiguration200ApplicationJsonObject?: UpdateCveCheckConfiguration200ApplicationJson;
}
