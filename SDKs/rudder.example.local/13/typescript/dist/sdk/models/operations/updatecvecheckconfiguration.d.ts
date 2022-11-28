import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CVE check config
**/
export declare class UpdateCveCheckConfigurationRequestBody extends SpeakeasyBase {
    apiKey?: string;
    url?: string;
}
export declare enum UpdateCveCheckConfiguration200ApplicationJsonActionEnum {
    UpdateCveCheckConfiguration = "updateCVECheckConfiguration"
}
export declare class UpdateCveCheckConfiguration200ApplicationJsonData extends SpeakeasyBase {
    apiKey?: string;
    url?: string;
}
export declare enum UpdateCveCheckConfiguration200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateCveCheckConfiguration200ApplicationJson extends SpeakeasyBase {
    action: UpdateCveCheckConfiguration200ApplicationJsonActionEnum;
    data: UpdateCveCheckConfiguration200ApplicationJsonData;
    result: UpdateCveCheckConfiguration200ApplicationJsonResultEnum;
}
export declare class UpdateCveCheckConfigurationRequest extends SpeakeasyBase {
    request?: UpdateCveCheckConfigurationRequestBody;
}
export declare class UpdateCveCheckConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateCveCheckConfiguration200ApplicationJsonObject?: UpdateCveCheckConfiguration200ApplicationJson;
}
