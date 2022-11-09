import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReloadBrandingConf200ApplicationJsonActionEnum {
    GetBrandingConf = "getBrandingConf"
}


export class ReloadBrandingConf200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=branding" })
  branding: shared.BrandingConf;
}

export enum ReloadBrandingConf200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadBrandingConf200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadBrandingConf200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReloadBrandingConf200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReloadBrandingConf200ApplicationJsonResultEnum;
}


export class ReloadBrandingConfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reloadBrandingConf200ApplicationJsonObject?: ReloadBrandingConf200ApplicationJson;
}
