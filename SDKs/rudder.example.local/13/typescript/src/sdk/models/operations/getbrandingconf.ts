import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetBrandingConf200ApplicationJsonActionEnum {
    GetBrandingConf = "getBrandingConf"
}


export class GetBrandingConf200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=branding" })
  branding: shared.BrandingConf;
}

export enum GetBrandingConf200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetBrandingConf200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetBrandingConf200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetBrandingConf200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetBrandingConf200ApplicationJsonResultEnum;
}


export class GetBrandingConfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBrandingConf200ApplicationJsonObject?: GetBrandingConf200ApplicationJson;
}
