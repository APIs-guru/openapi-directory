import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBRandingConfRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BrandingConf;
}

export enum UpdateBRandingConf200ApplicationJsonActionEnum {
    UpdateBRandingConf = "updateBRandingConf"
}


export class UpdateBRandingConf200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=branding" })
  branding: shared.BrandingConf;
}

export enum UpdateBRandingConf200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateBRandingConf200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateBRandingConf200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateBRandingConf200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateBRandingConf200ApplicationJsonResultEnum;
}


export class UpdateBRandingConfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateBRandingConf200ApplicationJsonObject?: UpdateBRandingConf200ApplicationJson;
}
