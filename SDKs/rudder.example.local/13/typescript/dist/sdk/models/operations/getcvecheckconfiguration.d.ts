import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCveCheckConfiguration200ApplicationJsonActionEnum {
    GetCveCheckConfiguration = "getCVECheckConfiguration"
}
export declare class GetCveCheckConfiguration200ApplicationJsonData extends SpeakeasyBase {
    apiKey?: string;
    url?: string;
}
export declare enum GetCveCheckConfiguration200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetCveCheckConfiguration200ApplicationJson extends SpeakeasyBase {
    action: GetCveCheckConfiguration200ApplicationJsonActionEnum;
    data: GetCveCheckConfiguration200ApplicationJsonData;
    result: GetCveCheckConfiguration200ApplicationJsonResultEnum;
}
export declare class GetCveCheckConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getCveCheckConfiguration200ApplicationJsonObject?: GetCveCheckConfiguration200ApplicationJson;
}
