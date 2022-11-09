import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiV2ListFederationsHeaders extends SpeakeasyBase {
    xRapidApiKey?: string;
}
export declare class GetApiV2ListFederationsRequest extends SpeakeasyBase {
    headers: GetApiV2ListFederationsHeaders;
}
export declare class GetApiV2ListFederations200ApplicationJson extends SpeakeasyBase {
    data?: string[];
}
export declare class GetApiV2ListFederations404ApplicationJson extends SpeakeasyBase {
    errors?: Map<string, any>;
}
export declare class GetApiV2ListFederationsResponse extends SpeakeasyBase {
    contentType: string;
    getApiV2ListFederations200ApplicationJsonObject?: GetApiV2ListFederations200ApplicationJson;
    getApiV2ListFederations404ApplicationJsonObject?: GetApiV2ListFederations404ApplicationJson;
    statusCode: number;
}
