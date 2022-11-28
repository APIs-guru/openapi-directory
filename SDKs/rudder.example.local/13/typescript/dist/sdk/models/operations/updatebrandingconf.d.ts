import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBRandingConf200ApplicationJsonActionEnum {
    UpdateBRandingConf = "updateBRandingConf"
}
export declare class UpdateBRandingConf200ApplicationJsonData extends SpeakeasyBase {
    branding: shared.BrandingConf;
}
export declare enum UpdateBRandingConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateBRandingConf200ApplicationJson extends SpeakeasyBase {
    action: UpdateBRandingConf200ApplicationJsonActionEnum;
    data: UpdateBRandingConf200ApplicationJsonData;
    result: UpdateBRandingConf200ApplicationJsonResultEnum;
}
export declare class UpdateBRandingConfRequest extends SpeakeasyBase {
    request: shared.BrandingConf;
}
export declare class UpdateBRandingConfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateBRandingConf200ApplicationJsonObject?: UpdateBRandingConf200ApplicationJson;
}
