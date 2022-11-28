import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetBrandingConf200ApplicationJsonActionEnum {
    GetBrandingConf = "getBrandingConf"
}


export class GetBrandingConf200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branding" })
  branding: shared.BrandingConf;
}

export enum GetBrandingConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetBrandingConf200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetBrandingConf200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetBrandingConf200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetBrandingConf200ApplicationJsonResultEnum;
}


export class GetBrandingConfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBrandingConf200ApplicationJsonObject?: GetBrandingConf200ApplicationJson;
}
