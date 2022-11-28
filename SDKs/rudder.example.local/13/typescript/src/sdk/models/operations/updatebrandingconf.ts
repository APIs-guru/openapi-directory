import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateBRandingConf200ApplicationJsonActionEnum {
    UpdateBRandingConf = "updateBRandingConf"
}


export class UpdateBRandingConf200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branding" })
  branding: shared.BrandingConf;
}

export enum UpdateBRandingConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateBRandingConf200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateBRandingConf200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateBRandingConf200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateBRandingConf200ApplicationJsonResultEnum;
}


export class UpdateBRandingConfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BrandingConf;
}


export class UpdateBRandingConfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateBRandingConf200ApplicationJsonObject?: UpdateBRandingConf200ApplicationJson;
}
