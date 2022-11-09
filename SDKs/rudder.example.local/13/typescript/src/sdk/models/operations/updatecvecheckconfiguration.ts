import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateCveCheckConfigurationRequestBody
/** 
 * CVE check config
**/
export class UpdateCveCheckConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class UpdateCveCheckConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateCveCheckConfigurationRequestBody;
}

export enum UpdateCveCheckConfiguration200ApplicationJsonActionEnum {
    UpdateCveCheckConfiguration = "updateCVECheckConfiguration"
}


export class UpdateCveCheckConfiguration200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum UpdateCveCheckConfiguration200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateCveCheckConfiguration200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateCveCheckConfiguration200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateCveCheckConfiguration200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateCveCheckConfiguration200ApplicationJsonResultEnum;
}


export class UpdateCveCheckConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCveCheckConfiguration200ApplicationJsonObject?: UpdateCveCheckConfiguration200ApplicationJson;
}
