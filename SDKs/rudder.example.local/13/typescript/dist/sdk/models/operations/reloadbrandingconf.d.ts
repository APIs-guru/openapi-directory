import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReloadBrandingConf200ApplicationJsonActionEnum {
    GetBrandingConf = "getBrandingConf"
}
export declare class ReloadBrandingConf200ApplicationJsonData extends SpeakeasyBase {
    branding: shared.BrandingConf;
}
export declare enum ReloadBrandingConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadBrandingConf200ApplicationJson extends SpeakeasyBase {
    action: ReloadBrandingConf200ApplicationJsonActionEnum;
    data: ReloadBrandingConf200ApplicationJsonData;
    result: ReloadBrandingConf200ApplicationJsonResultEnum;
}
export declare class ReloadBrandingConfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reloadBrandingConf200ApplicationJsonObject?: ReloadBrandingConf200ApplicationJson;
}
