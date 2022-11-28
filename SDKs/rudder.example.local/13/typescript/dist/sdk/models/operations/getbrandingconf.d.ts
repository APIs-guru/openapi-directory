import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBrandingConf200ApplicationJsonActionEnum {
    GetBrandingConf = "getBrandingConf"
}
export declare class GetBrandingConf200ApplicationJsonData extends SpeakeasyBase {
    branding: shared.BrandingConf;
}
export declare enum GetBrandingConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetBrandingConf200ApplicationJson extends SpeakeasyBase {
    action: GetBrandingConf200ApplicationJsonActionEnum;
    data: GetBrandingConf200ApplicationJsonData;
    result: GetBrandingConf200ApplicationJsonResultEnum;
}
export declare class GetBrandingConfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBrandingConf200ApplicationJsonObject?: GetBrandingConf200ApplicationJson;
}
