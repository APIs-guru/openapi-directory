import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReloadBrandingConf200ApplicationJsonActionEnum {
    GetBrandingConf = "getBrandingConf"
}


export class ReloadBrandingConf200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branding" })
  branding: shared.BrandingConf;
}

export enum ReloadBrandingConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadBrandingConf200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadBrandingConf200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReloadBrandingConf200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadBrandingConf200ApplicationJsonResultEnum;
}


export class ReloadBrandingConfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reloadBrandingConf200ApplicationJsonObject?: ReloadBrandingConf200ApplicationJson;
}
